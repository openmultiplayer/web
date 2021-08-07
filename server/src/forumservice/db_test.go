package forumservice

import (
	"context"
	"fmt"
	"os"
	"testing"

	"github.com/openmultiplayer/web/server/src/db"
)

func TestForum(t *testing.T) {
	os.Setenv("DATABASE_URL", "postgresql://default:default@localhost:5432/prisma")

	prisma := db.NewClient()
	if err := prisma.Connect(); err != nil {
		panic(err)
	}

	user, err := prisma.User.
		UpsertOne(
			db.User.Email.Equals("one@user.com"),
		).
		Create(
			db.User.Email.Set("one@user.com"),
			db.User.AuthMethod.Set(db.AuthMethodDISCORD),
			db.User.Name.Set("bob"),
		).
		Update(
		//
		).
		Exec(context.Background())
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(user)

	forum := New(prisma)

	thread, err := forum.CreateThread(context.Background(), "First thread", "this is my thread", user.ID, []string{})
	fmt.Println(thread, err)

	post, err := forum.CreatePost(context.Background(), "this is my post", user.ID, thread.ID)
	fmt.Println(post, err)

	post, err = forum.CreatePost(context.Background(), "this is my second post\nisn't it cool!!!!!\nwow!!!", user.ID, thread.ID)
	fmt.Println(post, err)
}
