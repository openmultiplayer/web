---
title: PlayerTextDrawSetOutline
sidebar_label: PlayerTextDrawSetOutline
description: "Defina o contorno de um player-textdraw."
tags: ["player", "textdraw", "playertextdraw"]
---


## Descrição

Defina o contorno de um player-textdraw. A cor do contorno não pode ser alterada a menos que [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor) seja usado.

| Nome | Descrição |
| ----------------- | ---------------------------------------------------------------- |
| playerid | O ID do jogador cujo player-textdraw definirá o contorno de |
| PlayerText:textid | O ID do player-textdraw para definir o contorno de |
| outlineSize | A espessura do contorno.                                    |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server!");
    PlayerTextDrawSetOutline(playerid, welcomeText[playerid], 1);

    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```
## Funções Relacionadas

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Crie um player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destrua um player-textdraw.
- [PlayerTextDrawGetOutline](PlayerTextDrawGetOutline): Obtenha o tamanho do contorno em um player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Defina a cor do texto em um player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Define a cor da caixa do player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Defina a cor de fundo de um player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Define o alinhamento de um player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): Define a fonte de um player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Defina o tamanho da letra do texto em um player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Defina o tamanho de uma caixa de desenho de texto do jogador (ou área clicável para PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Defina a sombra em um player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Dimensione o espaçamento do texto em um player-textdraw para uma proporção proporcional.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Ative a caixa em um player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Define o texto de um player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Mostra um desenho de texto do jogador.
- [PlayerTextDrawHide](PlayerTextDrawHide): Ocultar um player-textdraw.
