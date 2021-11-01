package burgershot

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/go-chi/chi"
	"github.com/pkg/errors"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/resources/burgershot"
	"github.com/openmultiplayer/web/server/src/web"
)

type service struct {
	b burgershot.Repository
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func(b burgershot.Repository) *service { return &service{b} }),
		fx.Invoke(func(
			r chi.Router,
			s *service,
		) {
			rtr := chi.NewRouter()
			r.Mount("/burgershot", rtr)

			rtr.Get("/{tid}", func(w http.ResponseWriter, r *http.Request) {
				tid, err := strconv.ParseInt(chi.URLParam(r, "tid"), 10, 32)
				if err != nil {
					web.StatusBadRequest(w, errors.Wrap(err, "invalid thread id format"))
					return
				}

				t, err := s.b.GetThread(r.Context(), int(tid))
				if err != nil {
					web.StatusInternalServerError(w, err)
					return
				}

				json.NewEncoder(w).Encode(t)
			})
		}),
	)
}
