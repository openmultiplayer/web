---
title: OnPlayerClickPlayerTextDraw
sidebar_label: OnPlayerClickPlayerTextDraw
description: Esta callback é chamada quando um jogador clica em uma player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

## Descrição

Esta callback é chamada quando um jogador clica em uma player-textdraw. Não é chamada quando um jogador cancela o modo de seleção (pressionando ESC), entretanto, OnPlayerClickTextDraw é.

| Nome         | Descrição                                       |
| ------------ | ----------------------------------------------- |
| playerid     | O ID do jogador que selecionou a textdraw       |
| playertextid | O ID da playerTextDraw que o jogador selecionou |

## Retorno

1 - Irá previnir que outro filterscript receba esta callback.

0 - Indica que esta callback será passada para o próximo filterscript.

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
new PlayerText:gPlayerTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Cria a TextDraw
    gPlayerTextDraw[playerid] = CreatePlayerTextDraw(playerid, 10.000000, 141.000000, "MinhaTXD");
    PlayerTextDrawTextSize(playerid, gPlayerTextDraw[playerid], 60.000000, 20.000000);
    PlayerTextDrawAlignment(playerid, gPlayerTextDraw[playerid],0);
    PlayerTextDrawBackgroundColor(playerid, gPlayerTextDraw[playerid],0x000000ff);
    PlayerTextDrawFont(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawLetterSize(playerid, gPlayerTextDraw[playerid], 0.250000, 1.000000);
    PlayerTextDrawColor(playerid, gPlayerTextDraw[playerid], 0xffffffff);
    PlayerTextDrawSetProportional(playerid, gPlayerTextDraw[playerid], 1);
    PlayerTextDrawSetShadow(playerid, gPlayerTextDraw[playerid], 1);

    // Torna-a selecionável
    PlayerTextDrawSetSelectable(playerid, gPlayerTextDraw[playerid], 1);

    // Mostra para o jogador
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
         SendClientMessage(playerid, 0xFFFFFFAA, "Você clicou em uma TextDraw.");
         CancelSelectTextDraw(playerid);
         return 1;
    }
    return 0;
}
```

## Notas

:::warning

Quando um jogador pressiona ESC para cancelar o modo de seleção, OnPlayerClickTextDraw será chamada com um ID de TextDraw de: 'INVALID_TEXT_DRAW' (para TextDraw's inválidas). Porém, OnPlayerClickPlayerTextDraw não será chamado neste mesmo caso.

:::

## Funções Relacionadas

- [PlayerTextDrawSetSelectable](../functions/PlayerTextDrawSetSelectable): Define se uma TextDraw é selecionável ou não.
- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): Chamado quando um jogador clica em uma TextDraw.
- [OnPlayerClickPlayer](OnPlayerClickPlayer): Chamado quando um jogador clica em outro.
