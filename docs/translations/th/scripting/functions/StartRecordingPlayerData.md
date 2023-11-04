---
title: StartRecordingPlayerData
description: Starts recording a player's movements to a file, which can then be reproduced by an NPC.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3a and will not work in earlier versions!

:::

## คำอธิบาย

Starts recording a player's movements to a file, which can then be reproduced by an NPC.

| Name         | Description                                                                                                                                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid     | The ID of the player to record.                                                                                                                                                                                               |
| recordtype   | The [type](../resources/recordtypes) of recording.                                                                                                                                                                            |
| recordname[] | The name of the file which will hold the recorded data. It will be saved in the scriptfiles directory, with an automatically added .rec extension, you will need to move the file to npcmodes/recordings to use for playback. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

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

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [StopRecordingPlayerData](StopRecordingPlayerData): Stops recording player data.
