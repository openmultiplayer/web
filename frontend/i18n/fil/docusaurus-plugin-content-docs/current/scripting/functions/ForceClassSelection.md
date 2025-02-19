---
title: ForceClassSelection
sidebar_label: ForceClassSelection
description: Pinipilit ang isang manlalaro na bumalik sa class selection.
tags: []
---

## Description

Pinipilit ang isang manlalaro na bumalik sa class selection.

| Name     | Description                                 |
| -------- | ------------------------------------------- |
| playerid | Ang player na ibabalik sa class selection.  |

## Returns

Ang function na ito ay hindi nagbabalik ng anumang value.

## Examples

```c
if (!strcmp(cmdtext, "/class", true))
{
    ForceClassSelection(playerid);
    TogglePlayerSpectating(playerid, true);
    TogglePlayerSpectating(playerid, false);
    return 1;
}
```

## Notes

:::warning

Ang function na ito ay hindi nagsasagawa ng pagbabago ng estado sa PLAYER_STATE_WASTED kapag pinagsama sa TogglePlayerSpectating (tingnan ang halimbawa sa ibaba), tulad ng nakalista dito.

:::

## Related Functions

- [AddPlayerClass](AddPlayerClass): Magdagdag ng class.
- [SetPlayerSkin](SetPlayerSkin): Magtakda ng skin ng manlalaro.
- [GetPlayerSkin](GetPlayerSkin): Kunin ang kasalukuyang skin ng manlalaro.
- [OnPlayerRequestClass](../callbacks/OnPlayerRequestClass): Tinatawag kapag nagpalit ng class ang manlalaro sa class selection.