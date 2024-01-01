---
title: GangZoneHideForPlayer
description: Hides a gangzone for a player.
tags: ["player", "gangzone"]
---

## คำอธิบาย

Hides a gangzone for a player.

| Name     | Description                                    |
| -------- | ---------------------------------------------- |
| playerid | The ID of the player to hide the gangzone for. |
| zone     | The ID of the zone to hide.                    |

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

public OnPlayerSpawn(playerid)
{
    GangZoneShowForPlayer(playerid, gangzone, 0xFF0000FF);
    return 1;
}

public OnPlayerDeath(playerid, killerid, reason)
{
    GangZoneHideForPlayer(playerid,gangzone);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GangZoneCreate](GangZoneCreate): Create a gangzone.
- [GangZoneDestroy](GangZoneDestroy): Destroy a gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Show a gangzone for a player.
- [GangZoneShowForAll](GangZoneShowForAll): Show a gangzone for all players.
- [GangZoneHideForAll](GangZoneHideForAll): Hide a gangzone for all players.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Make a gangzone flash for a player.
- [GangZoneFlashForAll](GangZoneFlashForAll): Make a gangzone flash for all players.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
