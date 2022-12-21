package threads

import (
	"net/http"
	"time"

	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/internal/web"
)

type listParams struct {
	Tags     []string  `qstring:"tags"`
	Category string    `qstring:"category"`
	Search   string    `qstring:"search"`
	Before   time.Time `qstring:"before"`
	Sort     string    `qstring:"sort"`
	Offset   int       `qstring:"offset"`
	Max      int       `qstring:"max"`
	Posts    bool      `qstring:"posts"`
}

func (s *service) list(w http.ResponseWriter, r *http.Request) {
	var p listParams
	if !web.ParseQuery(w, r, &p) {
		return
	}

	if p.Before.IsZero() {
		p.Before = time.Now()
	}
	if p.Sort == "" {
		p.Sort = "desc"
	}
	if p.Max == 0 {
		p.Max = 20
	} else if p.Max > 20 {
		p.Max = 20
	}

	// Admins get to see deleted posts
	isAdmin := authentication.IsRequestAdmin(r)

	posts, err := s.threads.GetThreads(r.Context(), p.Tags, p.Category, p.Search, p.Before, p.Sort, p.Offset, p.Max, p.Posts, isAdmin, isAdmin)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	web.Write(w, posts)
}
