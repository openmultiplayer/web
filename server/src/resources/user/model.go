package user

import (
	"time"

	"github.com/openmultiplayer/web/server/src/db"
)

type User struct {
	ID         string     `json:"id"`
	Email      string     `json:"email"`
	AuthMethod string     `json:"authMethod"` // enum: "DISCORD", "GITHUB"
	Name       string     `json:"name"`
	Bio        *string    `json:"bio"`
	Admin      bool       `json:"admin"`
	CreatedAt  time.Time  `json:"createdAt"`
	UpdatedAt  time.Time  `json:"updatedAt"`
	DeletedAt  *time.Time `json:"deletedAt"`

	Github  *string `json:"github"`
	Discord *string `json:"discord"`
}

func FromModel(u *db.UserModel) (o *User) {
	var github *string
	if u.RelationsUser.Github != nil {
		github = &u.RelationsUser.Github.Username
	}
	var discord *string
	if u.RelationsUser.Discord != nil {
		discord = &u.RelationsUser.Discord.Username
	}
	return &User{
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
}

func FromModelMany(u []db.UserModel) (o []User) {
	for _, v := range u {
		o = append(o, *FromModel(&v))
	}
	return
}
