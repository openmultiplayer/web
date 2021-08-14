package forum

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/web"
)

type listParams struct {
	Tags   []string  `qstring:"tags"`
	Before time.Time `qstring:"before"`
	Sort   string    `qstring:"sort"`
	Max    int       `qstring:"max"`
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
		p.Max = 50
	} else if p.Max > 100 {
		p.Max = 100
	}

	// Admins get to see deleted posts
	isAdmin := authentication.IsRequestAdmin(r)

	posts, err := s.repo.GetThreads(r.Context(), p.Tags, p.Before, p.Sort, p.Max, isAdmin)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	json.NewEncoder(w).Encode(posts)
}
