package user

import (
	"time"

	"github.com/openmultiplayer/web/internal/db"
)

type AuthMethod string

type User struct {
	ID          string  `json:"id"`
	Email       string  `json:"email"`
	AuthMethod  string  `json:"authMethod"` // enum: "DISCORD", "GITHUB"
	Name        string  `json:"name"`
	Bio         *string `json:"bio"`
	Admin       bool    `json:"admin"`
	ThreadCount int     `json:"threadCount"`
	PostCount   int     `json:"postCount"`

	CreatedAt time.Time  `json:"createdAt"`
	UpdatedAt time.Time  `json:"updatedAt"`
	DeletedAt *time.Time `json:"deletedAt"`

	Github  *string `json:"github"`
	Discord *string `json:"discord"`
}

func FromModel(u *db.UserModel, public bool) (o *User) {
	var github *string
	if u.RelationsUser.Github != nil {
		github = &u.RelationsUser.Github.Username
	}
	var discord *string
	if u.RelationsUser.Discord != nil {
		discord = &u.RelationsUser.Discord.Username
	}
	result := &User{
		ID:         u.InnerUser.ID,
		Email:      u.InnerUser.Email,
		AuthMethod: string(u.InnerUser.AuthMethod),
		Name:       u.InnerUser.Name,
		Bio:        u.InnerUser.Bio,
		Admin:      u.InnerUser.Admin,
		CreatedAt:  u.InnerUser.CreatedAt,
		UpdatedAt:  u.InnerUser.UpdatedAt,
		DeletedAt:  u.InnerUser.DeletedAt,

		Github:  github,
		Discord: discord,
	}

	if public {
		// Email is not included for privacy reasons.
		// If it's required for some API only accessible by either the user
		// themselves or an admin, it must be assigned manually by the caller.
		result.Email = ""
	}

	return result
}

func FromModelMany(u []db.UserModel, public bool) (o []User) {
	for _, v := range u {
		o = append(o, *FromModel(&v, public))
	}
	return
}
