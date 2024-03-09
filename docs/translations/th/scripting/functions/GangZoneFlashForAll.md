---
title: GangZoneFlashForAll
description: GangZoneFlashForAll flashes a gangzone for all players.
tags: ["gangzone"]
---

## คำอธิบาย

GangZoneFlashForAll flashes a gangzone for all players.

| Name       | Description                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| zone       | The zone to flash.                                                                                         |
| flashcolor | The color to flash the gang zone, as an integer or hex in RGBA color format. Alpha transparency supported. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new gangzone;

public OnGameModeInit()
{
    gangzone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    GangZoneFlashForAll(gangzone,COLOR_RED);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GangZoneCreate](../functions/GangZoneCreate): Create a gangzone.
- [GangZoneDestroy](../functions/GangZoneDestroy): Destroy a gangzone.
- [GangZoneShowForPlayer](../functions/GangZoneShowForPlayer): Show a gangzone for a player.
- [GangZoneShowForAll](../functions/GangZoneShowForAll): Show a gangzone for all players.
- [GangZoneHideForPlayer](../functions/GangZoneHideForPlayer): Hide a gangzone for a player.
- [GangZoneHideForAll](../functions/GangZoneHideForAll): Hide a gangzone for all players.
- [GangZoneFlashForPlayer](../functions/GangZoneFlashForPlayer): Make a gangzone flash for a player.
- [GangZoneStopFlashForPlayer](../functions/GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
- [GangZoneStopFlashForAll](../functions/GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
