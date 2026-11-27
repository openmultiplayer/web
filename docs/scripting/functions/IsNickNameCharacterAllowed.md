---
title: "IsNickNameCharacterAllowed | open.mp"
description: "Checks if a character is allowed in nickname."
canonical: https://open.mp/docs/scripting/functions/IsNickNameCharacterAllowed
language: en
---

# IsNickNameCharacterAllowed

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if a character is allowed in nickname.

| Name | Description |
| --- | --- |
| character | The character to check. |

## Returns

This function returns **true** if the character is allowed, or **false** if it is not.

## Examples

```c
public OnGameModeInit()
{
    AllowNickNameCharacter('*', true); // Allow char *

    if (IsNickNameCharacterAllowed('*'))
    {
        print("Character * is allowed in nickname.");
    }
    return 1;
}
```

## Related Functions

-   [AllowNickNameCharacter](https://open.mp/docs/scripting/functions/AllowNickNameCharacter): Allows a character to be used in the nick name.
