---
title: memcpy
sidebar_label: memcpy
description: بایت‌ها را از یک مکان به مکان دیگر کپی کن.
tags: ["string"]
---

<LowercaseNote />

## توضیحات

بایت‌ها را از یک مکان به مکان دیگر کپی می‌کند.

| نام                       | توضیحات                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| dest[]                    | آرایه‌ای که بایت‌های source در آن کپی می‌شوند.                                              |
| const source[]            | آرایه مبدأ.                                                                                |
| index = 0                 | شاخص شروع به بایت در آرایه مقصد که داده‌ها باید در آن کپی شوند.                               |
| numbytes                  | تعداد بایت‌ها (نه سلول‌ها) برای کپی.                                                        |
| maxlength = sizeof (dest) | حداکثر تعداد سلول‌هایی که در بافر مقصد جا می‌شوند.                                           |

## مقدار بازگشتی

**true** در صورت موفقیت، **false** در صورت ناکامی.

## مثال‌ها

```c
// Concatenate two strings with memcpy
new
	destination[64] = "This is ",
	source[] = "a string in a 32 Bit Array";

memcpy(destination, source, strlen(destination) * 4, sizeof source * 4, sizeof destination);
print(destination);
// Output: This is a string in a 32 Bit Array
```

## توابع مرتبط

- [strcmp](strcmp): دو رشته را مقایسه کن تا ببینی که آیا یکسان هستند.
- [strfind](strfind): زیررشته‌ای را در یک رشته جستجو کن.
- [strdel](strdel): قسمتی/همه یک رشته را حذف کن.
- [strins](strins): رشته‌ای را در رشته دیگر قرار بده.
- [strlen](strlen): طول یک رشته را بررسی کن.
- [strmid](strmid): کاراکترهایی را از یک رشته استخراج کن.
- [strpack](strpack): رشته‌ای را در مقصد pack کن.
- [strval](strval): مقدار یک رشته را پیدا کن.
- [strcat](strcat): دو رشته را به هم متصل کن.