package forumservice

import (
	"math"
	"strings"
)

const MaxShortBodyLength = 128

func makeShortBody(long string) string {
	full := math.Min(float64(len(long)), MaxShortBodyLength)
	firstPara := strings.Index(long, "\n")
	if firstPara == -1 {
		firstPara = 999999
	}

	end := int(math.Min(full, float64(firstPara)))

	return long[:end]
}
