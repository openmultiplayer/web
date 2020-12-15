package serververify

import (
	"context"
	"time"

	sampquery "github.com/Southclaws/go-samp-query"
)

type Verifyer struct{}

type VerifyStatus struct {
	Verified bool   `json:"verified"`
	Error    string `json:"error"`
}

func (v *Verifyer) Verify(ctx context.Context, ip, code string) (chan VerifyStatus, error) {
	ch := make(chan VerifyStatus)

	q, err := sampquery.NewQuery(ip)
	if err != nil {
		return nil, err
	}

	go func() {
		// close the channel after this task finishes.
		defer close(ch)

		// close the query context too
		defer q.Close()

		// check the mapname once a second for 60 seconds
		for i := 0; i < 60; i++ {
			time.Sleep(time.Second)

			inner, cf := context.WithTimeout(ctx, time.Second*10)
			r, err := q.GetRules(inner)
			defer cf()
			if err != nil {
				ch <- VerifyStatus{Error: err.Error()} // Error, retry in 10s
				continue
			}

			if r["mapname"] == code {
				ch <- VerifyStatus{Verified: true} // Verified! Stop now.
				return
			} else {
				ch <- VerifyStatus{Verified: false} // Failed! Retry in 10s
			}
		}

		ch <- VerifyStatus{Error: "Failed after 60 attempts"} // Failed entirely
	}()

	return ch, nil
}
