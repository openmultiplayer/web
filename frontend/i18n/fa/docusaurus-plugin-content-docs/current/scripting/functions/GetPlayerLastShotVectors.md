---
title: GetPlayerLastShotVectors
sidebar_label: GetPlayerLastShotVectors
description: دریافت موقعیت شروع و پایان (برخورد) آخرین گلوله‌ای که بازیکن شلیک کرده است.
tags: ["player"]
---

## توضیحات

دریافت موقعیت شروع و پایان (برخورد) آخرین گلوله‌ای که بازیکن شلیک کرده است.

| نام           | توضیحات                                                                             |
| -------------- | --------------------------------------------------------------------------------------- |
| playerid       | ID بازیکن برای دریافت اطلاعات آخرین گلوله شلیک شده.                        |
| &Float:originX | متغیر float برای ذخیره مختصات X محل شروع گلوله. |
| &Float:originY | متغیر float برای ذخیره مختصات Y محل شروع گلوله. |
| &Float:originZ | متغیر float برای ذخیره مختصات Z محل شروع گلوله. |
| &Float:hitPosX | متغیر float برای ذخیره مختصات X محل برخورد گلوله.             |
| &Float:hitPosY | متغیر float برای ذخیره مختصات Y محل برخورد گلوله.             |
| &Float:hitPosZ | متغیر float برای ذخیره مختصات Z محل برخورد گلوله.             |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناموفق بود. بازیکن مشخص شده وجود ندارد.

موقعیت آخرین گلوله در متغیرهای مشخص شده ذخیره می‌شود.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/lastshot", true) == 0)
    {
        new string[128],
            Float:originX, Float:originY, Float:originZ,
            Float:hitPosX, Float:hitPosY, Float:hitPosZ;

        GetPlayerLastShotVectors(playerid, originX, originY, originZ, hitPosX, hitPosY, hitPosZ);
        
        format(string, sizeof(string), "Last Shot Information: Origin: %f, %f, %f. Hit position: %f, %f, %f", originX, originY, originZ, hitPosX, hitPosY, hitPosZ);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```

## نکات

:::warning

- این تابع فقط زمانی کار می‌کند که lag compensation فعال باشد.
- اگر بازیکن به چیزی برخورد نکرده باشد، موقعیت‌های برخورد 0 خواهند بود. این یعنی شما نمی‌توانید فاصله طی شده گلوله در هوای آزاد را محاسبه کنید.

:::

## توابع مرتبط

- [GetPlayerWeaponData](GetPlayerWeaponData): کسب اطلاعات از اسلحه‌های بازیکن.
- [GetPlayerWeapon](GetPlayerWeapon): بررسی اسلحه‌ای که بازیکن در حال حاضر در دست دارد.
- [VectorSize](VectorSize): دریافت طول (norm) یک بردار.

## کالبک‌های مرتبط

- [OnPlayerWeaponShot](../callbacks/OnPlayerWeaponShot): زمانی که بازیکن اسلحه شلیک می‌کند فراخوانی می‌شود.