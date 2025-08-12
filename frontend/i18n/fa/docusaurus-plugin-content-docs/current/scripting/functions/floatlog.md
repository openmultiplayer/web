---
title: floatlog
sidebar_label: floatlog
description: این تابع بهت اجازه میده لگاریتم یک مقدار اعشاری رو بگیری.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## توضیحات

این تابع بهت اجازه میده لگاریتم یک مقدار اعشاری رو بگیری.

| نام         | توضیحات                              |
| ----------- | ------------------------------------ |
| Float:value | مقداری که لگاریتم‌ش رو میگیریم.     |
| Float:base  | پایه لگاریتم.                       |

## برگشتی

لگاریتم به صورت مقدار اعشاری.

## مثال‌ها

```c
public OnGameModeInit()
{
    printf("The logarithm of 15.0 with the base 10.0 is %.1f", floatlog(15.0, 10.0));
    return 1;
}
```

## توابع مرتبط

- [floatsqroot](floatsqroot): محاسبه ریشه دوم یک مقدار اعشاری.
- [floatpower](floatpower): رساندن مقدار داده شده به توان نما.