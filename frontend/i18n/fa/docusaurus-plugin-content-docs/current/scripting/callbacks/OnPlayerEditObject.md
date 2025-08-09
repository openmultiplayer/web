---
title: OnPlayerEditObject
sidebar_label: OnPlayerEditObject
description: این کالبک زمانی فراخوانده می‌شود که یک بازیکن ویرایش یک آبجکت را تمام کند (BeginObjectEditing/BeginPlayerObjectEditing).
tags: ["player", "object"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک بازیکن ویرایش یک آبجکت را تمام کند ([BeginObjectEditing](../functions/BeginObjectEditing)/[BeginPlayerObjectEditing](../functions/BeginPlayerObjectEditing)).

| نام                    | توضیحات                                                         |
| ---------------------- | --------------------------------------------------------------- |
| playerid               | شناسه بازیکنی که آبجکت را ویرایش کرده است                        |
| playerobject           | 0 اگر یک global object باشد یا 1 اگر یک playerobject باشد.    |
| objectid               | شناسه آبجکت ویرایش شده                                           |
| EDIT_RESPONSE:response | [نوع پاسخ](../resources/objecteditionresponsetypes)             |
| Float:fX               | آفست X برای آبجکتی که ویرایش شده است                           |
| Float:fY               | آفست Y برای آبجکتی که ویرایش شده است                           |
| Float:fZ               | آفست Z برای آبجکتی که ویرایش شده است                           |
| Float:fRotX            | چرخش X برای آبجکتی که ویرایش شده است                          |
| Float:fRotY            | چرخش Y برای آبجکتی که ویرایش شده است                          |
| Float:fRotZ            | چرخش Z برای آبجکتی که ویرایش شده است                          |

## مقادیر برگشتی

1 - از دریافت این کالبک توسط سایر اسکریپت‌ها جلوگیری می‌کند.

0 - نشان می‌دهد که این کالبک به اسکریپت بعدی منتقل خواهد شد.

همیشه اول در filterscript ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerEditObject(playerid, playerobject, objectid, EDIT_RESPONSE:response, Float:fX, Float:fY, Float:fZ, Float:fRotX, Float:fRotY, Float:fRotZ)
{
    new
        Float: oldX,
        Float: oldY,
        Float: oldZ,
        Float: oldRotX,
        Float: oldRotY,
        Float: oldRotZ;

    GetObjectPos(objectid, oldX, oldY, oldZ);
    GetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);

    if (!playerobject) // If this is a global object, sync the position for other players
    {
        if (!IsValidObject(objectid))
        {
            return 1;
        }
        SetObjectPos(objectid, fX, fY, fZ);
        SetObjectRot(objectid, fRotX, fRotY, fRotZ);
    }

    switch (response)
    {
        case EDIT_RESPONSE_FINAL:
        {
            // The player clicked on the save icon
            // Do anything here to save the updated object position (and rotation)
        }

        case EDIT_RESPONSE_CANCEL:
        {
            //The player cancelled, so put the object back to it's old position
            if (!playerobject) //Object is not a playerobject
            {
                SetObjectPos(objectid, oldX, oldY, oldZ);
                SetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);
            }
            else
            {
                SetPlayerObjectPos(playerid, objectid, oldX, oldY, oldZ);
                SetPlayerObjectRot(playerid, objectid, oldRotX, oldRotY, oldRotZ);
            }
        }
    }
    return 1;
}
```

## نکته‌ها

:::warning

هنگام استفاده از 'EDIT_RESPONSE_UPDATE' توجه داشته باشید که این کالبک هنگام رها کردن ویرایش در حال انجام فراخوانده نخواهد شد که منجر به عدم هماهنگی آخرین به‌روزرسانی 'EDIT_RESPONSE_UPDATE' با موقعیت فعلی آبجکت می‌شود.

:::

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [BeginPlayerObjectEditing](../functions/BeginPlayerObjectEditing): ویرایش یک player-object.
- [BeginObjectEditing](../functions/BeginObjectEditing): ویرایش یک آبجکت.
- [CreateObject](../functions/CreateObject): ایجاد یک آبجکت.
- [DestroyObject](../functions/DestroyObject): حذف یک آبجکت.
- [MoveObject](../functions/MoveObject): حرکت دادن یک آبجکت.

## منابع مرتبط

- [Object Edition Response Types](../resources/objecteditionresponsetypes)