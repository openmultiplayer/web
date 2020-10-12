package handler

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/Southclaws/sampctl/build"
	"github.com/Southclaws/sampctl/compiler"
	"github.com/google/go-github/github"
)

var gh = github.NewClient(nil)

type resp struct {
	Problems build.Problems
	Result   build.Result
	Err      string
}

func Handler(w http.ResponseWriter, r *http.Request) {
	input := fmt.Sprintf("%s.pwn", "testfile")
	output := fmt.Sprintf("%s.amx", "testfile")

	o, err := os.Create(input)
	if err != nil {
		w.Write([]byte(fmt.Sprintln("failed to create temp file:", err)))
		return
	}
	if _, err = io.Copy(o, r.Body); err != nil {
		w.Write([]byte(fmt.Sprintln("failed to copy to temp file:", err)))
		return
	}
	if err = o.Close(); err != nil {
		w.Write([]byte(fmt.Sprintln("failed to close temp file:", err)))
		return
	}

	var response resp
	problems, result, err := compiler.CompileSource(r.Context(), gh, ".", ".", ".", "linux", build.Config{
		Name:       "../" + input,
		Version:    "3.10.10",
		WorkingDir: ".",
		// Args:       "",
		Input:    input,
		Output:   output,
		Includes: []string{
			// "./pawn-stdlib",
		},
		// Constants: "",
		// Plugins:   "",
		// Compiler:  "",
	}, false)
	if err != nil {
		response = resp{Err: err.Error()}
	} else {
		response = resp{problems, result, ""}
	}

	if err = json.NewEncoder(w).Encode(response); err != nil {
		fmt.Println("failed to write:", err)
	}
}
