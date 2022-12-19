package docs

import (
	"net/http"

	"github.com/Southclaws/qstring"
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/app/services/docsindex"
	"github.com/openmultiplayer/web/internal/web"
)

type service struct {
	idx *docsindex.Index
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func(idx *docsindex.Index) *service { return &service{idx} }),
		fx.Invoke(func(
			r chi.Router,
			s *service,
		) {
			rtr := chi.NewRouter()
			r.Mount("/docs", rtr)

			fs := http.FileServer(http.Dir("docs/"))

			rtr.With(func(next http.Handler) http.Handler {
				return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
					w.Header().Add("Content-Type", "text/markdown")
					next.ServeHTTP(w, r)
				})
			}).Get("/*", http.StripPrefix("/docs/", fs).ServeHTTP)
			rtr.Get("/search", s.search)
		}),
	)
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

	//nolint:errcheck
	web.Write(w, results)
}
