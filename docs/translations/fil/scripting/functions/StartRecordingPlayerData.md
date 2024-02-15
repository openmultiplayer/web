---
title: StartRecordingPlayerData
description: Nagsisimulang i-record ang mga galaw ng isang player sa isang file, na pagkatapos ay maaaring kopyahin ng isang NPC.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Nagsisimulang i-record ang mga galaw ng isang player sa isang file, na pagkatapos ay maaaring kopyahin ng isang NPC.

| Name         | Description                                                                                                                                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid     | Ang id ng player na i-rerecord.                                                                                                                                                                                               |
| recordtype   | Ang [type](../resources/recordtypes) ng recording.                                                                                                                                                                         |
| recordname[] | Ang pangalan ng file na maghahawak ng naitala na data. Ise-save ito sa direktoryo ng scriptfiles, na may awtomatikong idinagdag na .rec extension, kakailanganin mong ilipat ang file sa npcmodes/recording upang magamit para sa pag-playback. |

## Returns

Ang function na ito ay hindi nagbabalik ng anumang value.

## Examples

```c
if (!strcmp("/recordme", cmdtext))
{
    if (GetPlayerState(playerid) == PLAYER_STATE_ONFOOT)
    {
        StartRecordingPlayerData(playerid, PLAYER_RECORDING_TYPE_ONFOOT, "MyFile");
    }
    else if (GetPlayerState(playerid) == PLAYER_STATE_DRIVER)
    {
        StartRecordingPlayerData(playerid, PLAYER_RECORDING_TYPE_DRIVER, "MyFile");
    }
    SendClientMessage(playerid, 0xFFFFFFFF, "All your movements are now being recorded!");
    return 1;
}
```

## Related Functions

- [StopRecordingPlayerData](StopRecordingPlayerData): Humihinto sa pagre-record ng data ng player.