---
title: strins
description: Insert a string into another string.
tags: []
---

<LowercaseNote />

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
new playerName[MAX_PLAYER_NAME];
GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
if (strlen(playerName) <= 18)
{
	strins(playerName, "[AFK]", 0);
}
SetPlayerName(playerid, playerName);

// WARNING: Players with names that are 20+ characters long can not have an [AFK] tag, as that would make their name 25 characters long and the limit is 24.
```

## Related Functions

- [strcmp](strcmp.md): Compare two strings to check if they are the same.
- [strfind](strfind.md): Search for a string in another string.
- [strdel](strdel.md): Delete part of a string.
- [strlen](strlen.md): Get the length of a string.
- [strmid](strmid.md): Extract part of a string into another string.
- [strpack](strpack.md): Pack a string into a destination string.
- [strval](strval.md): Convert a string into an integer.
- [strcat](strcat.md): Concatenate two strings into a destination reference.
