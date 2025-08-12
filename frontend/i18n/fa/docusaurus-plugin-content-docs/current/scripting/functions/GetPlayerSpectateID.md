---
title: GetPlayerSpectateID
sidebar_label: GetPlayerSpectateID
description: دریافت ID بازیکن یا وسیله نقلیه‌ای که بازیکن در حال تماشای آن است.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت ID بازیکن یا وسیله نقلیه‌ای که بازیکن در حال تماشای آن است.

| نام     | توضیحات           |
|----------|-----------------------|
| playerid | ID بازیکن. |

## مقادیر برگشتی

ID بازیکن یا وسیله نقلیه را برمی‌گرداند.

## مثال‌ها

```c
new spectateType = GetPlayerSpectateType(playerid);

if (spectateType == 1)
{
    new spectateVehicleId = GetPlayerSpectateID(playerid);
}
else if (spectateType == 2)
{
    new spectatePlayerId = GetPlayerSpectateID(playerid);
}
```

## نکات

:::info

[انواع spectate](../resources/spectatetypes) را ببینید.

:::

## توابع مرتبط

- [PlayerSpectatePlayer](PlayerSpectatePlayer): تماشای بازیکن.
- [PlayerSpectateVehicle](PlayerSpectateVehicle): تماشای وسیله نقلیه.
- [TogglePlayerSpectating](TogglePlayerSpectating): شروع یا توقف تماشا.
- [GetPlayerSpectateType](GetPlayerSpectateType): دریافت نوع spectate بازیکن.

## منابع مرتبط

- [Spectate Types](../resources/spectatetypes).