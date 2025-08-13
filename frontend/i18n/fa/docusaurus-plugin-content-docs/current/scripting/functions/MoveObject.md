---
title: MoveObject
sidebar_label: MoveObject
description: آبجکت را با سرعت تعیین شده به موقعیت جدید منتقل کن.
tags: ["object"]
---

## توضیحات

آبجکت را با سرعت تعیین شده به موقعیت جدید منتقل می‌کند. بازیکنان/وسایل نقلیه روی آبجکت "surf" خواهند کرد تا زمانی که حرکت می‌کند.

| نام             | توضیحات                                                     |
| --------------- | ----------------------------------------------------------- |
| objectid        | ID آبجکتی که باید منتقل شود.                               |
| Float:targetX   | مختصات X برای انتقال آبجکت.                                |
| Float:targetY   | مختصات Y برای انتقال آبجکت.                                |
| Float:targetZ   | مختصات Z برای انتقال آبجکت.                                |
| Float:speed     | سرعت انتقال آبجکت (واحد در ثانیه).                         |
| Float:rotationX | چرخش نهایی X (اختیاری).                                    |
| Float:rotationY | چرخش نهایی Y (اختیاری).                                    |
| Float:rotationZ | چرخش نهایی Z (اختیاری).                                    |

## مقدار بازگشتی

زمانی که برای انتقال آبجکت نیاز است به میلی‌ثانیه.

## مثال‌ها

```c
new gAirportGate; // Somewhere at the top of your script

public OnGameModeInit()
{
    gAirportGate = CreateObject(980, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/moveobject", true) == 0)
    {
        new
            string[64],
            moveTime = MoveObject(gAirportGate, 0.0, 0.0, 10.0, 2.00);

        format(string, sizeof(string), "Object will finish moving in %d milliseconds", moveTime);
        SendClientMessage(playerid, 0xFF0000FF, string);
        return 1;
    }
    return 0;
}
```

## نکات

:::warning

- این تابع می‌تواند برای چرخاندن نرم آبجکت‌ها استفاده شود. اما برای این کار، آبجکت باید **منتقل** هم بشود. چرخش مشخص شده، چرخشی است که آبجکت پس از انتقال خواهد داشت. بنابراین آبجکت هنگامی که انتقالی اعمال نشود، نخواهد چرخید. برای نمونه اسکریپت به ferriswheel.pwn filterscript ساخته شده توسط Kye که در بسته سرور (SA-MP 0.3d و بالاتر) گنجانده شده نگاه کنید.
- برای درک کامل نکته بالا، می‌توانی (اما محدود نیستی به) موقعیت z را (+0.001) افزایش دهی و سپس (-0.001) پس از انتقال مجدد آن، زیرا عدم تغییر X،Y یا Z آبجکت را نخواهد چرخاند.

:::

## توابع مرتبط

- [CreateObject](CreateObject): آبجکت بساز.
- [DestroyObject](DestroyObject): آبجکت را نابود کن.
- [IsValidObject](IsValidObject): بررسی کن که آیا آبجکت خاصی معتبر است.
- [IsObjectMoving](IsObjectMoving): بررسی کن که آیا آبجکت در حال حرکت است.
- [StopObject](StopObject): آبجکت را از حرکت متوقف کن.
- [SetObjectPos](SetObjectPos): موقعیت آبجکت را تنظیم کن.
- [SetObjectRot](SetObjectRot): چرخش آبجکت را تنظیم کن.
- [GetObjectPos](GetObjectPos): آبجکت را پیدا کن.
- [GetObjectRot](GetObjectRot): چرخش آبجکت را بررسی کن.
- [AttachObjectToPlayer](AttachObjectToPlayer): آبجکت را به بازیکن متصل کن.
- [CreatePlayerObject](CreatePlayerObject): آبجکت فقط برای یک بازیکن بساز.
- [DestroyPlayerObject](DestroyPlayerObject): آبجکت بازیکن را نابود کن.
- [IsValidPlayerObject](IsValidPlayerObject): بررسی کن که آیا آبجکت بازیکن خاصی معتبر است.
- [MovePlayerObject](MovePlayerObject): آبجکت بازیکن را منتقل کن.
- [StopPlayerObject](StopPlayerObject): آبجکت بازیکن را از حرکت متوقف کن.
- [IsPlayerObjectMoving](IsPlayerObjectMoving): بررسی کن که آیا آبجکت بازیکن در حال حرکت است.
- [SetPlayerObjectPos](SetPlayerObjectPos): موقعیت آبجکت بازیکن را تنظیم کن.
- [SetPlayerObjectRot](SetPlayerObjectRot): چرخش آبجکت بازیکن را تنظیم کن.
- [GetPlayerObjectPos](GetPlayerObjectPos): آبجکت بازیکن را پیدا کن.
- [GetPlayerObjectRot](GetPlayerObjectRot): چرخش آبجکت بازیکن را بررسی کن.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): آبجکت بازیکن را به بازیکن متصل کن.