---
title: GetServerVarAsBool
sidebar_label: GetServerVarAsBool
description: مقدار boolean یه متغیر سرور رو دریافت می‌کنه.
tags: []
---

:::warning

این تابع از نسخه 0.3.7 R2 deprecated شده. لطفاً GetConsoleVarAsBool رو ببین

:::

## توضیحات

مقدار boolean یه متغیر سرور رو دریافت می‌کنه.

| نام            | توضیحات                                           |
| --------------- | ----------------------------------------------------- |
| const varname[] | اسم متغیر boolean که می‌خوای مقدارش رو دریافت کنی. |

## مقادیر برگشتی

مقدار متغیر سرور مشخص شده. 0 اگه متغیر سرور مشخص شده boolean نباشه یا وجود نداشته باشه.

## مثال‌ها

```c
public OnGameModeInit()
{
    new queryEnabled = GetServerVarAsBool("query");
    if (!queryEnabled)
    {
        print("WARNING: Querying is disabled. The server will appear offline in the server browser.");
    }
    return 1;
}
```

## نکات

:::tip

'varlist' رو تو کنسول سرور تایپ کن تا لیست متغیرهای موجود سرور و نوع‌هاشون نمایش داده بشه.

:::

## توابع مرتبط

- [GetServerVarAsString](GetServerVarAsString): دریافت یه متغیر سرور به صورت string.
- [GetServerVarAsInt](GetServerVarAsInt): دریافت یه متغیر سرور به صورت integer.