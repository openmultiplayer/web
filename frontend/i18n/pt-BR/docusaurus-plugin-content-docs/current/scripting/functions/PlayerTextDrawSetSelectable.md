---
title: PlayerTextDrawSetSelectable
sidebar_label: PlayerTextDrawSetSelectable
description: "Alterna se um player-textdraw pode ser selecionado ou não."
tags: ["player", "textdraw", "playertextdraw"]
---


## Descrição

Alterna se um player-textdraw pode ser selecionado ou não.

| Nome | Descrição |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| playerid | O ID do jogador cujo player-textdraw definir a selecionabilidade.                          |
| PlayerText:textid | O ID do player-textdraw para definir a capacidade de seleção.                                       |
| bool:selectable | Defina o player-textdraw selecionável como 'true' ou não selecionável como 'false'. Por padrão, é 'false'. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server");
    PlayerTextDrawTextSize(playerid, welcomeText[playerid], 30.0, 10.0);

    // Definir 'welcomeText[playerid]' selecionável
    PlayerTextDrawSetSelectable(playerid, welcomeText[playerid], true);

    // Ativar seleção de textdraw para jogador
    SelectTextDraw(playerid, 0xFF0000FF);

    // Mostrar 'welcomeText[playerid]' ao jogador
    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```
## Notas

:::tip

Use [PlayerTextDrawTextSize](PlayerTextDrawTextSize) para definir a área clicável.

:::

:::warning

[PlayerTextDrawSetSelectable](PlayerTextDrawSetSelectable) e [SelectTextDraw](SelectTextDraw) MUST podem ser usados BEFORE o textdraw é mostrado ao jogador.

:::

## Funções Relacionadas

- [PlayerTextDrawIsSelectable](PlayerTextDrawIsSelectable): Verifica se um player-textdraw é selecionável.
- [SelectTextDraw](SelectTextDraw): Habilita o mouse, para que o jogador possa selecionar um textdraw
- [CancelSelectTextDraw](CancelSelectTextDraw): Cancele a seleção do textdraw com o mouse

## Callbacks Relacionadas

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Chamado quando um jogador clica em um player-textdraw.
