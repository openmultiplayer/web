---
title: GangZoneShowForPlayer
description: Show a gangzone for a player.
tags: ["player", "gangzone"]
---

## คำอธิบาย

Show a gangzone for a player. Must be created with GangZoneCreate first.

| Name     | Description                                                                                               |
| -------- | --------------------------------------------------------------------------------------------------------- |
| playerid | The ID of the player you would like to show the gangzone for..                                            |
| zone     | The ID of the gang zone to show for the player. Returned by GangZoneCreate                                |
| color    | The color to show the gang zone, as an integer or hex in RGBA color format. Alpha transparency supported. |

## ส่งคืน

1 if the gangzone was shown, otherwise 0 (non-existant).

## ตัวอย่าง

```c
new Zone;

public OnGameModeInit()
{
    Zone = GangZoneCreate(1082.962, -2787.229, 2942.549, -1859.51);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    GangZoneShowForPlayer(playerid, Zone, 0xFFFF0096);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GangZoneCreate](../functions/GangZoneCreate): Create a gangzone.
- [GangZoneDestroy](../functions/GangZoneDestroy): Destroy a gangzone.
- [GangZoneShowForPlayer](../functions/GangZoneShowForPlayer): Show a gangzone for a player.
- [GangZoneHideForPlayer](../functions/GangZoneHideForPlayer): Hide a gangzone for a player.
- [GangZoneHideForAll](../functions/GangZoneHideForAll): Hide a gangzone for all players.
- [GangZoneFlashForPlayer](../functions/GangZoneFlashForPlayer): Make a gangzone flash for a player.
- [GangZoneFlashForAll](../functions/GangZoneFlashForAll): Make a gangzone flash for all players.
- [GangZoneStopFlashForPlayer](../functions/GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
- [GangZoneStopFlashForAll](../functions/GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
