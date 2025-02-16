---
title: strcopy
description: Copies a string into the destination string.
tags: ["string"]
---

<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## Description

Copies a string into the destination string.

| Name                      | Description                                         |
| ------------------------- | --------------------------------------------------- |
| dest[]                    | The string to copy the source string into.          |
| const source[]            | The source string.                                  |
| maxlength = sizeof (dest) | The maximum length of the destination. *(optional)* |

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

- [strcat](strcat): Concatenate two strings into a destination reference.
