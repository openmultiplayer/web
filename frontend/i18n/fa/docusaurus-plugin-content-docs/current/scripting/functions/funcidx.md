---
title: funcidx
sidebar_label: funcidx
description: این تابع ID یک تابع public رو با اسمش برمیگردونه.
tags: ["core"]
---

<LowercaseNote />

## توضیحات

این تابع ID یک تابع public رو با اسمش برمیگردونه.

| نام         | توضیحات                                       |
| ------------ | ------------------------------------------------- |
| const name[] | اسم تابع public که میخوای ID شو بگیری. |

## برگشتی

ID تابع (IDها از **0** شروع میشن).

**-1** اگه تابع وجود نداشته باشه.

## مثال‌ها

```c
public OnFilterScriptInit()
{
    printf("ID of OnFilterScriptInit: %d", funcidx("OnFilterScriptInit"));
    return 1;
}
```

## توابع مرتبط

- [CallLocalFunction](CallLocalFunction): صدا زدن تابع توی اسکریپت.
- [CallRemoteFunction](CallRemoteFunction): صدا زدن تابع توی هر اسکریپت لود شده.