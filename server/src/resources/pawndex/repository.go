package pawndex

import "github.com/openmultiplayer/web/server/src/pkgdef"

type Repository interface {
	GetAll() ([]pkgdef.Package, error)
	Get(string) (pkgdef.Package, bool, error)
	Set(pkgdef.Package) error

	MarkForScrape(string) error
	GetMarked() ([]string, error)
}
