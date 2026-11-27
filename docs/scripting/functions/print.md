---
title: "print | open.mp"
description: "Prints a string to the server console (not in-game chat) and logs (log.txt)."
canonical: https://open.mp/docs/scripting/functions/print
language: en
---

# print

## Description

Prints a string to the server console (not in-game chat) and logs (log.txt).

| Name | Description |
| --- | --- |
| const string\[\] | The string to print. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    print("Gamemode started.");
    return 1;
}
```

## Related Functions

-   [printf](https://open.mp/docs/scripting/functions/printf): Print a formatted message into the server logs and console.
