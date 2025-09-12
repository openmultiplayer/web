---
title: CancelEdit
sidebar_label: CancelEdit
description: حالت ویرایش شی‌ء را برای بازیکن لغو می‌کند.
tags: []
---

## توضیحات

حالت ویرایش شی‌ء را برای بازیکن لغو می‌کند

| نام      | توضیحات                                  |
| -------- | ------------------------------------------ |
| playerid | شناسه بازیکن برای لغو ویرایش               |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopedit", true))
    {
        CancelEdit(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You stopped editing the object!");
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [SelectObject](SelectObject): یک شی‌ء را انتخاب می‌کند.
- [EditObject](EditObject): یک شی‌ء را ویرایش می‌کند.
- [EditPlayerObject](EditPlayerObject): یک شی‌ء را ویرایش می‌کند.
- [EditAttachedObject](EditAttachedObject): یک شی‌ء متصل شده را ویرایش می‌کند.
- [CreateObject](CreateObject): یک شی‌ء ایجاد می‌کند.
- [DestroyObject](DestroyObject): یک شی‌ء را نابود می‌کند.
- [MoveObject](MoveObject): یک شی‌ء را حرکت می‌دهد.
