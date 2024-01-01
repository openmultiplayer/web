---
title: StopRecordingPlayerData
description: Stops all the recordings that had been started with StartRecordingPlayerData for a specific player.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3a and will not work in earlier versions!

:::

## คำอธิบาย

Stops all the recordings that had been started with StartRecordingPlayerData for a specific player.

| Name     | Description                                    |
| -------- | ---------------------------------------------- |
| playerid | The player you want to stop the recordings of. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/stoprecording", cmdtext))
    {
    StopRecordingPlayerData(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "Your recorded file has been saved to the scriptfiles folder!");
    return 1;
    }
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [StartRecordingPlayerData](StartRecordingPlayerData): Start recording player data.
