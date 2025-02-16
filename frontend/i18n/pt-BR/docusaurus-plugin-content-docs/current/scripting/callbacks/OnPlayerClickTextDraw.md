---
title: OnPlayerClickTextDraw
sidebar_label: OnPlayerClickTextDraw
description: Esta callback é chamada quando um jogador clica em uma textdraw ou cancela a seleção pressionando ESC.
tags: ["player", "textdraw"]
---

## Descrição

Esta callback é chamada quando um jogador clica em uma textdraw ou cancela a seleção pressionando ESC.

| Nome      | Descrição                                                                            |
| --------- | ------------------------------------------------------------------------------------ |
| playerid  | O ID do jogador que clicou na TextDraw                                               |
| clickedid | O ID da TextDraw que recebeu o clique. INVALID_TEXT_DRAW Se a seleção for cancelada. |

## Retorno

1 - Irá previnir que outro filterscript receba esta callback.

0 - Indica que esta callback será passada para o próximo filterscript.

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
new Text:gTextDraw;

public OnGameModeInit()
{
    gTextDraw = TextDrawCreate(10.000000, 141.000000, "MinhaTXD");
    TextDrawTextSize(gTextDraw,60.000000, 20.000000);
    TextDrawAlignment(gTextDraw,0);
    TextDrawBackgroundColor(gTextDraw,0x000000ff);
    TextDrawFont(gTextDraw,1);
    TextDrawLetterSize(gTextDraw,0.250000, 1.000000);
    TextDrawColor(gTextDraw,0xffffffff);
    TextDrawSetProportional(gTextDraw,1);
    TextDrawSetShadow(gTextDraw,1);
    TextDrawSetSelectable(gTextDraw, 1);
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
         SendClientMessage(playerid, 0xFFFFFFAA, "Você clicou em uma textdraw.");
         CancelSelectTextDraw(playerid);
         return 1;
    }
    return 0;
}
```

## Notas

:::warning

A área 'clicável' é definida pelo TextDrawTextSize. Os parâmetros de X e Y passados pela função não devem ser "0" ou negativo. Não utilize CancelSelectTextDraw incondicionalmente dentro desta callback. Isso resultaria em um loop infinito.

:::

## Funções Relacionadas

- [OnPlayerClickPlayerTextDraw](OnPlayerClickPlayerTextDraw.md): Chamado quando o jogador clica em uma player-textdraw.
- [OnPlayerClickPlayer](OnPlayerClickPlayer.md): Chamado quando um jogador clica em outro.
