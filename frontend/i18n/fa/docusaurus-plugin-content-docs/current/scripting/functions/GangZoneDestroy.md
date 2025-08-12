---
title: GangZoneDestroy
sidebar_label: GangZoneDestroy
description: نابود کردن گنگ زون.
tags: ["gangzone"]
---

## توضیحات

نابود کردن گنگ زون.

| نام    | توضیحات                          |
| ------ | ------------------------------------ |
| zoneid | شناسه ناحیه برای نابود کردن. |

## مقادیر بازگشتی

1: تابع با موفقیت اجرا شد.

0: تابع با شکست مواجه شد. گنگ زون با شناسه مشخص‌شده وجود ندارد.

## Examples

```c
new gangZone;

public OnGameModeInit()
{
    gangZone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}

public OnGameModeExit()
{
    GangZoneDestroy(gangZone);
    return 1;
}
```

## Related Functions

- [GangZoneCreate](GangZoneCreate): Create a gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Show a gangzone for a player.
- [GangZoneShowForAll](GangZoneShowForAll): Show a gangzone for all players.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Hide a gangzone for a player.
- [GangZoneHideForAll](GangZoneHideForAll): Hide a gangzone for all players.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Make a gangzone flash for a player.
- [GangZoneFlashForAll](GangZoneFlashForAll): Make a gangzone flash for all players.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
