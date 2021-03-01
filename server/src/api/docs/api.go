package docs

import (
	"encoding/json"
	"net/http"

	"github.com/Southclaws/qstring"
	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/docsindex"
	"github.com/openmultiplayer/web/server/src/web"
)

type DocsService struct {
	R   chi.Router
	idx *docsindex.Index
}

func New(idx *docsindex.Index) *DocsService {
	svc := &DocsService{chi.NewRouter(), idx}

	fs := http.FileServer(http.Dir("docs/"))

	svc.R.With(func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Header().Add("Content-Type", "text/markdown")
			next.ServeHTTP(w, r)
		})
	}).Get("/*", http.StripPrefix("/docs/", fs).ServeHTTP)
	svc.R.Get("/search", svc.search)

	return svc
}

type query struct {
	Query string `qstring:"q"`
}

func (s *DocsService) search(w http.ResponseWriter, r *http.Request) {
	var q query
	if err := qstring.Unmarshal(r.URL.Query(), &q); err != nil {
		web.StatusBadRequest(w, err)
		return
	}

	results, err := s.idx.Search(q.Query)
	if err != nil {
		web.StatusBadRequest(w, err)
		return
	}

	//nolint:errcheck
	json.NewEncoder(w).Encode(results)
}
