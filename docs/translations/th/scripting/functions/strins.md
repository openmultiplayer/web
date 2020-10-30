---
title: strins
description: Insert a string into another string.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Insert a string into another string.

| Name                    | Description                                |
| ----------------------- | ------------------------------------------ |
| string[]                | The string you want to insert substr in.   |
| const substr[]          | The string you want to insert into string. |
| pos                     | The position to start inserting.           |
| maxlength=sizeof string | The maximum size to insert.                |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
// Add an [AFK] tag to the start of players' names
new playerName[MAX_PLAYER_NAME+1];
GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
strins(playerName, "[AFK]", 0);
SetPlayerName(playerid, playerName);

// WARNING: Players with names that are 20+ characters long can not have an [AFK] tag, as that would make their name 25 characters long and the limit is 24.
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- strcmp: Compare two strings to check if they are the same.
- strfind: Search for a string in another string.
- strtok: Get the next 'token' (word/parameter) in a string.
- strdel: Delete part of a string.
- strlen: Get the length of a string.
- strmid: Extract part of a string into another string.
- strpack: Pack a string into a destination string.
- strval: Convert a string into an integer.
- strcat: Concatenate two strings into a destination reference.
