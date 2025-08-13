---
title: uudecode
sidebar_label: uudecode
description: یک رشته UU-encoded رو decode کن.
tags: ["string", "encryption"]
---

<LowercaseNote />

## توضیحات

یک رشته UU-encoded رو decode می‌کند.

| نام                       | توضیحات                                   |
| ------------------------- | --------------------------------------------- |
| dest[]                    | مقصد برای آرایه رشته decode شده. |
| const source[]            | رشته منبع UU-encoded.                 |
| maxlength = sizeof (dest) | حداکثر طول dest که میتونه استفاده بشه.  |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
uudecode(normalString, encodedString);
```

## توابع مرتبط

- [uuencode](uuencode): یک رشته رو به رشته UU-decoded encode کن.
- [memcpy](memcpy): بایت‌ها رو از یک مکان به مکان دیگه کپی کن.
