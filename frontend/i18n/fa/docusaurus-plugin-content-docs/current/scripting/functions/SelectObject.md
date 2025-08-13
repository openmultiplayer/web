---
title: SelectObject
sidebar_label: SelectObject
description: کرسر رو نمایش می‌ده و به بازیکن اجازه می‌ده که یه object انتخاب کنه.
tags: []
---

## توضیحات

کرسر رو نمایش می‌ده و به بازیکن اجازه می‌ده که یه object انتخاب کنه. وقتی بازیکن object انتخاب کنه OnPlayerSelectObject صدا زده می‌شه.

| نام     | توضیحات                                                   |
| -------- | ------------------------------------------------------------- |
| playerid | ID بازیکن که باید بتونه object انتخاب کنه |

## مقدار برگشتی

این تابع مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/select", true))
    {
        SelectObject(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Please select the object you'd like to edit!");
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [CreateObject](CreateObject): ساخت object.
- [DestroyObject](DestroyObject): نابودی object.
- [MoveObject](MoveObject): حرکت دادن object.
- [EditObject](EditObject): ویرایش object.
- [EditPlayerObject](EditPlayerObject): ویرایش object.
- [EditAttachedObject](EditAttachedObject): ویرایش attached object.
- [CancelEdit](CancelEdit): لغو ویرایش object.
- [OnPlayerSelectObject](../callbacks/OnPlayerSelectObject): وقتی بازیکن object انتخاب می‌کنه صدا زده می‌شه.