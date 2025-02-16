---
title: AddServerRule
description: Add a server rule.
tags: ["rule"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Add a server rule.

| Name             | Description                                |
| ---------------- | ------------------------------------------ |
| const rule[]     | The server rule name to add.               |
| const format[]   | The server rule value.                     |
| OPEN_MP_TAGS:... | Indefinite number of arguments of any tag. |

## Returns

Returns true if the function executed successfully, otherwise false.

## Examples

```c
public OnGameModeInit()
{
    AddServerRule("discord", "discord.gg/samp");
    return 1;
}
```

## Related Functions

- [RemoveServerRule](RemoveServerRule): Remove the server rule.
- [IsValidServerRule](IsValidServerRule): Checks if the given server rule is valid.
