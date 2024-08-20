---
title: SetSVarFloat
description: Set a float server variable.
tags: ["server variable", "svar"]
---

<VersionWarn version='SA-MP 0.3.7 R2' />

## Description

Set a float server variable.

| Name         | Description                      |
| ------------ | -------------------------------- |
| const svar[] | The name of the server variable. |
| Float:value  | The float to be set.             |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The variable name is null or over 40 characters.

## Examples

```c
// set "Version"
SetSVarFloat("Version", 0.37);

// will print version that server has
printf("Version: %.2f", GetSVarFloat("Version"));
```

## Related Functions

- [SetSVarInt](SetSVarInt): Set an integer for a server variable.
- [GetSVarInt](GetSVarInt): Get a player server as an integer.
- [SetSVarString](SetSVarString): Set a string for a server variable.
- [GetSVarString](GetSVarString): Get the previously set string from a server variable.
- [GetSVarFloat](GetSVarFloat): Get the previously set float from a server variable.
- [DeleteSVar](DeleteSVar): Delete a server variable.
