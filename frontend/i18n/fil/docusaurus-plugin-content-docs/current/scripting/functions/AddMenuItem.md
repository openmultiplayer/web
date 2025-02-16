---
title: AddMenuItem
sidebar_label: AddMenuItem
description: Magdagdag ng item sa isang tinutukoy na menu.
tags: ["menu"]
---

## Description

Adds an item to a specified menu.

| Name    | Description                              |
| ------- | ---------------------------------------- |
| menuid  | Ang menu id upang magdagdag ng item.     |
| column  | Ang column kung saan idaragdag ang item. |
| title[] | Ang pamagat para sa bagong item sa menu. |

## Returns

Ang index ng row kung saan idinagdag ang item na ito.

## Examples

```c
new Menu:gExampleMenu;

public OnGameModeInit()
{
    gExampleMenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);
    AddMenuItem(gExampleMenu, 0, "item 1");
    AddMenuItem(gExampleMenu, 0, "item 2");
    return 1;
}
```

## Notes

:::tip

Nag-crash kapag naipasa ang isang di-wastong ID ng menu. Maaari ka lang magkaroon ng 12 item sa bawat menu (ang ika-13 ay mapupunta sa kanang bahagi ng header ng pangalan ng column (kulay), ika-14 at mas mataas na hindi ipinapakita). Maaari ka lamang gumamit ng 2 column (0 at 1). Maaari ka lamang magdagdag ng 8 color code sa bawat isang item (~r~, ~g~ atbp.). Ang maximum na haba ng item sa menu ay 31 simbolo.

:::

## Related Functions

- [CreateMenu](CreateMenu): Gumawa ng menu.
- [SetMenuColumnHeader](SetMenuColumnHeader): Itakda ang header para sa isa sa mga column sa isang menu.
- [DestroyMenu](DestroyMenu): Sirain ang menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Tinatawag kapag ang manlalaro ay pumili ng isang row sa menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Tinatawag kapag umalis ang manlalaro sa menu.
