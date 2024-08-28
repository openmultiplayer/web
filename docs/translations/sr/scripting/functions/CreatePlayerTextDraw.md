---
title: CreatePlayerTextDraw
description: Креира textdraw за само једног играча.
tags: ["player", "textdraw", "playertextdraw"]
---

## Опис

Креира textdraw за само једног играча. Ово може да се користи као избегавање лимита за глобалне textdraw-ове.

| Име              | Опис                                            |
| ---------------- | ---------------------------------------         |
| playerid         | Ид играча коме креирамо player textdraw         |
| Float:x          | X координата                                    |
| Float:y          | Y координата                                    |
| const text[]     | Текст у textdraw-u                              |
| OPEN_MP_TAGS:... | Indefinite number of arguments of any tag.      |

## Враћа

ID креираног TextDraw-a

## Примери

```c
// Ова варијабла служи да садржи ID textdraw-a у себи
// тако да можемо да га користимо кроз скрипту
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Прво креирамо textdraw
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my SA-MP server");

    // Затим га прикажемо
    PlayerTextDrawShow(playerid, welcomeText[playerid]);
}
```

## Белешке

:::tip

Player textdraw-ovi се аутоматски униште када се играч дисконектује.

:::

:::warning

Key mapping кодови ( као што су ~k~~VEHICLE_ENTER_EXIT~ ) не раде преко 255ог карактера.

:::

## Сличне функције

- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Уништава player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Поставља боју текста у player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Поставља боју кутије player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Поставља боју позадине player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Поставља поређај текста у player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): Поставља фонт текста у player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Поставља величину слова у тексту player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Поставља величину кутије player-textdraw (или кликабл област за PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Укључује/искључује контурну линију на player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Поставља сенку на player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Скалира размак текста у player-textdraw на пропорционални однос.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Укључује/исключује кутију на player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Поставља текст у player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Приказује player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Скрива player-textdraw.
- [IsPlayerTextDrawVisible](IsPlayerTextDrawVisible): Проверава да ли је player-textdraw приказан играчу.
- [IsValidPlayerTextDraw](IsValidPlayerTextDraw): Проверава да ли је player-textdraw валидан.
- [PlayerTextDrawBackgroundColour](PlayerTextDrawBackgroundColour): Подешава боју позадине player-textdraw.
- [PlayerTextDrawBoxColour](PlayerTextDrawBoxColour): Поставља боју кутије текстуалне ознаке (PlayerTextDrawUseBox).
- [PlayerTextDrawColour](PlayerTextDrawColour): Поставља боју текста у player-textdraw.
- [PlayerTextDrawGetAlignment](PlayerTextDrawGetAlignment): Добија поређај текста у player-textdraw.
- [PlayerTextDrawGetBackgroundColour](PlayerTextDrawGetBackgroundColour): Добија боју позадине player-textdraw.
- [PlayerTextDrawGetBoxColour](PlayerTextDrawGetBoxColour): Добија боју кутије player-textdraw.
- [PlayerTextDrawGetColour](PlayerTextDrawGetColour): Добија боју текста у player-textdraw.
- [PlayerTextDrawGetFont](PlayerTextDrawGetFont): Добија фонт текста у player-textdraw.
- [PlayerTextDrawGetLetterSize](PlayerTextDrawGetLetterSize): Добија ширину и висину слова.
- [PlayerTextDrawGetOutline](PlayerTextDrawGetOutline): Добија величину контурне линије на player-textdraw.
- [PlayerTextDrawGetPos](PlayerTextDrawGetPos): Добија позицију player-textdraw.
- [PlayerTextDrawGetPreviewModel](PlayerTextDrawGetPreviewModel): Добија прегледни модел 3D player-textdraw.
- [PlayerTextDrawGetPreviewRot](PlayerTextDrawGetPreviewRot): Добија ротацију и зум 3D модела прегледног player-textdraw.
- [PlayerTextDrawGetPreviewVehicleColours](PlayerTextDrawGetPreviewVehicleColours): Добија боје возила прегледног 3D player-textdraw.
- [PlayerTextDrawGetShadow](PlayerTextDrawGetShadow): Добија величину сенке на player-textdraw.
- [PlayerTextDrawGetString](PlayerTextDrawGetString): Добија текст у player-textdraw.
- [PlayerTextDrawGetTextSize](PlayerTextDrawGetTextSize): Добија X и Y осе величине текста player-textdraw.
- [PlayerTextDrawIsBox](PlayerTextDrawIsBox): Проверава да ли је player-textdraw кутија.
- [PlayerTextDrawIsProportional](PlayerTextDrawIsProportional): Проверава да ли је player-textdraw пропорционалан.
- [PlayerTextDrawIsSelectable](PlayerTextDrawIsSelectable): Проверава да ли је player-textdraw селектован.
- [PlayerTextDrawSetPos](PlayerTextDrawSetPos): Поставља позицију player-textdraw.
- [PlayerTextDrawSetPreviewVehicleColours](PlayerTextDrawSetPreviewVehicleColours): Поставља боју возила у моделу прегледа player-textdraw (ако је возило приказано).

## Слични ресурси

- [TextDraw Sprites](../resources/textdrawsprites)
