---
title: GetPlayerCameraFrontVector
sidebar_label: GetPlayerCameraFrontVector
description: این تابع جهت فعلی هدف‌گیری بازیکن در فضای ۳ بعدی را برمی‌گرداند، مختصات نسبت به موقعیت دوربین هستند، GetPlayerCameraPos را ببینید.
tags: ["player", "camera"]
---

## توضیحات

این تابع جهت فعلی هدف‌گیری بازیکن در فضای ۳ بعدی را برمی‌گرداند، مختصات نسبت به موقعیت دوربین هستند، [GetPlayerCameraPos](GetPlayerCameraPos) را ببینید.

| نام      | توضیحات                                                          |
| -------- | ---------------------------------------------------------------- |
| playerid | شناسه بازیکنی که می‌خواهید بردار جلویی دوربینش را دریافت کنید          |
| &Float:x | یک عدد اعشاری برای ذخیره مختصات X، به صورت مرجع پاس داده می‌شود.     |
| &Float:y | یک عدد اعشاری برای ذخیره مختصات Y، به صورت مرجع پاس داده می‌شود.     |
| &Float:z | یک عدد اعشاری برای ذخیره مختصات Z، به صورت مرجع پاس داده می‌شود.     |

## مقدار بازگشتی

موقعیت در متغیرهای مشخص شده ذخیره می‌شود.

## مثال‌ها

```c
// A simple command to manipulate this vector using the
// positions from GetPlayerCameraPos. This command will create
// a hydra missile in the direction of where the player is looking.
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/test camera vector"))
    {
        new
            Float:fPX, Float:fPY, Float:fPZ,
            Float:fVX, Float:fVY, Float:fVZ,
            Float:object_x, Float:object_y, Float:object_z;

        // Change me to change the scale you want. A larger scale increases the distance from the camera.
        // A negative scale will inverse the vectors and make them face in the opposite direction.
        const
            Float:fScale = 5.0;

        GetPlayerCameraPos(playerid, fPX, fPY, fPZ);
        GetPlayerCameraFrontVector(playerid, fVX, fVY, fVZ);

        object_x = fPX + floatmul(fVX, fScale);
        object_y = fPY + floatmul(fVY, fScale);
        object_z = fPZ + floatmul(fVZ, fScale);

        CreateObject(345, object_x, object_y, object_z, 0.0, 0.0, 0.0);

        return 1;
    }

    return 0;
}
```

## نکات

:::tip

داده‌های دوربین زمانی که بازیکن در هر وسیله‌ای یا پیاده باشد قابل دریافت هستند.

:::

## تابع‌های مرتبط

- [GetPlayerCameraPos](GetPlayerCameraPos): موقعیت دوربین بازیکن را پیدا کنید.