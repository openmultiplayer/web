package forum

import (
	"math"
	"strings"
	"time"
)

const MaxShortBodyLength = 128

func MakeShortBody(long string) string {
	full := math.Min(float64(len(long)), MaxShortBodyLength)
	firstPara := strings.Index(long, "\n")
	if firstPara == -1 {
		firstPara = 999999
	}

	end := int(math.Min(full, float64(firstPara)))

	return long[:end]
}

func timeOrNil(x bool) *time.Time {
	if x {
		t := time.Now()
		return &t
	}
	return nil
}
