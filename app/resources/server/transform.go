package server

import (
	"context"
	"fmt"
	"net"
	"regexp"
	"strings"

	sampquery "github.com/Southclaws/go-samp-query"
)

var (
	ipMatcher = regexp.MustCompile(`\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b`)
	resolver  = net.DefaultResolver
)

func TransformQueryResult(s sampquery.Server, err error) (r All) {
	if err != nil {
		r.Active = false
		return r
	}

	version, ok := s.Rules["version"]
	if !ok {
		version = "unknown"
	}

	r.IP = s.Address
	r.Rules = s.Rules
	r.Active = true
	r.Core = Essential{
		IP:         s.Address,
		Hostname:   s.Hostname,
		Players:    int64(s.Players),
		MaxPlayers: int64(s.MaxPlayers),
		Gamemode:   s.Gamemode,
		Language:   s.Language,
		Password:   s.Password,
		Version:    version,
		IsOmp:      s.IsOmp,
	}

	return r
}

// checks if the "IP" field is actually a domain name and looks up its actual IP
func HydrateDomain(ctx context.Context, r All) All {
	if !ipMatcher.MatchString(r.IP) {
		ip, port := splitPort(r.IP)
		addrs, err := resolver.LookupHost(ctx, ip)
		if err == nil && len(addrs) > 0 {
			r.Domain = new(string)
			*r.Domain = r.IP
			r.IP = fmt.Sprintf("%s:%s", addrs[0], port)
		} else {
			r.Active = false
		}
	}

	return r
}

func splitPort(ip string) (string, string) {
	if idx := strings.IndexRune(ip, ':'); idx != -1 {
		return ip[:idx], ip[idx+1:]
	}
	return ip, "7777" // use sa-mp default for portless IPs
}
