package legacy

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"

	"go.uber.org/zap"

	"github.com/go-chi/chi"
	"github.com/pkg/errors"

	"github.com/openmultiplayer/web/server/src/server"
	"github.com/openmultiplayer/web/server/src/web"
)

func (s *service) postLegacy(w http.ResponseWriter, r *http.Request) {
	version := chi.URLParam(r, "version")
	port := chi.URLParam(r, "port")

	address := fmt.Sprintf("%s:%s", strings.Split(r.RemoteAddr, ":")[0], port)

	zap.L().Debug("received request to index server",
		zap.String("version", version),
		zap.String("address", address))

	result, err := s.queryer.Query(r.Context(), address)
	if err != nil {
		zap.L().Debug("failed to query server", zap.Error(err))
		web.StatusNotAcceptable(w, errors.Wrap(err, "failed to query server"))
		return
	}

	formatted := server.TransformQueryResult(result, nil)

	if err := s.storer.Upsert(r.Context(), formatted); err != nil {
		web.StatusInternalServerError(w, errors.Wrap(err, "failed to query server"))
		return
	}

	if err := json.NewEncoder(w).Encode(formatted); err != nil {
		web.StatusInternalServerError(w, errors.Wrap(err, "failed to write response"))
		return
	}
}
