---
title: SelectTextDraw
sidebar_label: SelectTextDraw
description: "Exiba o cursor e permita que o jogador selecione um desenho de texto."
tags: ["textdraw"]
---


## Descrição

Exibe o cursor e permite que o jogador selecione um textdraw

| Nome | Descrição |
| ----------- | -------------------------------------------------------------- |
| playerid | O ID do jogador que deve ser capaz de selecionar um textdraw |
| hoverColour | A cor do textdraw ao passar o mouse (RGBA) |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/tdselect", true))
    {
        SelectTextDraw(playerid, 0x00FF00FF); // Destaque verde ao passar o mouse
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Please select a textdraw!");
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

É o TEXT que será destacado quando você passar o mouse sobre ele, não a caixa (se houver).

:::

## Funções Relacionadas

- [CancelSelectTextDraw](CancelSelectTextDraw): Cancele a seleção do textdraw com o mouse
- [TextDrawSetSelectable](TextDrawSetSelectable): Define se um textdraw é selecionável por meio de SelectTextDraw
- [PlayerTextDrawSetSelectable](PlayerTextDrawSetSelectable): Define se um player-textdraw pode ser selecionado por meio de SelectTextDraw

## Callbacks Relacionadas

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Chamado quando um jogador clica em um textdraw.
- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Chamado quando um jogador clica em um player-textdraw.
