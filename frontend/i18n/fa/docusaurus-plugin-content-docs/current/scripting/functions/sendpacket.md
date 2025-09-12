---
title: sendpacket
sidebar_label: sendpacket
description: یه packet ارسال می‌کنه. (تابع منسوخ)
tags: ["datagram"]
---

<LowercaseNote />

:::warning

این تابع منسوخ شده، از [HTTP](HTTP) یا پلاگین [pawn-requests](https://github.com/Southclaws/pawn-requests) استفاده کن.

:::

## توضیحات

یه packet ارسال می‌کنه.

| نام                     | توضیحات                                                                                                                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| const packet[]           | buffer که شامل packet برای ارسال هست.                                                                                                                                                |
| size                     | سایز buffer.                                                                                                                                                                                |
| const destination[] = "" | آدرس IP و شماره پورت که packet باید بهش ارسال بشه. اگر نباشه یا string خالی باشه، این تابع packet رو broadcast می‌کنه و از پورت پیش‌فرض 9930 استفاده می‌کنه *(optional="")* |

## مقدار برگشتی

**1** در موفقیت، **0** در شکست.

## توابع مرتبط

- [@receivepacket](@receivepacket): یه packet دریافت شد.
- [sendstring](sendstring): ارسال packet که شامل string هست.