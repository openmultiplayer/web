---
id: DestroyMenu
title: DestroyMenu
description: Destroys the specified menu.
tags: ["menu"]
---

<TagLinks />

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

- CreateMenu: Create a menu.
- SetMenuColumnHeader: Set the header for one of the columns in a menu.
- AddMenuItem: Add an item to a menu.
- OnPlayerSelectedMenuRow: Called when a player selected a row in a menu.
- OnPlayerExitedMenu: Called when a player exits a menu.
