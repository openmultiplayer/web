---
title: OnPlayerClickPlayerTextDraw
sidebar_label: OnPlayerClickPlayerTextDraw
description: Ова функција се позива када играч кликне на текстдрава играча.
tags: ["player", "textdraw", "playertextdraw"]
---

## Опис

Ова функција се позива када играч кликне на текстдрава играча. Не позива се када играч откаже режим селекције (ESC) - међутим, OnPlayerClickTextDraw јесте.

| Име                     | Опис                                                    |
| ----------------------- | ------------------------------------------------------- |
| playerid                | ID играча који је изабрао текстдрава.                   |
| PlayerText:playertextid | ID текстдрава играча који је играч изабрао.             |

## Враћа

Увек се прво позива у филтерскриптама, тако да враћање 1 такође блокира друге скрипте од примања овог позива.

## Пример

```c
new PlayerText:gPlayerTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Креирање текстдрава
    gPlayerTextDraw[playerid] = CreatePlayerTextDraw(playerid, 10.000000, 141.000000, "MyTextDraw");
    PlayerTextDrawTextSize(playerid, gPlayerTextDraw[playerid], 60.000000, 20.000000);
    PlayerTextDrawAlignment(playerid, gPlayerTextDraw[playerid], TEXT_DRAW_ALIGN_LEFT);
    PlayerTextDrawBackgroundColor(playerid, gPlayerTextDraw[playerid], 0x000000FF);
    PlayerTextDrawFont(playerid, gPlayerTextDraw[playerid], TEXT_DRAW_FONT_1);
    PlayerTextDrawLetterSize(playerid, gPlayerTextDraw[playerid], 0.250000, 1.000000);
    PlayerTextDrawColor(playerid, gPlayerTextDraw[playerid], -1);
    PlayerTextDrawSetProportional(playerid, gPlayerTextDraw[playerid], true);
    PlayerTextDrawSetShadow(playerid, gPlayerTextDraw[playerid], 1);

    // Поставља ТД као селектабл(да играч може да кликне и изабере ТД)
    PlayerTextDrawSetSelectable(playerid, gPlayerTextDraw[playerid], true);

    // Показује ТД играчу
    PlayerTextDrawShow(playerid, gPlayerTextDraw[playerid]);
    return 1;
}

public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
    if (newkeys == KEY_SUBMISSION)
    {
        SelectTextDraw(playerid, 0xFF4040AA);
    }
    return 1;
}

public OnPlayerClickPlayerTextDraw(playerid, PlayerText:playertextid)
{
    if (playertextid == gPlayerTextDraw[playerid])
    {
        SendClientMessage(playerid, 0xFFFFFFAA, "You clicked on a player-textdraw.");
        CancelSelectTextDraw(playerid);
        return 1;
    }
    return 0;
}
```

## Белешке

:::warning

Када играч притисне ESC да откаже избор текстдрава, [OnPlayerClickTextDraw](OnPlayerClickTextDraw) се позива са ID-ом текстдрава 'INVALID_TEXT_DRAW'. [OnPlayerClickPlayerTextDraw](OnPlayerClickPlayerTextDraw) такође неће бити позвана.

:::

## Related Callbacks

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): Ова функција се позива када играч кликне на текстдрава.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): Ова функција се позива када играч кликне на другог играча.

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [PlayerTextDrawSetSelectable](../functions/PlayerTextDrawSetSelectable): Подешава да ли текстдрава играча може да се изабере преко [SelectTextDraw](../functions/SelectTextDraw).
