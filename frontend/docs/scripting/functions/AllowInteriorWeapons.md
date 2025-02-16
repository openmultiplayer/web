---
title: AllowInteriorWeapons
sidebar_label: AllowInteriorWeapons
description: Toggle whether the usage of weapons in interiors is allowed or not.
tags: []
---

## Description

Toggle whether the usage of weapons in interiors is allowed or not.

| Name       | Description                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| bool:allow | 'true' to enable weapons in interiors (enabled by default), 'false' to disable weapons in interiors. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    // This will allow weapons inside interiors.
    AllowInteriorWeapons(true);
    return 1;
}
```

## Notes

:::warning

This function does not work in the current SA:MP version!

:::

:::tip

You can also toggle interior weapons via [config.json](../../server/config.json)

```json
"allow_interior_weapons": true,
```

:::

## Related Functions

- [AreInteriorWeaponsAllowed](AreInteriorWeaponsAllowed): Can weapons be used in interiors?
- [SetPlayerInterior](SetPlayerInterior): Set a player's interior.
- [GetPlayerInterior](GetPlayerInterior): Get the current interior of a player.

## Related Callbacks

- [OnPlayerInteriorChange](../callbacks/OnPlayerInteriorChange): Called when a player changes interior.
