---
title: "DestroyMenu | open.mp"
description: "Destroys the specified menu."
canonical: https://open.mp/docs/scripting/functions/DestroyMenu
language: en
---

# DestroyMenu

## Description

Destroys the specified menu.

| Name | Description |
| --- | --- |
| Menu:menuid | The menu ID to destroy |

## Returns

**true** if the destroying was successful, otherwise **false**

## Examples

```c
new Menu:exampleMenu;
exampleMenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);

// Later ...
DestroyMenu(exampleMenu);
```

## Related Functions

-   [CreateMenu](https://open.mp/docs/scripting/functions/CreateMenu): Create a menu.
-   [SetMenuColumnHeader](https://open.mp/docs/scripting/functions/SetMenuColumnHeader): Set the header for one of the columns in a menu.
-   [AddMenuItem](https://open.mp/docs/scripting/functions/AddMenuItem): Add an item to a menu.

## Related Callbacks

-   [OnPlayerSelectedMenuRow](https://open.mp/docs/scripting/callbacks/OnPlayerSelectedMenuRow): Called when a player selected a row in a menu.
-   [OnPlayerExitedMenu](https://open.mp/docs/scripting/callbacks/OnPlayerExitedMenu): Called when a player exits a menu.
