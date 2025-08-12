---
title: GetServerVarAsString
sidebar_label: GetServerVarAsString
description: مقدار string یه متغیر سرور رو دریافت می‌کنه.
tags: []
---

:::warning

این تابع از نسخه 0.3.7 R2 deprecated شده. لطفاً GetConsoleVarAsString رو ببین

:::

## توضیحات

مقدار string یه متغیر سرور رو دریافت می‌کنه.

| نام            | توضیحات                                                  |
| --------------- | ------------------------------------------------------------ |
| const varname[] | اسم متغیر string که می‌خوای مقدارش رو دریافت کنی.         |
| buffer[]        | آرایه‌ای برای ذخیره مقدار که به صورت reference پاس داده می‌شه. |
| len             | طول string که باید ذخیره بشه.              |

## مقادیر برگشتی

طول string برگردونده شده. 0 اگه متغیر سرور مشخص شده string نباشه یا وجود نداشته باشه.

## مثال‌ها

```c
public OnGameModeInit()
{
    new hostname[64];
    GetServerVarAsString("hostname", hostname, sizeof(hostname));
    printf("Hostname: %s", hostname);
}
```

## نکات

:::tip

وقتی filterscripts یا plugins به عنوان varname مشخص می‌شه، این تابع فقط اسم اولین filterscript یا plugin مشخص شده رو برمی‌گردونه. این یه bug هست.

:::

:::tip

'varlist' رو تو کنسول سرور تایپ کن تا لیست متغیرهای موجود سرور و نوع‌هاشون نمایش داده بشه.

:::

:::warning

استفاده از این تابع روی چیزی غیر از string (int، bool یا float) یا متغیر سرور غیرموجود، سرورت رو crash می‌کنه! این یه bug هست.

:::

## توابع مرتبط

- [GetServerVarAsInt](GetServerVarAsInt): دریافت یه متغیر سرور به صورت integer.
- [GetServerVarAsBool](GetServerVarAsBool): دریافت یه متغیر سرور به صورت boolean.