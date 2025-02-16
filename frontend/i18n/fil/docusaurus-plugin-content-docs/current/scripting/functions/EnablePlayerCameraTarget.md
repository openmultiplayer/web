---
title: EnablePlayerCameraTarget
description: I-toggle ang mga function sa pag-target ng camera para sa isang player.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

I-toggle ang mga function sa pag-target ng camera para sa isang player. Naka-disable bilang default para makatipid ng bandwidth.

| Name     | Description                                                    |
| -------- | -------------------------------------------------------------- |
| playerid | Ang ID ng player upang i-toggle ang mga function ng pag-target sa camera.|
| enable   | 1 upang paganahin ang mga function ng pag-target sa camera at 0 upang i-disable ang mga ito.|

## Returns

1: Matagumpay na naisakatuparan ang function.

0: Nabigo ang function na isagawa. Hindi konektado ang player.

## Examples

```c
public OnPlayerConnect(playerid)
{
     EnablePlayerCameraTarget(playerid, 1);
     return 1;
}
```

## Related Functions

- [GetPlayerCameraTargetVehicle](GetPlayerCameraTargetVehicle): Kunin ang ID ng sasakyang tinitingnan ng player.
- [GetPlayerCameraTargetPlayer](GetPlayerCameraTargetPlayer): Kunin ang ID ng player na tinitingnan ng player.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Kunin ang camera front vector ng player