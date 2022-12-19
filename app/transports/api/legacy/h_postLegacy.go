package legacy

import (
	"fmt"
	"net/http"
	"strings"

	"go.uber.org/zap"

	"github.com/go-chi/chi"
	"github.com/pkg/errors"

	"github.com/openmultiplayer/web/app/resources/server"
	"github.com/openmultiplayer/web/internal/web"
)

func (s *service) postLegacy(w http.ResponseWriter, r *http.Request) {
	version := chi.URLParam(r, "version")
	port := chi.URLParam(r, "port")

	address := getConnectingIP(r, port)

	zap.L().Info("received request to index server",
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

	web.Write(w, formatted)
}

func getConnectingIP(r *http.Request, port string) string {
	if cfip := r.Header.Get("CF-Connecting-IP"); cfip != "" {
		return fmt.Sprintf("%s:%s", cfip, port)
	}

	if cfip := r.Header.Get("X-Forwarded-For"); cfip != "" {
		return fmt.Sprintf("%s:%s", cfip, port)
	}

	return fmt.Sprintf("%s:%s", strings.Split(r.RemoteAddr, ":")[0], port)
}
