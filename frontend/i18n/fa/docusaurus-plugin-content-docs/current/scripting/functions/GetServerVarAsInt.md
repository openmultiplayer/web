---
title: GetServerVarAsInt
sidebar_label: GetServerVarAsInt
description: مقدار integer یه متغیر سرور رو دریافت می‌کنه.
tags: []
---

:::warning

این تابع از نسخه 0.3.7 R2 deprecated شده. لطفاً GetConsoleVarAsInt رو ببین

:::

## توضیحات

مقدار integer یه متغیر سرور رو دریافت می‌کنه.

| نام            | توضیحات                                           |
| --------------- | ----------------------------------------------------- |
| const varname[] | اسم متغیر integer که می‌خوای مقدارش رو دریافت کنی. |

## مقادیر برگشتی

مقدار متغیر سرور مشخص شده. 0 اگه متغیر سرور مشخص شده integer نباشه یا وجود نداشته باشه.

## مثال‌ها

```c
new serverPort = GetServerVarAsInt("port");
printf("Server Port: %i", serverPort);
```

## نکات

:::tip

'varlist' رو تو کنسول سرور تایپ کن تا لیست متغیرهای موجود سرور و نوع‌هاشون نمایش داده بشه.

:::

## توابع مرتبط

- [GetServerVarAsString](GetServerVarAsString): دریافت یه متغیر سرور به صورت string.
- [GetServerVarAsBool](GetServerVarAsBool): دریافت یه متغیر سرور به صورت boolean.