---
title: sendstring
sidebar_label: sendstring
description: یه packet که شامل string هست ارسال می‌کنه. (تابع منسوخ)
tags: ["datagram"]
---

<LowercaseNote />

:::warning

این تابع منسوخ شده، از [HTTP](HTTP) یا پلاگین [pawn-requests](https://github.com/Southclaws/pawn-requests) استفاده کن.

:::

## توضیحات

یه packet که شامل string هست ارسال می‌کنه.

| نام                     | توضیحات                                                                                                                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| const message[]          | buffer که شامل string برای ارسال هست. اگر این یه unpacked string باشه، قبل از انتقال UTF-8 encoded می‌شه.                                                             |
| const destination[] = "" | آدرس IP و شماره پورت که packet باید بهش ارسال بشه. اگر نباشه یا string خالی باشه، این تابع packet رو broadcast می‌کنه و از پورت پیش‌فرض 9930 استفاده می‌کنه *(optional="")* |

## مقدار برگشتی

**1** در موفقیت، **0** در شکست.

## توابع مرتبط

- [@receivestring](@receivestring): یه packet دریافت شد.
- [sendpacket](sendpacket): ارسال packet.