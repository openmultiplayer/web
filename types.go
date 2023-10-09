package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"

	"github.com/Southclaws/supervillain"

	"github.com/openmultiplayer/web/app/resources/server"
	"github.com/openmultiplayer/web/app/resources/user"
	"github.com/openmultiplayer/web/app/services/docsindex"
	"github.com/openmultiplayer/web/app/transports/api/auth/discord"
	"github.com/openmultiplayer/web/app/transports/api/auth/github"
	"github.com/openmultiplayer/web/internal/web"
)

// -
//
// What is this!?
//
// This generates TypeScript types from Go structures. This is useful for
// keeping the frontend's type signatures in line with the backend's structures.
//
// Run this task after modifying any the Prisma schema or any of the response
// payloads used by the API.
//
// If you use the Taskfile task `generate` this will be done automatically.
//
// -

func convert(name, prefix string, objs ...interface{}) {
	out := fmt.Sprintf("frontend/src/types/_generated_%s.ts", name)

	fmt.Println("Generating schemas for", out)

	output := strings.Builder{}
	output.WriteString(`import * as z from "zod"

`)
	for _, v := range objs {
		output.WriteString(supervillain.StructToZodSchemaWithPrefix(prefix, v))
	}

	ioutil.WriteFile(
		out,
		[]byte(output.String()),
		os.ModePerm,
	)
}

func main() {
	convert("Error", "API", web.Error{})
	convert("Server", "", server.All{})
	convert("User", "", user.User{})
	convert("SearchResult", "", docsindex.SearchResults{})

	convert("GitHub", "", github.Link{}, github.Callback{})
	convert("Discord", "", discord.Link{}, discord.Callback{})

	fmt.Println("DONE")
}
