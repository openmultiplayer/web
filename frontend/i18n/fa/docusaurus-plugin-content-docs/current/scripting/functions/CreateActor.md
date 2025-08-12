---
title: CreateActor
sidebar_label: CreateActor
description: ایجاد یک 'بازیگر' ایستا در جهان.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

ایجاد یک 'بازیگر' ایستا در جهان. این 'بازیگرها' مانند NPC هستند، اما عملکرد محدودی دارند. آنها اسلات بازیکن سرور را اشغال نمی‌کنند.

| نام         | توضیحات                                                      |
| ----------- | ------------------------------------------------------------ |
| skin        | [شناسه مدل](../resources/skins) که بازیگر باید داشته باشد.    |
| Float:x     | مختصات X برای ایجاد بازیگر.                                   |
| Float:y     | مختصات Y برای ایجاد بازیگر.                                   |
| Float:z     | مختصات Z برای ایجاد بازیگر.                                   |
| Float:angle | زاویه رو به جلو (چرخش) که بازیگر باید داشته باشد.              |

## مقادیر بازگشتی

شناسه بازیگر ایجادشده (شروع از 0).

INVALID_ACTOR_ID (65535) اگر به حد مجاز بازیگر (1000) رسیده باشد.

## مثال‌ها

```c
new gActorCJ;

public OnGameModeInit()
{
    // ایجاد بازیگر (CJ) در Blueberry Acres (مرکز نقشه SA)
    gActorCJ = CreateActor(0, 0.0, 0.0, 3.0, 0.0);
}

public OnGameModeExit()
{
    // نابود کردن بازیگر دوست‌داشتنی ما (CJ)
    DestroyActor(gActorCJ);
}
```

## نکات

:::tip

بازیگرها برای ایستادن در جایی طراحی شده‌اند، مثلاً صندوقداران و بارمن‌ها. آنها می‌توانند انیمیشن اجرا کنند (یک بار یا حلقه‌ای) با استفاده از [ApplyActorAnimation](ApplyActorAnimation).

:::

:::warning

- بازیگرها کاملاً از NPC ها جدا هستند. آنها از شناسه/اسلات بازیکن در سرور استفاده نمی‌کنند و نمی‌توان آنها را مانند NPC ها مدیریت کرد. بازیگرها محدود به 1000 (MAX_ACTORS) هستند.
- بازیگرها می‌توانند توسط وسایل نقلیه هل داده شوند، از تایمر استفاده کنید تا آنها را به موقعیت خود برگردانید.
- بازیگرها به طور پیش‌فرض آسیب‌ناپذیر هستند.

:::

## توابع مرتبط

- [DestroyActor](DestroyActor): نابود کردن یک بازیگر.
- [SetActorPos](SetActorPos): تنظیم موقعیت یک بازیگر.
- [GetActorPos](GetActorPos): دریافت موقعیت یک بازیگر.
- [GetActorSpawnInfo](GetActorSpawnInfo): دریافت نقطه اسپاون اولیه بازیگر.
- [SetActorFacingAngle](SetActorFacingAngle): تنظیم زاویه رو به جلو بازیگر.
- [GetActorFacingAngle](GetActorFacingAngle): دریافت زاویه رو به جلو بازیگر.
- [SetActorVirtualWorld](SetActorVirtualWorld): تنظیم جهان مجازی بازیگر.
- [GetActorVirtualWorld](GetActorVirtualWorld): دریافت جهان مجازی بازیگر.
- [ApplyActorAnimation](ApplyActorAnimation): اعمال انیمیشن به بازیگر.
- [ClearActorAnimations](ClearActorAnimations): پاک کردن انیمیشن‌های اعمال شده به بازیگر.
- [GetActorAnimation](GetActorAnimation): دریافت انیمیشنی که بازیگر در حال انجام است.
- [GetPlayerCameraTargetActor](GetPlayerCameraTargetActor): دریافت شناسه بازیگری که بازیکن به آن نگاه می‌کند.
- [IsActorStreamedIn](IsActorStreamedIn): بررسی اینکه آیا بازیگر برای بازیکن استریم شده است.
- [SetActorSkin](SetActorSkin): تنظیم اسکین بازیگر.
- [GetActorSkin](GetActorSkin): دریافت اسکین بازیگر.
- [SetActorHealth](SetActorHealth): تنظیم سلامتی بازیگر.
- [GetActorHealth](GetActorHealth): دریافت سلامتی بازیگر.
- [SetActorInvulnerable](SetActorInvulnerable): تنظیم آسیب‌ناپذیری بازیگر.
- [IsActorInvulnerable](IsActorInvulnerable): بررسی آسیب‌ناپذیری بازیگر.
- [IsValidActor](IsValidActor): بررسی اعتبار شناسه بازیگر.
- [GetActorPoolSize](GetActorPoolSize): دریافت بالاترین شناسه بازیگر ایجادشده در سرور.
- [GetPlayerTargetActor](GetPlayerTargetActor): دریافت شناسه بازیگری که بازیکن مشخصی به آن هدف گرفته.

## کالبک‌های مرتبط

- [OnActorStreamIn](../callbacks/OnActorStreamIn): زمانی فراخوانی می‌شود که بازیگر توسط بازیکن استریم شود.
- [OnActorStreamOut](../callbacks/OnActorStreamOut): زمانی فراخوانی می‌شود که بازیگر توسط بازیکن از استریم خارج شود.
- [OnPlayerGiveDamageActor](../callbacks/OnPlayerGiveDamageActor): این کالبک زمانی فراخوانی می‌شود که بازیکن به بازیگر آسیب برساند.
