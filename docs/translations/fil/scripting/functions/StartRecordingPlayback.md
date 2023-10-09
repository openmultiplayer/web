---
title: StartRecordingPlayback
description: Ito ay mag ru-run ng .rec file na kailangang i-save sa npcmodes/recordings folder. Ang mga file na ito ay nagpapahintulot sa NPC na sundin ang ilang mga aksyon. Ang kanilang mga aksyon ay maaaring maitala nang manu-mano. Para sa karagdagang impormasyon, tingnan ang mga kaugnay na function.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

Ito ay mag ru-run ng .rec file na kailangang i-save sa npcmodes/recordings folder. Ang mga file na ito ay nagpapahintulot sa NPC na sundin ang ilang mga aksyon. Ang kanilang mga aksyon ay maaaring maitala nang manu-mano. Para sa karagdagang impormasyon, tingnan ang mga kaugnay na function.

| Name         | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| playbacktype | Ang [type](../resources/recordtypes) ng recording na i-loload. |
| recordname[] | Ang filename na i-loload, nang walang .rec extension.          |

## Examples

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "at400_lv_to_sf_x1");
}
```

## Related Functions

- [StopRecordingPlayerData](StopRecordingPlayerData): Humihinto sa pagre-record ng data ng player.