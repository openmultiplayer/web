---
title: "AddServerRule | open.mp"
description: "Add a server rule."
canonical: https://open.mp/docs/scripting/functions/AddServerRule
language: en
---

# AddServerRule

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Add a server rule.

| Name | Description |
| --- | --- |
| const rule\[\] | The server rule name to add. |
| const format\[\] | The server rule value. |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments of any tag. |

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

-   [RemoveServerRule](https://open.mp/docs/scripting/functions/RemoveServerRule): Remove the server rule.
-   [IsValidServerRule](https://open.mp/docs/scripting/functions/IsValidServerRule): Checks if the given server rule is valid.
