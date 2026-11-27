---
title: "AllowNickNameCharacter | open.mp"
description: "Allows a character to be used in the nick name."
canonical: https://open.mp/docs/scripting/functions/AllowNickNameCharacter
language: en
---

# AllowNickNameCharacter

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Allows a character to be used in the nick name.

| Name | Description |
| --- | --- |
| character | The character to allow or disallow. |
| bool:allow | true-Allow, false-Disallow |

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

-   [IsNickNameCharacterAllowed](https://open.mp/docs/scripting/functions/IsNickNameCharacterAllowed): Checks if a character is allowed in nickname.
-   [IsValidNickName](https://open.mp/docs/scripting/functions/IsValidNickName): Checks if a nick name is valid.
-   [SetPlayerName](https://open.mp/docs/scripting/functions/SetPlayerName): Sets the name of a player.
-   [GetPlayerName](https://open.mp/docs/scripting/functions/GetPlayerName): Gets the name of a player.
