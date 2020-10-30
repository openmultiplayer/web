---
title: GangZoneHideForAll
description: GangZoneHideForAll hides a gangzone from all players.
tags: ["gangzone"]
---

## คำอธิบาย

GangZoneHideForAll hides a gangzone from all players.

| Name | Description       |
| ---- | ----------------- |
| zone | The zone to hide. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new gangzone;
gangzone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
GangZoneHideForAll(gangzone);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GangZoneCreate](../functions/GangZoneCreate): Create a gangzone.
- [GangZoneDestroy](../functions/GangZoneDestroy): Destroy a gangzone.
- [GangZoneShowForPlayer](../functions/GangZoneShowForPlayer): Show a gangzone for a player.
- [GangZoneShowForAll](../functions/GangZoneShowForAll): Show a gangzone for all players.
- [GangZoneHideForPlayer](../functions/GangZoneHideForPlayer): Hide a gangzone for a player.
- [GangZoneFlashForPlayer](../functions/GangZoneFlashForPlayer): Make a gangzone flash for a player.
- [GangZoneFlashForAll](../functions/GangZoneFlashForAll): Make a gangzone flash for all players.
- [GangZoneStopFlashForPlayer](../functions/GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
- [GangZoneStopFlashForAll](../functions/GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
