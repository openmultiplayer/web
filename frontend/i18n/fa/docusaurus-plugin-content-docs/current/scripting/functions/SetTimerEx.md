---
title: SetTimerEx
description: تنظیم یک تایمر برای فراخوانی تابع پس از یک بازه زمانی مشخص. با قابلیت ارسال مقادیر
tags: ["timer"]
---

## توضیحات

یک تایمر برای فراخوانی تابع پس از یک بازه زمانی مشخص تنظیم می‌کند. این نسخه ('Ex') امکان ارسال پارامترها (مانند شناسه بازیکن) به تابع را فراهم می‌کند.

| نام                  | توضیحات                                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| const functionName[] | نام یک تابع عمومی که پس از انقضای تایمر فراخوانی می‌شود.                                                                                     |
| interval             | بازه زمانی به میلی‌ثانیه (1 ثانیه = 1000 میلی‌ثانیه).                                                                                        |
| bool:repeating       | مقدار بولی (true/false یا 1/0) که مشخص می‌کند آیا تایمر باید به صورت مکرر فراخوانی شود (فقط با KillTimer متوقف می‌شود) یا تنها یک بار اجرا شود. |
| const specifiers[]   | فرمت خاصی که نشان‌دهنده نوع مقادیر ارسالی تایمر است.                                                                                        |
| OPEN_MP_TAGS:...     | تعداد نامحدودی از آرگومان‌ها برای ارسال (باید مطابق فرمت مشخص شده در پارامتر قبلی باشد).                                                      |

## مقادیر بازگشتی

شناسه تایمری که شروع شده است. شناسه تایمرها از 1 شروع شده و دوباره استفاده نمی‌شوند. هیچ بررسی داخلی برای صحت پارامترهای ارسال‌شده انجام نمی‌شود (مثلاً اگر مدت‌زمان مقدار منفی باشد). افزونه 'fixes2' از Y_Less این بررسی‌ها را انجام داده و دقت تایمرها را به طور قابل توجهی بهبود می‌بخشد و همچنین امکان ارسال آرایه/رشته را اضافه می‌کند.

## مثال‌ها

```c
SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);
// EndAntiSpawnKill - این تابع فراوخوانی خواهد شد
// 5000 - 5000 میلی‌ثانیه (5 ثانیه). این بازه زمانی است. تایمر پس از 5 ثانیه فراخوانی می‌شود.
// false - بدون تکرار. فقط یک بار فراخوانی خواهد شد.
// "i" - 'i' نشان‌دهنده عدد صحیح (عدد کامل) است. ما یک عدد صحیح (شناسه بازیکن) را به تابع ارسال می‌کنیم.
// playerid - مقداری که باید ارسال شود. این مقدار همان عدد صحیح مشخص شده در پارامتر قبلی است.
```

<br />

```c
// The event callback (OnPlayerSpawn) - Inja ma yek timer shoro mikonim.
public OnPlayerSpawn(playerid)
{
    // Anti-Spawnkill (5 saanie) - Jelogiri az koshte shodan dar spawn ta 5 saanie.

    // Health(Joon) player ro be meghdar bala set mikonam ta koshte nashavad.
    SetPlayerHealth(playerid, 999999.0);

    // Etela midim behesh.
    SendClientMessage(playerid, -1, "You are protected against spawn-killing for 5 seconds.");

    // Yek timer timer misazim ta Spawn kill ro ba'ad az 5 saanie gheyr fa'al kone.
    SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);
}

// Forward (make public) the function so the server can 'see' it
forward EndAntiSpawnKill(playerid);
// The timer function - in code vaghti ke zaman timer resid ejra mishe.
public EndAntiSpawnKill(playerid)
{
    // 5 saanie gozashte, pas joon player ro be halat normal bar migardonim.
    SetPlayerHealth(playerid, 100.0);

    // Bezar behesh etela ham bedim.
    SendClientMessage(playerid, -1, "You are no longer protected against spawn-killing.");
    return 1;
}
```

## نکته ها

:::warning


فواصل زمانی تایمرها دقیق نیستند (تقریباً ۲۵٪ خطا) در SA-MP. راه حل هایی موجود هستند در [اینجا](https://sampforum.blast.hk/showthread.php?tid=289675) و [اینجا](https://sampforum.blast.hk/showthread.php?tid=650736).

اما این مشکل در open.mp حل شده است.

:::

:::tip

متغیرهای شناسه تایمر باید زمانی که دیگر مورد استفاده نیستند به 0 تنظیم شوند تا احتمال از کار انداختن اشتباهی تایمرهای جدید به حداقل برسد. مقدار `-1` معمولاً به اشتباه به عنوان شناسه نامعتبر در نظر گرفته می‌شود - که نیست.

تابعی که باید فراخوانی شود، باید عمومی باشد، به این معنی که باید forwarded باشد.
:::

## تعریف شده ها

| تعریف    | مقدار |
|---------------|-------|
| INVALID_TIMER | 0     |

## تابع های مرتبط

- [SetTimer](SetTimer): تنظیم یک تایمر.
- [KillTimer](KillTimer): متوقف کردن یک تایمر.
- [IsValidTimer](IsValidTimer): بررسی می‌کند که آیا یک تایمر معتبر است.
- [IsRepeatingTimer](IsRepeatingTimer): بررسی می‌کند که آیا یک تایمر به صورت تکراری تنظیم شده است.
- [GetTimerInterval](GetTimerInterval): دریافت بازه زمانی یک تایمر.
- [GetTimerRemaining](GetTimerRemaining): دریافت بازه زمانی باقی‌مانده یک تایمر.
- [CountRunningTimers](CountRunningTimers): دریافت تعداد تایمرهای در حال اجرا.
- [CallLocalFunction](CallLocalFunction): فراخوانی یک تابع در اسکریپت.
- [CallRemoteFunction](CallRemoteFunction): فراخوانی یک تابع در هر اسکریپت بارگذاری شده.
