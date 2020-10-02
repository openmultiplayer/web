---
id: strins
title: strins
description: Insert a string into another string.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

Insert a string into another string.

| Name                    | Description                                |
| ----------------------- | ------------------------------------------ |
| string[]                | The string you want to insert substr in.   |
| const substr[]          | The string you want to insert into string. |
| pos                     | The position to start inserting.           |
| maxlength=sizeof string | The maximum size to insert.                |

## Returns

This function does not return any specific values.

## Examples

```c
// Add an [AFK] tag to the start of players' names
new pName[MAX_PLAYER_NAME+1];
GetPlayerName(playerid, pName, MAX_PLAYER_NAME);
strins(pName, "[AFK]", 0);
SetPlayerName(playerid, pName);

// WARNING: Players with names that are 20+ characters long can not have an [AFK] tag, as that would make their name 25 characters long and the limit is 24.
```

## Related Functions

- [strcmp](../functions/strcmp): Compare two strings to check if they are the same.
- [strfind](../functions/strfind): Search for a string in another string.
- [strtok](../functions/strtok): Get the next 'token' (word/parameter) in a string.
- [strlen](../function/strlen): Get the length of a string.
- [strmid](../functions/strmid): Extract part of a string into another string.
- [strpack](../functions/strpack): Pack a string into a destination string.
- [strval](../functions/strval): Convert a string into an integer.
- [strcat](../functions/strcat): Concatenate two strings into a destination reference.
- [strdel](../functions/strdel): Delete part of a string.