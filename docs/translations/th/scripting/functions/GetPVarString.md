---
title: GetPVarString
description: Gets a player variable as a string.
tags: ["pvar"]
---

## คำอธิบาย

Gets a player variable as a string.

| Name           | Description                                                           |
| -------------- | --------------------------------------------------------------------- |
| playerid       | The ID of the player whose player variable to get.                    |
| varname        | The name of the player variable, set by SetPVarString.                |
| &string_return | The array in which to store the string value in, passed by reference. |
| len            | The maximum length of the returned string.                            |

## ส่งคืน

The length of the string.

## ตัวอย่าง

```c
public OnPlayerConnect(playerid,reason)
{
    new playerName[MAX_PLAYER_NAME+1];
    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    SetPVarString(playerid, "PlayerName", playerName);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    new playerName[MAX_PLAYER_NAME+1];
    GetPVarString(playerid, "PlayerName", playerName, sizeof(playerName));

    printf("%s died.", playerName);
}
```

## บันทึก

:::tip

If length of string is zero (value not set), string_return text will not be updated or set to anything and will remain with old data, neccesying that you clear the variable to blank value if GetPVarString returns 0 if that behavior is undesired

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPVarString: Set a string for a player variable.
- SetPVarInt: Set an integer for a player variable.
- GetPVarInt: Get the previously set integer from a player variable.
- SetPVarFloat: Set a float for a player variable.
- GetPVarFloat: Get the previously set float from a player variable.
- DeletePVar: Delete a player variable.
