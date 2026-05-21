---
title: PlayerTextDrawBoxColour
sidebar_label: PlayerTextDrawBoxColour
description: "Define a cor da caixa de um textdraw (PlayerTextDrawUseBox )."
tags: ["player", "textdraw", "playertextdraw"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Define a cor da caixa de um textdraw (PlayerTextDrawUseBox).

| Nome | Descrição |
| ----------------- | ------------------------------------------------------------- |
| playerid | O ID do jogador cujo textdraw definir a cor da caixa. |
| PlayerText:textid | O ID do jogador textdraw para definir a cor da caixa.       |
| boxColour | A cor a ser definida. Alfa (transparência) é compatível.         |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Example Text");
    PlayerTextDrawUseBox(playerid, pTextdraw[playerid], true);
    PlayerTextDrawBoxColour(playerid, pTextdraw[playerid], 0xFF0000FF); // Caixa vermelha sem transparência
    return 1;
}
```
## Funções Relacionadas

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Crie um player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destrua um player-textdraw.
- [PlayerTextDrawColour](PlayerTextDrawColour): Defina a cor do texto em um player-textdraw.
- [PlayerTextDrawBackgroundColour](PlayerTextDrawBackgroundColour): Defina a cor de fundo de um player-textdraw.
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
