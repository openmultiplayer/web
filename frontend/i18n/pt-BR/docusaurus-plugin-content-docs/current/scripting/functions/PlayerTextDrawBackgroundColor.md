---
title: PlayerTextDrawBackgroundColor
sidebar_label: PlayerTextDrawBackgroundColor
description: "Ajuste a cor de fundo de um player-textdraw."
tags: ["player", "textdraw", "playertextdraw"]
---


## Descrição

Ajuste a cor de fundo de um player-textdraw.

| Nome | Descrição |
| ----------------- | ------------------------------------------------------------------------- |
| playerid | O ID do jogador cujo player-textdraw definirá a cor de fundo de |
| PlayerText:textid | O ID do player-textdraw para definir a cor de fundo de |
| backgroundColour | A cor com a qual o textdraw deve ser definido.                             |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], true);
    PlayerTextDrawBackgroundColor(playerid, gMyTextdraw[playerid], 0xFFFFFFFF); // Defina a cor de fundo do gMyTextdraw como branco
    return 1;
}
```
## Notas

:::tip

- Se [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline) for usado com tamanho > 0, a cor do contorno corresponderá à cor usada em PlayerTextDrawBackgroundColour.
- Alterar o valor da cor parece alterar a cor usada em PlayerTextDrawColour.

:::

## Funções Relacionadas

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Crie um player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destrua um player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Defina a cor do texto em um player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Define a cor da caixa do player-textdraw.
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
