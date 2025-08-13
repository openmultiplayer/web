---
title: uuencode
sidebar_label: uuencode
description: یک رشته رو به رشته UU-decoded encode کن.
tags: ["string", "encryption"]
---

<LowercaseNote />

## توضیحات

یک رشته رو به رشته UU-decoded encode می‌کند.

| نام                       | توضیحات                                               |
| ------------------------- | --------------------------------------------------------- |
| dest[]                    | رشته مقصد برای stream encode شده.            |
| const source[]            | رشته منبع که encode نشده.                           |
| numbytes                  | تعداد بایت‌هایی که باید encode بشن، این نباید از 45 بیشتر باشه. |
| maxlength = sizeof (dest) | حداکثر طول آرایه dest[].                   |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
uuencode(encodedString, normalString, 45);
```

## توابع مرتبط

- [uudecode](uudecode): یک رشته UU-encoded رو decode کن.
- [memcpy](memcpy): بایت‌ها رو از یک مکان به مکان دیگه کپی کن.
