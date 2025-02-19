---
title: DestroyMenu
sidebar_label: DestroyMenu
description: Sinisira ang tinukoy na menu.
tags: ["menu"]
---

## Description

Sinisira ang tinukoy na menu.

| Name   | Description            |
| ------ | ---------------------- |
| menuid | Ang menu ID ng sisirain|

## Returns

True kung matagumpay ang pagsira, kung hindi man ay False

## Examples

```c
new Menu:examplemenu;
examplemenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);

// ...
DestroyMenu(examplemenu);
```

## Related Functions

- [CreateMenu](CreateMenu): Gumawa ng menu.
- [SetMenuColumnHeader](SetMenuColumnHeader): Itakda ang header para sa isa sa mga column sa isang menu.
- [AddMenuItem](AddMenuItem): Magdagdag ng item sa isang menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Tinatawag kapag pumili ang isang manlalaro ng row sa isang menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Tinatawag kapag lumabas ang isang player sa isang menu.