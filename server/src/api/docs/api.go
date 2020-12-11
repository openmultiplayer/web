package docs

import (
	"context"
	"encoding/json"
	"net/http"

	"github.com/Southclaws/qstring"
	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/server/src/docsindex"
	"github.com/openmultiplayer/web/server/src/web"
)

type service struct {
	ctx context.Context
	idx *docsindex.Index
}

func New(ctx context.Context, idx *docsindex.Index) *chi.Mux {
	rtr := chi.NewRouter()
	svc := service{ctx, idx}

	fs := http.FileServer(http.Dir("docs/"))

	rtr.Get("/search", svc.search)
	rtr.Get("/*", http.StripPrefix("/docs/", fs).ServeHTTP)

	return rtr
}

type query struct {
	Query string `qstring:"q"`
}

func (s *service) search(w http.ResponseWriter, r *http.Request) {
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

	json.NewEncoder(w).Encode(results)
}
