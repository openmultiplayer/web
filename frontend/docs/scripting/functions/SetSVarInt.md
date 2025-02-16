---
title: SetSVarInt
description: Set an integer server variable.
tags: ["server variable", "svar"]
---

<VersionWarn version='SA-MP 0.3.7 R2' />

## Description

Set an integer server variable.

| Name         | Description                      |
| ------------ | -------------------------------- |
| const svar[] | The name of the server variable. |
| value        | The integer to be set.           |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The variable name is null or over 40 characters.

## Examples

```c
// set "Version"
SetSVarInt("Version", 37);

// will print version that server has
printf("Version: %d", GetSVarInt("Version"));
```

## Related Functions

- [GetSVarInt](GetSVarInt): Get a player server as an integer.
- [SetSVarString](SetSVarString): Set a string for a server variable.
- [GetSVarString](GetSVarString): Get the previously set string from a server variable.
- [SetSVarFloat](SetSVarFloat): Set a float for a server variable.
- [GetSVarFloat](GetSVarFloat): Get the previously set float from a server variable.
- [DeleteSVar](DeleteSVar): Delete a server variable.
