---
title: "strcopy | open.mp"
description: "Copies a string into the destination string."
canonical: https://open.mp/docs/scripting/functions/strcopy
language: en
---

# strcopy

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Copies a string into the destination string.

| Name | Description |
| --- | --- |
| dest\[\] | The string to copy the source string into. |
| const source\[\] | The source string. |
| maxlength = sizeof (dest) | The maximum length of the destination. _(optional)_ |

## Returns

The length of the new destination string.

## Examples

```c
new playerName[MAX_PLAYER_NAME];
GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

new string[64];
strcopy(string, playerName); // Copies playerName into string
```

## Related Functions

-   [strcat](https://open.mp/docs/scripting/functions/strcat): Concatenate two strings into a destination reference.
