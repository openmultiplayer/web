---
title: GangZoneHideForAll
description: Ang GangZoneHideForAll ay nagtatago ng gangzone mula sa lahat ng mga manlalaro.
tags: ["gangzone"]
---

## Description

Ang GangZoneHideForAll ay nagtatago ng gangzone mula sa lahat ng mga manlalaro.

| Name | Description       |
| ---- | ----------------- |
| zone | Ang zone na itatago. |

## Returns

Ang function na ito ay hindi nagbabalik ng anumang value.

## Examples

```c
new gGangZoneId;
gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
GangZoneHideForAll(gGangZoneId);
```

## Related Functions

- [GangZoneCreate](GangZoneCreate): Gumawa ng gangzone.
- [GangZoneDestroy](GangZoneDestroy): Wasakin ang isang gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Magpakita ng gangzone para sa isang manlalaro.
- [GangZoneShowForAll](GangZoneShowForAll): Magpakita ng gangzone para sa lahat ng manlalaro.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Magtago ng gangzone para sa isang player.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Gumawa ng gangzone flash para sa isang player.
- [GangZoneFlashForAll](GangZoneFlashForAll): Gumawa ng gangzone flash para sa lahat ng manlalaro.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Ihinto ang pag-flash ng gangzone para sa isang player.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Ihinto ang pag-flash ng gangzone para sa lahat ng manlalaro.