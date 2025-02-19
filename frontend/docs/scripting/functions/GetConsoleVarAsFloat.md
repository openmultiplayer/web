---
title: GetConsoleVarAsFloat
sidebar_label: GetConsoleVarAsFloat
description: Get the float value of a console variable.
tags: []
---

## Description

Get the float value of a console variable.

| Name         | Description                                         |
| ------------ | --------------------------------------------------- |
| const cvar[] | The name of the float variable to get the value of. |

## Returns

The value of the specified console variable.

0.0 if the specified console variable is not an integer or doesn't exist.

## Examples

```c
new Float:radius = GetConsoleVarAsInt("game.nametag_draw_radius");
printf("Nametag Draw Radius: %i", radius);
```

## Notes

:::tip

Type 'varlist' in the server console to display a list of available console variables and their types.

:::

## Related Functions

- [GetConsoleVarAsInt](GetConsoleVarAsInt): Retreive a server variable as an integer.
- [GetConsoleVarAsString](GetConsoleVarAsString): Retreive a server variable as a string.
- [GetConsoleVarAsBool](GetConsoleVarAsBool): Retreive a server variable as a boolean.
