---
title: "strins | open.mp"
description: "Insert a string into another string."
canonical: https://open.mp/docs/scripting/functions/strins
language: en
---

# strins

## Description

Insert a string into another string.

| Name | Description |
| --- | --- |
| string\[\] | The string you want to insert substr in. |
| const substr\[\] | The string you want to insert into string. |
| pos | The position to start inserting. |
| maxlength = sizeof (string) | The maximum size to insert. |

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

-   [strcmp](https://open.mp/docs/scripting/functions/strcmp): Compare two strings to check if they are the same.
-   [strfind](https://open.mp/docs/scripting/functions/strfind): Search for a string in another string.
-   [strdel](https://open.mp/docs/scripting/functions/strdel): Delete part of a string.
-   [strlen](https://open.mp/docs/scripting/functions/strlen): Get the length of a string.
-   [strmid](https://open.mp/docs/scripting/functions/strmid): Extract part of a string into another string.
-   [strpack](https://open.mp/docs/scripting/functions/strpack): Pack a string into a destination string.
-   [strval](https://open.mp/docs/scripting/functions/strval): Convert a string into an integer.
-   [strcat](https://open.mp/docs/scripting/functions/strcat): Concatenate two strings into a destination reference.
