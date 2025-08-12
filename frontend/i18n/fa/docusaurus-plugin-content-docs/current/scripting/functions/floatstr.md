---
title: floatstr
sidebar_label: floatstr
description: یک string رو به float تبدیل میکنه.
tags: ["string", "floating-point"]
---

<LowercaseNote />

## توضیحات

یک string رو به float تبدیل میکنه.

| نام           | توضیحات                         |
| -------------- | ----------------------------------- |
| const string[] | string که به float تبدیل میشه. |

## برگشتی

مقدار float درخواست شده.

## مثال‌ها

```c
new string[4] = "6.9"; // یک STRING که یک FLOAT داره.

new Float:value = floatstr(string);

SetPlayerPos(playerid, 0.0, 0.0, value);
```

## توابع مرتبط

- [floatround](floatround): تبدیل float به integer (گرد کردن).
- [float](float): تبدیل integer به float.