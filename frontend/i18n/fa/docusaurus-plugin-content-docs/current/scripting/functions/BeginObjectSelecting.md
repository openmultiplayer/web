---
title: BeginObjectSelecting
sidebar_label: BeginObjectSelecting
description: مکان‌نما را نمایش می‌دهد و به بازیکن اجازه انتخاب یک شی‌ء را می‌دهد.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

مکان‌نما را نمایش می‌دهد و به بازیکن اجازه انتخاب یک شی‌ء را می‌دهد. زمانی که بازیکن شی‌ءای را انتخاب کند OnPlayerSelectObject فراخوانی می‌شود.

| نام      | توضیحات                                                       |
| -------- | ------------------------------------------------------------- |
| playerid | شناسه بازیکنی که باید قادر به انتخاب شی‌ء باشد               |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/select", true))
    {
        BeginObjectSelecting(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Please select the object you'd like to edit!");
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [CreateObject](CreateObject): یک شی‌ء ایجاد می‌کند.
- [DestroyObject](DestroyObject): یک شی‌ء را نابود می‌کند.
- [MoveObject](MoveObject): یک شی‌ء را حرکت می‌دهد.
- [BeginObjectEditing](BeginObjectEditing): یک شی‌ء را ویرایش می‌کند.
- [BeginPlayerObjectEditing](BeginPlayerObjectEditing): یک شی‌ء را ویرایش می‌کند.
- [EditAttachedObject](EditAttachedObject): یک شی‌ء متصل شده را ویرایش می‌کند.
- [EndObjectEditing](EndObjectEditing): ویرایش یک شی‌ء را لغو می‌کند.

## کالبک‌های مرتبط

- [OnPlayerSelectObject](../callbacks/OnPlayerSelectObject): زمانی که بازیکن شی‌ءای را انتخاب کرد فراخوانی می‌شود.
