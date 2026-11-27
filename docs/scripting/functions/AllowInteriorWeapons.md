---
title: "AllowInteriorWeapons | open.mp"
description: "Toggle whether the usage of weapons in interiors is allowed or not."
canonical: https://open.mp/docs/scripting/functions/AllowInteriorWeapons
language: en
---

# AllowInteriorWeapons

## Description

Toggle whether the usage of weapons in interiors is allowed or not.

| Name | Description |
| --- | --- |
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

warning

This function does not work in the current SA:MP version!

tip

You can also toggle interior weapons via [config.json](https://open.mp/docs/server/config.json)

```json
"allow_interior_weapons": true,
```

## Related Functions

-   [AreInteriorWeaponsAllowed](https://open.mp/docs/scripting/functions/AreInteriorWeaponsAllowed): Can weapons be used in interiors?
-   [SetPlayerInterior](https://open.mp/docs/scripting/functions/SetPlayerInterior): Set a player's interior.
-   [GetPlayerInterior](https://open.mp/docs/scripting/functions/GetPlayerInterior): Get the current interior of a player.

## Related Callbacks

-   [OnPlayerInteriorChange](https://open.mp/docs/scripting/callbacks/OnPlayerInteriorChange): Called when a player changes interior.
