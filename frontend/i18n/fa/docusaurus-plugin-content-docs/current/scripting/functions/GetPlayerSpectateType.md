---
title: GetPlayerSpectateType
sidebar_label: GetPlayerSpectateType
description: نوع spectate بازیکن (وسیله نقلیه یا بازیکن) را برمی‌گرداند.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

نوع spectate بازیکن (وسیله نقلیه یا بازیکن) را برمی‌گرداند.

| نام     | توضیحات           |
|----------|-----------------------|
| playerid | ID بازیکن. |

## مقادیر برگشتی

[نوع spectate](../resources/spectatetypes) بازیکن را برمی‌گرداند.

## مثال‌ها

```c
new spectateType = GetPlayerSpectateType(playerid);

if (spectateType == 1)
{
    SendClientMessage(playerid, -1, "You are spectating a vehicle.");
}
else if (spectateType == 2)
{
    SendClientMessage(playerid, -1, "You are spectating a player.");
}
```

## توابع مرتبط

- [PlayerSpectatePlayer](PlayerSpectatePlayer): تماشای بازیکن.
- [PlayerSpectateVehicle](PlayerSpectateVehicle): تماشای وسیله نقلیه.
- [TogglePlayerSpectating](TogglePlayerSpectating): شروع یا توقف تماشا.
- [GetPlayerSpectateID](GetPlayerSpectateID): دریافت ID بازیکن یا وسیله نقلیه‌ای که بازیکن در حال تماشای آن است.

## منابع مرتبط

- [Spectate Types](../resources/spectatetypes).