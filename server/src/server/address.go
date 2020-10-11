package server

import (
	"fmt"
	"net/url"
	"strconv"
	"strings"

	"github.com/pkg/errors"
)

// AddressFromString validates an address field for a server and ensures it contains the correct
// combination of host:port with either "samp://" or an empty scheme. returns an address with the
// :7777 port if absent (this is the default SA:MP port) and strips the "samp:// protocol".
func AddressFromString(input string) (output string, errs []error) {
	if len(input) < 1 {
		errs = append(errs, errors.New("address is empty"))
	}

	var withScheme string
	if !strings.Contains(input, "://") {
		withScheme = fmt.Sprintf("samp://%s", input)
	} else {
		withScheme = input
	}

	u, err := url.Parse(withScheme)
	if err != nil {
		errs = append(errs, err)
		return
	}

	if u.User != nil {
		errs = append(errs, errors.New("address contains a user:password component"))
	}

	if u.Scheme != "samp" {
		errs = append(errs, errors.Errorf("address contains invalid scheme '%s', must be either empty or 'samp://'", u.Scheme))
	}

	portStr := u.Port()

	if portStr != "" {
		port, err := strconv.Atoi(u.Port())
		if err != nil {
			errs = append(errs, errors.Errorf("invalid port '%s' specified", u.Port()))
			return
		}

		if port < 1024 || port > 49152 {
			errs = append(errs, errors.Errorf("port %d falls within reserved or ephemeral range", port))
			return
		}

		output = u.Host
	} else {
		output = u.Host + ":7777"
	}

	return
}
