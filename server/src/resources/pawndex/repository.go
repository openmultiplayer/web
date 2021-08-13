package pawndex

type Repository interface {
	GetAll() ([]Package, error)
	Get(string) (Package, bool, error)
	Set(Package) error

	MarkForScrape(string) error
	GetMarked() ([]string, error)
}
