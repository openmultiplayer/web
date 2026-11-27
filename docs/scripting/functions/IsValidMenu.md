---
title: "IsValidMenu | open.mp"
description: "Checks if a menu ID is valid."
canonical: https://open.mp/docs/scripting/functions/IsValidMenu
language: en
---

# IsValidMenu

## Description

Checks if a menu ID is valid.

| Name | Description |
| --- | --- |
| Menu:menuid | The ID of the menu to check. |

## Returns

**true** - The menu is valid.

**false** - The menu is not valid.

## Related Functions

-   [CreateMenu](https://open.mp/docs/scripting/functions/CreateMenu): Creates a menu.
-   [DestroyMenu](https://open.mp/docs/scripting/functions/DestroyMenu): Destroys the specified menu.
-   [DisableMenu](https://open.mp/docs/scripting/functions/DisableMenu): Disable a menu.
-   [DisableMenuRow](https://open.mp/docs/scripting/functions/DisableMenuRow): Disable a specific row in a menu for all players.
-   [AddMenuItem](https://open.mp/docs/scripting/functions/AddMenuItem): Adds an item to a specified menu.
-   [SetMenuColumnHeader](https://open.mp/docs/scripting/functions/SetMenuColumnHeader): Set the header for one of the columns in a menu.
-   [IsMenuDisabled](https://open.mp/docs/scripting/functions/IsMenuDisabled): Check if a menu is disabled.
-   [IsMenuRowDisabled](https://open.mp/docs/scripting/functions/IsMenuRowDisabled): Check if a menu row is disabled.

## Related Callbacks

-   [OnPlayerSelectedMenuRow](https://open.mp/docs/scripting/callbacks/OnPlayerSelectedMenuRow): Called when a player selected a row in a menu.
-   [OnPlayerExitedMenu](https://open.mp/docs/scripting/callbacks/OnPlayerExitedMenu): Called when a player exits a menu.
