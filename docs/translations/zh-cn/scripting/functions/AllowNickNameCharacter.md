---
title: AllowNickNameCharacter
description: Allows a character to be used in the nick name.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Allows a character to be used in the nick name.

| Name       | Description                         |
| ---------- | ----------------------------------- |
| character  | The character to allow or disallow. |
| bool:allow | true-Allow, false-Disallow          |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    AllowNickNameCharacter('*', true); // Allow char *
    AllowNickNameCharacter('[', false); // Disallow char [
    AllowNickNameCharacter(']', false); // Disallow char ]

    return 1;
}
```

## Related Functions

- [IsNickNameCharacterAllowed](IsNickNameCharacterAllowed): Checks if a character is allowed in nickname.
- [IsValidNickName](IsValidNickName): Checks if a nick name is valid.
- [SetPlayerName](SetPlayerName): Sets the name of a player.
- [GetPlayerName](GetPlayerName): Gets the name of a player.
