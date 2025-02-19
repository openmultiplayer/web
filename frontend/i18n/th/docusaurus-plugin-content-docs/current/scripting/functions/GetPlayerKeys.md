---
title: GetPlayerKeys
sidebar_label: GetPlayerKeys
description: Check which keys a player is pressing.
tags: ["player"]
---

## คำอธิบาย

Check which keys a player is pressing.

| Name      | Description                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------- |
| playerid  | The ID of the player to get the keys of.                                                                                  |
| keys      | A set of bits containing the player's key states. This value is what is called a bit mask. Click here for a list of keys. |
| updown    | Up/down state.                                                                                                            |
| leftright | Left/right state.                                                                                                         |

## ส่งคืน

The keys are stored in the specified variables.

## ตัวอย่าง

```c
public OnPlayerUpdate(playerid)
{
    new
        KEY:keys, updown, leftright;

    GetPlayerKeys(playerid, keys, updown, leftright);

    if (updown == KEY_UP)
    {
        SendClientMessage(playerid, -1, "UP");
    }
    else if (updown == KEY_DOWN)
    {
        SendClientMessage(playerid, -1, "DOWN");
    }

    if (leftright == KEY_LEFT)
    {
        SendClientMessage(playerid, -1, "LEFT");
    }
    else if (leftright == KEY_RIGHT)
    {
        SendClientMessage(playerid, -1, "RIGHT");
    }

    return 1;
}
```

## บันทึก

:::warning

Only the FUNCTION of keys can be detected; not actual keys. For example, it is not possible to detect if a player presses SPACE, but you can detect if they press SPRINT (which can be mapped (assigned/binded) to ANY key (but is space by default)). As of update 0.3.7, the keys "A" and "D" are not recognized when in a vehicle. However, keys "W" and "S" can be detected with the "keys" parameter.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
