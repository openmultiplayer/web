---
title: GameModeExit
sidebar_label: GameModeExit
description: gamemode فعلی رو تموم میکنه.
tags: []
---

## توضیحات

gamemode فعلی رو تموم میکنه.

## مقادیر برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
if (OneTeamHasWon)
{
    GameModeExit();
}
```

## توابع مرتبط

- [SetModeRestartTime](SetModeRestartTime): تنظیم تاخیر بین لود کردن اسکریپت‌های اصلی، بر حسب ثانیه.

## کالبک‌های مرتبط

- [OnGameModeExit](../callbacks/OnGameModeExit): این کالبک زمانی فرا خوانده می‌شود که یک gamemode تمام شود.
