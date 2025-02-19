---
title: OnPlayerClickTextDraw
sidebar_label: OnPlayerClickTextDraw
description: Ова функција се позива када играч кликне на текстдрава или откаже режим селекције помоћу тастера Escape.
tags: ["player", "textdraw"]
---

## Опис

Ова функција се позива када играч кликне на текстдрава или откаже режим селекције помоћу тастера Escape.

| Име            | Опис                                                                          |
| -------------- | ----------------------------------------------------------------------------- |
| playerid       | ID играча који је кликнуо на текстдрава.                                      |
| Text:clickedid | ID кликнутог текстдрава. INVALID_TEXT_DRAW ако је избор отказан.              |

## Враћа

It is always called first in filterscripts so returning 1 there also blocks other scripts from seeing it.

## Пример

```c
new Text:gTextDraw;

public OnGameModeInit()
{
    gTextDraw = TextDrawCreate(10.000000, 141.000000, "MyTextDraw");
    TextDrawTextSize(gTextDraw, 60.000000, 20.000000);
    TextDrawAlignment(gTextDraw, TEXT_DRAW_ALIGN_LEFT);
    TextDrawBackgroundColor(gTextDraw, 0x000000FF);
    TextDrawFont(gTextDraw, TEXT_DRAW_FONT_1);
    TextDrawLetterSize(gTextDraw, 0.250000, 1.000000);
    TextDrawColor(gTextDraw, -1);
    TextDrawSetProportional(gTextDraw, true);
    TextDrawSetShadow(gTextDraw, 1);
    TextDrawSetSelectable(gTextDraw, true);
    return 1;
}

public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
    if (newkeys == KEY_SUBMISSION)
    {
        TextDrawShowForPlayer(playerid, gTextDraw);
        SelectTextDraw(playerid, 0xFF4040AA);
    }
    return 1;
}

public OnPlayerClickTextDraw(playerid, Text:clickedid)
{
    if (clickedid == gTextDraw)
    {
        SendClientMessage(playerid, 0xFFFFFFAA, "You clicked on a textdraw.");
        CancelSelectTextDraw(playerid);
        return 1;
    }
    return 0;
}
```

## Белешке

:::warning

- Подручје клика је дефинисано са [TextDrawTextSize](../functions/TextDrawTextSize).
- `x` и `y` параметри прослеђени тој функцији не смеју бити нула или негативни.
- Не користите [CancelSelectTextDraw](../functions/CancelSelectTextDraw) безусловно унутар ове функције. То може довести до **бесконачне петље**.

:::

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerClickPlayerTextDraw](OnPlayerClickPlayerTextDraw): Ова функција се позива када играч кликне на текстдрава играча.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): Ова функција се позива када играч кликне на другог играча.

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [SelectTextDraw](../functions/SelectTextDraw): Омогућава миша, тако да играч може да изабере текстдрава.
- [CancelSelectTextDraw](../functions/CancelSelectTextDraw): Прекида избор текстдрава помоћу миша.
