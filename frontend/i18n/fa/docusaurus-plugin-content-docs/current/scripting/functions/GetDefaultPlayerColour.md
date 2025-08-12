---
title: GetDefaultPlayerColour
sidebar_label: GetDefaultPlayerColour
description: رنگ پیش‌فرض آیدی بازیکن را دریافت می‌کنه.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

رنگ پیش‌فرض آیدی بازیکن را دریافت می‌کنه.

| نام      | توضیحات                                                     |
| -------- | ---------------------------------------------------------- |
| playerid | آیدی بازیکنی که می‌خوای رنگش رو دریافت کنی. نیازی نیست که متصل باشه. |

## مقدار برگشتی

رنگ پیش‌فرض بازیکن.

## مثال‌ها

```c
new colour = GetDefaultPlayerColour(playerid);
```

## تابع‌های مرتبط

- [GetPlayerColor](GetPlayerColor): رنگ یک بازیکن رو دریافت می‌کنه.