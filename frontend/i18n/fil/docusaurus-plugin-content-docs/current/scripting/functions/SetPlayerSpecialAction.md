---
title: SetPlayerSpecialAction
sidebar_label: SetPlayerSpecialAction
description: Ang function na ito ay nagbibigay-daan upang i-set ang mga player ng special action.
tags: ["player"]
---

## Description

Ang function na ito ay nagbibigay-daan upang i-set ang mga player ng special action.

| Name     | Description                                                            |
| -------- | ---------------------------------------------------------------------- |
| playerid | Ang player na magsasagawa ng action.                                   |
| actionid | Ang [action](../resources/specialactions) na dapat maisagawa.          |

## Returns

1: Matagumpay na naisakatuparan ang function.

0: Nabigo ang function na isagawa. Nangangahulugan ito na ang manlalaro ay hindi konektado.

## Examples

```c
if (strcmp(cmd, "/handsup", true) == 0)
{
    SetPlayerSpecialAction(playerid, SPECIAL_ACTION_HANDSUP);
    return 1;
}
```

## Notes

:::tip

Ang pag-alis ng mga jetpack mula sa mga player sa pamamagitan ng pagtatakda ng kanilang special action sa 0 ay nagiging sanhi ng tunog na mananatili hanggang kamatayan.

:::

## Related Functions

- [GetPlayerSpecialAction](GetPlayerSpecialAction): Kunin ang kasalukuyang special action ng player.
- [ApplyAnimation](ApplyAnimation): Maglapat ng animation sa isang player.