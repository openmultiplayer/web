---
title: GangZoneHideForAll
sidebar_label: GangZoneHideForAll
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

- [GangZoneCreate](GangZoneCreate): Create a gangzone.
- [GangZoneDestroy](GangZoneDestroy): Destroy a gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Show a gangzone for a player.
- [GangZoneShowForAll](GangZoneShowForAll): Show a gangzone for all players.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Hide a gangzone for a player.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Make a gangzone flash for a player.
- [GangZoneFlashForAll](GangZoneFlashForAll): Make a gangzone flash for all players.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
