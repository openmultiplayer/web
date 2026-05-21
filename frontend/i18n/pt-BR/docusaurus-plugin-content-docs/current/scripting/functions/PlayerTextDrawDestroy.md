---
title: PlayerTextDrawDestroy
sidebar_label: PlayerTextDrawDestroy
description: "Destrua um player-textdraw."
tags: ["player", "textdraw", "playertextdraw"]
---


## Descrição

Destrua um player-textdraw.

| Nome | Descrição |
| ----------------- | ------------------------------------------------------ |
| playerid | O ID do jogador que deve ser destruído pelo player-textdraw. |
| PlayerText:textid | O ID do textdraw a ser destruído.                     |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Example Text");
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    PlayerTextDrawDestroy(playerid, pTextdraw[playerid]);
    return 1;
}
```
## Funções Relacionadas

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Crie um player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Defina a cor do texto em um player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Defina a cor da caixa do player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Defina a cor de fundo de um player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Define o alinhamento de um player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): Defina a fonte de um player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Defina o tamanho da letra do texto em um player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Defina o tamanho de uma caixa de desenho de texto do jogador (ou área clicável para PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Alterna o contorno em um player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Defina a sombra em um player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Dimensione o espaçamento do texto em um player-textdraw para uma proporção proporcional.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Ative a caixa em um player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Define o texto de um player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Mostra um desenho de texto do jogador.
- [PlayerTextDrawHide](PlayerTextDrawHide): Ocultar um player-textdraw.
