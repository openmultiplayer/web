---
title: EnableStuntBonusForAll
description: Enables or disables stunt bonuses for all players.
tags: []
---

## Description

Enables or disables stunt bonuses for all players. If enabled, players will receive monetary rewards when performing a stunt in a vehicle (e.g. a wheelie).

| Name        | Description                                                |
| ----------- | ---------------------------------------------------------- |
| bool:enable | 'true' to enable stunt bonuses or 'false' to disable them. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    EnableStuntBonusForAll(false);
    return 1;
}
```

## Notes

:::tip

You can also toggle stunt bonuses via [config.json](../../server/config.json)

```json
"use_stunt_bonuses": false,
```

:::

## Related Functions

- [EnableStuntBonusForPlayer](EnableStuntBonusForPlayer): Toggle stunt bonuses for a player.
