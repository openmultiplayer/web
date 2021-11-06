package forum

import "testing"

func Test_makeShortBody(t *testing.T) {
	type args struct {
		long string
	}
	tests := []struct {
		name string
		args args
		want string
	}{
		{
			"short",
			args{"this is a paragraph"},
			"this is a paragraph",
		},
		{
			"paras",
			args{"this is a paragraph\nsecond\nbthird\nfourth"},
			"this is a paragraph",
		},
		{
			"long",
			args{"abcdefeghijklmnopqrstuvwxyzabcdefeghijklmnopqrstuvwxyzabcdefeghijklmnopqrstuvwxyzabcdefeghijklmnopqrstuvwxyzabcdefeghijklmnopqrstuvwxyzabcdefeghijklmnopqrstuvwxyzabcdefeghijklmnopqrstuvwxyzabcdefeghijklmnopqrstuvwxyz"},
			"abcdefeghijklmnopqrstuvwxyzabcdefeghijklmnopqrstuvwxyzabcdefeghijklmnopqrstuvwxyzabcdefeghijklmnopqrstuvwxyzabcdefeghijklmnopqrs",
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := MakeShortBody(tt.args.long); got != tt.want {
				t.Errorf("makeShortBody() = %v, want %v", got, tt.want)
			}
		})
	}
}
