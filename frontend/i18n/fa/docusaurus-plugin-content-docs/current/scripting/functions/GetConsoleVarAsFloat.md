---
title: GetConsoleVarAsFloat
sidebar_label: GetConsoleVarAsFloat
description: مقدار اعشاری یک متغیر کنسول را دریافت می‌کنه.
tags: []
---

## توضیحات

مقدار اعشاری یک متغیر کنسول را دریافت می‌کنه.

| نام          | توضیحات                                                     |
| ------------ | ---------------------------------------------------------- |
| const cvar[] | نام متغیر اعشاری که می‌خوای مقدارش رو دریافت کنی. |

## مقدار برگشتی

مقدار متغیر کنسول مشخص شده.

اگر متغیر کنسول مشخص شده عدد صحیح نباشه یا وجود نداشته باشه، 0.0 برمی‌گردونه.

## مثال‌ها

```c
new Float:radius = GetConsoleVarAsInt("game.nametag_draw_radius");
printf("Nametag Draw Radius: %i", radius);
```

## نکته‌ها

:::tip

کلمه 'varlist' رو در کنسول سرور تایپ کن تا لیست متغیرهای کنسول موجود و نوع‌هاشون رو ببینی.

:::

## تابع‌های مرتبط

- [GetConsoleVarAsInt](GetConsoleVarAsInt): یک متغیر سرور رو به عنوان عدد صحیح دریافت می‌کنه.
- [GetConsoleVarAsString](GetConsoleVarAsString): یک متغیر سرور رو به عنوان رشته دریافت می‌کنه.
- [GetConsoleVarAsBool](GetConsoleVarAsBool): یک متغیر سرور رو به عنوان بولین دریافت می‌کنه.