---
id: DestroyMenu
title: DestroyMenu
description: Destroys the specified menu.
tags: ["menu"]
---

## Description

Destroys the specified menu.

| Name   | Description            |
| ------ | ---------------------- |
| menuid | The menu ID to destroy |

## Returns

True if the destroying was successful, otherwise false

## Examples

```c
new Menu:examplemenu;
examplemenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);

// ...
DestroyMenu(examplemenu);
```

## Related Functions

- [CreateMenu](../functions/CreateMenu.md): Create a menu.
- [SetMenuColumnHeader](../functions/SetMenuColumnHeader.md): Set the header for one of the columns in a menu.
- [AddMenuItem](../functions/AddMenuItem.md): Add an item to a menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow.md): Called when a player selected a row in a menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu.md): Called when a player exits a menu.
