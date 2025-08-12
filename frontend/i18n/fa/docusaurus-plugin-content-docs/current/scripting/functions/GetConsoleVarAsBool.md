---
title: GetConsoleVarAsBool
sidebar_label: GetConsoleVarAsBool
description: مقدار بولین یک متغیر کنسول را دریافت می‌کنه.
tags: []
---

## توضیحات

مقدار بولین یک متغیر کنسول را دریافت می‌کنه.

| نام          | توضیحات                                                     |
| ------------ | ---------------------------------------------------------- |
| const cvar[] | نام متغیر بولین که می‌خوای مقدارش رو دریافت کنی. |

## مقدار برگشتی

مقدار متغیر کنسول مشخص شده. اگر متغیر کنسول مشخص شده بولین نباشه یا وجود نداشته باشه، 0 برمی‌گردونه.

## مثال‌ها

```c
public OnGameModeInit()
{
    new queryEnabled = GetConsoleVarAsBool("enable_query");
    if (!queryEnabled)
    {
        print("WARNING: Querying is disabled. The server will appear offline in the server browser.");
    }
    return 1;
}
```

## نکته‌ها

:::tip

کلمه 'varlist' رو در کنسول سرور تایپ کن تا لیست متغیرهای کنسول موجود و نوع‌هاشون رو ببینی.

:::

## تابع‌های مرتبط

- [GetConsoleVarAsString](GetConsoleVarAsString): یک متغیر سرور رو به عنوان رشته دریافت می‌کنه.
- [GetConsoleVarAsInt](GetConsoleVarAsInt): یک متغیر سرور رو به عنوان عدد صحیح دریافت می‌کنه.