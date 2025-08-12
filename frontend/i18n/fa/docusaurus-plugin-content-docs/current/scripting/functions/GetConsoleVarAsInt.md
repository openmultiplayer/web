---
title: GetConsoleVarAsInt
sidebar_label: GetConsoleVarAsInt
description: مقدار عددی یک متغیر کنسول را دریافت می‌کنه.
tags: []
---

## توضیحات

مقدار عددی یک متغیر کنسول را دریافت می‌کنه.

| نام          | توضیحات                                                     |
| ------------ | ---------------------------------------------------------- |
| const cvar[] | نام متغیر عددی که می‌خوای مقدارش رو دریافت کنی. |

## مقدار برگشتی

مقدار متغیر کنسول مشخص شده. اگر متغیر کنسول مشخص شده عدد صحیح نباشه یا وجود نداشته باشه، 0 برمی‌گردونه.

## مثال‌ها

```c
new serverPort = GetConsoleVarAsInt("network.port");
printf("Server Port: %i", serverPort);
```

## نکته‌ها

:::tip

کلمه 'varlist' رو در کنسول سرور تایپ کن تا لیست متغیرهای کنسول موجود و نوع‌هاشون رو ببینی.

:::

## تابع‌های مرتبط

- [GetConsoleVarAsString](GetConsoleVarAsString): یک متغیر سرور رو به عنوان رشته دریافت می‌کنه.
- [GetConsoleVarAsBool](GetConsoleVarAsBool): یک متغیر سرور رو به عنوان بولین دریافت می‌کنه.