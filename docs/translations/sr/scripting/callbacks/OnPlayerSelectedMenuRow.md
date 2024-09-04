---
title: OnPlayerSelectedMenuRow
description: Овај повратни позив се позива када играч изабере ставку из менија (ShowMenuForPlayer).
tags: ["player", "menu"]
---

## Опис

Овај повратни позив се позива када играч изабере ставку из менија ([ShowMenuForPlayer](../functions/ShowMenuForPlayer)).

| Име      | Опис                                              |
| -------- | ------------------------------------------------- |
| playerid | ID играча који је изабрао ставку из менија.       |
| row      | ID реда који је изабран. Први ред има ID 0.       |

## Враћа

Увек се позива прво у гамемод-у.

## Пример

```c
new Menu:MyMenu;

public OnGameModeInit()
{
    MyMenu = CreateMenu("Example Menu", 1, 50.0, 180.0, 200.0, 200.0);
    AddMenuItem(MyMenu, 0, "Item 1");
    AddMenuItem(MyMenu, 0, "Item 2");
    return 1;
}

public OnPlayerSelectedMenuRow(playerid, row)
{
    if (GetPlayerMenu(playerid) == MyMenu)
    {
        switch (row)
        {
            case 0:
            {
                print("Item 1 Selected");
            }
            case 1:
            {
                print("Item 2 Selected");
            }
        }
    }
    return 1;
}
```

## Notes

:::tip

ID менија се не прослеђује овом повратном позиву. Потребно је користити [GetPlayerMenu](../functions/GetPlayerMenu) да бисте утврдили из којег је менија играч изабрао ставку.

:::

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerExitedMenu](OnPlayerExitedMenu): Овај повратни позив се позива када играч изађе из менија.
- [OnDialogResponse](OnDialogResponse): Овај повратни позив се позива када играч одговори на дијалог.

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [CreateMenu](../functions/CreateMenu): Креирај мени.
- [DestroyMenu](../functions/DestroyMenu): Уништи мени.
- [AddMenuItem](../functions/AddMenuItem): Додаје ставку у одређени мени.
- [ShowMenuForPlayer](../functions/ShowMenuForPlayer): Покажи мени играчу.
- [HideMenuForPlayer](../functions/HideMenuForPlayer): Сакриј мени играчу.
