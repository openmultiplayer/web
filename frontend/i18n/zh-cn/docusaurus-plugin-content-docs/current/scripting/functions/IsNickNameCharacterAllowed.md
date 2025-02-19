---
title: IsNickNameCharacterAllowed
sidebar_label: IsNickNameCharacterAllowed
description: Checks if a character is allowed in nickname.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if a character is allowed in nickname.

| Name      | Description             |
| --------- | ----------------------- |
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

- [AllowNickNameCharacter](AllowNickNameCharacter): Allows a character to be used in the nick name.
