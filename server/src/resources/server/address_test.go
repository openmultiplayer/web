package server

import (
	"testing"

	"github.com/pkg/errors"
	"github.com/stretchr/testify/assert"
)

func TestAddressFromString(t *testing.T) {
	type args struct {
		address string
	}
	tests := []struct {
		name     string
		args     args
		wanrAddr string
		wantErrs []string
	}{
		{"valid", args{"192.168.1.2"}, "samp://192.168.1.2:7777", nil},
		{"valid.port", args{"192.168.1.2:7777"}, "samp://192.168.1.2:7777", nil},
		{"valid.scheme", args{"samp://192.168.1.2"}, "samp://192.168.1.2:7777", nil},
		{"invalid.empty", args{""}, "", []string{"address is empty"}},
		{"invalid.port", args{"192.168.1.2:port"}, "", []string{"parse \"samp://192.168.1.2:port\": invalid port \":port\" after host"}},
		{"invalid.scheme", args{"http://192.168.1.2"}, "", []string{"address contains invalid scheme 'http', must be either empty or 'samp://'"}},
		{"invalid.user", args{"user:pass@192.168.1.2"}, "", []string{"address contains a user:password component"}},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			_, gotErrs := AddressFromString(tt.args.address)

			for i := range gotErrs {
				assert.Equal(t, errors.Cause(gotErrs[i]).Error(), tt.wantErrs[i])
			}
		})
	}
}
