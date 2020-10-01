---
id: print
title: print
description: Prints a string to the server console (not in-game chat) and logs (server_log.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

Prints a string to the server console (not in-game chat) and logs (server_log.txt).

| Name     | Description          |
| -------- | -------------------- |
| string[] | The string to print. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit( )
{
    print("Gamemode started.");
    return 1;
}
```

## Related Functions

- printf: Print a formatted message into the server logs and console.
