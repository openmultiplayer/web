---
title: EndObjectEditing
sidebar_label: EndObjectEditing
description: حالت ویرایش آبجکت را برای بازیکن لغو می‌کند.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

حالت ویرایش آبجکت را برای بازیکن لغو می‌کند

| نام     | توضیحات                                  |
| -------- | ---------------------------------------- |
| playerid | شناسه بازیکن برای لغو ویرایش            |

## مقادیر بازگشتی

این تابع مقدار مشخصی برنمی‌گرداند.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopedit", true))
    {
        EndObjectEditing(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You stopped editing the object!");
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [BeginObjectSelecting](BeginObjectSelecting): انتخاب یک آبجکت.
- [BeginObjectEditing](BeginObjectEditing): ویرایش یک آبجکت.
- [BeginPlayerObjectEditing](BeginPlayerObjectEditing): ویرایش آبجکت بازیکن.
- [EditAttachedObject](EditAttachedObject): ویرایش آبجکت چسبانده شده.
- [CreateObject](CreateObject): ایجاد یک آبجکت.
- [DestroyObject](DestroyObject): نابودی یک آبجکت.
- [MoveObject](MoveObject): حرکت دادن یک آبجکت.