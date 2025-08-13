---
title: SHA256_PassHash
sidebar_label: SHA256_PassHash
description: یه پسورد رو با استفاده از الگوریتم هش SHA-256 هش می‌کنه.
tags: ["encryption"]
---

<VersionWarn version='SA-MP 0.3.7 R1' />

:::warning

این تابع در open.mp منسوخ شده، از پلاگین [samp-bcrypt](https://github.com/Sreyas-Sreelal/samp-bcrypt) برای هش کردن استفاده کن.

:::

## توضیحات

یه پسورد رو با استفاده از الگوریتم هش SHA-256 هش می‌کنه. شامل یه salt هست. خروجی همیشه 256 بیت طول داره، یا معادل 64 سل Pawn.

| نام                    | توضیحات                                        |
| ---------------------- | -------------------------------------------------- |
| const password[]       | پسوردی که باید هش بشه.                              |
| const salt[]           | salt ای که در هش استفاده می‌شه.                       |
| output[]               | هش برگشتی در hexadecimal digest با حروف بزرگ. |
| size = sizeof (output) | حداکثر طول هش برگشتی.                  |

## مقدار برگشتی

هش در آرایه مشخص شده ذخیره می‌شه.

## مثال‌ها

```c
public OnGameModeInit()
{
    new MyHash[64 + 1]; // + 1 baraye null terminator lazem
    SHA256_PassHash("test", "78sdjs86d2h", MyHash, sizeof MyHash);
    printf("Returned hash: %s", MyHash); // Returned hash: CD16A1C8BF5792B48142FF6B67C9CB5B1BDC7260D8D11AFBA6BCDE0933A3C0AF
    return 1;
}
```

## نکات

:::tip

هش برگشتی zero padding داره (یعنی ممکنه prefix 00ABCD123... داشته باشه).

:::

:::tip

salt به انتهای پسورد اضافه می‌شه، یعنی پسورد 'foo' و salt 'bar' باعث تشکیل 'foobar' می‌شن. salt باید تصادفی باشه، برای هر پلیر منحصر به فرد باشه و حداقل به اندازه پسورد هش شده طول داشته باشه. باید در کنار هش واقعی در اکانت پلیر ذخیره بشه.

:::

:::warning

این تابع binary-safe نیست. استفاده از مقادیر binary روی پسورد و salt ممکنه نتیجه غیرمنتظره‌ای بده.

:::