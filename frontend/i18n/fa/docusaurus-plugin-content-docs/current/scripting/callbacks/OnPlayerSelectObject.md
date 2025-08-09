---
title: OnPlayerSelectObject
sidebar_label: OnPlayerSelectObject
description: این کالبک زمانی فراخوانده می‌شود که بازیکن آبجکتی را پس از استفاده از BeginObjectSelecting انتخاب کند.
tags: ["player", "object"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن آبجکتی را پس از استفاده از [BeginObjectSelecting](../functions/BeginObjectSelecting) انتخاب کند.

| نام                | توضیحات                                             |
| ------------------ | ------------------------------------------------------- |
| playerid           | شناسه بازیکنی که آبجکت را انتخاب کرده است            |
| SELECT_OBJECT:type | [نوع](../resources/selectobjecttypes) انتخاب           |
| objectid           | شناسه آبجکت انتخاب شده                               |
| modelid            | مدل آبجکت انتخاب شده                                 |
| Float:fX           | موقعیت X آبجکت انتخاب شده                           |
| Float:fY           | موقعیت Y آبجکت انتخاب شده                           |
| Float:fZ           | موقعیت Z آبجکت انتخاب شده                           |

## مقادیر برگشتی

1 - از دریافت این کالبک توسط سایر اسکریپت‌ها جلوگیری می‌کند.

0 - نشان می‌دهد که این کالبک به اسکریپت بعدی منتقل خواهد شد.

همیشه اول در filterscript ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerSelectObject(playerid, SELECT_OBJECT:type, objectid, modelid, Float:fX, Float:fY, Float:fZ)
{
    printf("Player %d selected object %d", playerid, objectid);

    if (type == SELECT_OBJECT_GLOBAL_OBJECT)
    {
        BeginObjectEditing(playerid, objectid);
    }
    else
    {
        BeginPlayerObjectEditing(playerid, objectid);
    }

    SendClientMessage(playerid, 0xFFFFFFFF, "You now are able to edit your object!");
    return 1;
}
```

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [BeginObjectSelecting](../functions/BeginObjectSelecting): انتخاب یک آبجکت.

## منابع مرتبط

- [Select Object Types](../resources/selectobjecttypes)