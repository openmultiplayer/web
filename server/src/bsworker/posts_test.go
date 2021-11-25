package bsworker

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
)

func Test_bbcodeToMarkdown(t *testing.T) {
	type args struct{}
	tests := []struct {
		bbc     string
		want    string
		wantErr bool
	}{
		{
			"We welcome you to burgershot.gg, a safe community where you can... [video=youtube]https://www.youtube.com/watch?v=L88EITsfgdA[/video]",
			"We welcome you to burgershot.gg, a safe community where you can... [https://www.youtube.com/watch?v=L88EITsfgdA](https://www.youtube.com/watch?v=L88EITsfgdA)",
			false,
		},
		{
			"[align=center][font=Sans-serif]GitHub[/font][/align]",
			"GitHub",
			false,
		},
		{
			`
[list]
[*]TFASAMP_prepareConnection(host[], password[], api_key[], type[] = "production", bool:tfa_debug = false)
[*]TFASAMP_createUser(playerid, email[], cellphone[], area_code[] = "1")
[*]TFASAMP_verifyToken(playerid, user_id, token[], bool: force = true)
[*]TFASAMP_setPlayerUserID(playerid, userid)
[*]TFASAMP_getPlayerUserID(playerid)
[/list]
`,
			`- TFASAMP\_prepareConnection(host[], password[], api\_key[], type[] = "production", bool:tfa\_debug = false)
- TFASAMP\_createUser(playerid, email[], cellphone[], area\_code[] = "1")
- TFASAMP\_verifyToken(playerid, user\_id, token[], bool: force = true)
- TFASAMP\_setPlayerUserID(playerid, userid)
- TFASAMP\_getPlayerUserID(playerid)`,
			false,
		},
	}
	for ii, tt := range tests {
		t.Run(fmt.Sprint(ii), func(t *testing.T) {
			got, err := bbcodeToMarkdown(tt.bbc)
			if tt.wantErr {
				assert.Error(t, err)
			} else {
				assert.Equal(t, tt.want, got)
			}
		})
	}
}
