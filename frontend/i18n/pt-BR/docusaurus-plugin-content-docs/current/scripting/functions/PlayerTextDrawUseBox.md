---
title: PlayerTextDrawUseBox
sidebar_label: PlayerTextDrawUseBox
description: "Alterne a caixa em um player-textdraw."
tags: ["player", "textdraw", "playertextdraw"]
---


## Descrição

Alterne a caixa em um player-textdraw.

| Nome | Descrição |
| ----------------- | -------------------------------------------------------- |
| playerid | O ID do jogador cujo textdraw para alternar a caixa de |
| PlayerText:textid | O ID do player-textdraw para alternar a caixa de |
| bool:boxEnabled | **true** para usar uma caixa ou **false** para não usar uma caixa |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 40.0, 140.0, "_~N~Example text!~N~_");
    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], true);
    PlayerTextDrawBoxColor(playerid, gMyTextdraw[playerid], 0x00000066); // Defina a cor da caixa para preto semitransparente
    return 1;
}
```
## Funções Relacionadas

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Crie um player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destrua um player-textdraw.
- [PlayerTextDrawIsBox](PlayerTextDrawIsBox): Verifica se um player-textdraw é box.
- [PlayerTextDrawColor](PlayerTextDrawColor): Defina a cor do texto em um player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Define a cor da caixa do player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Defina a cor de fundo de um player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Define o alinhamento de um player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): Define a fonte de um player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Defina o tamanho da letra do texto em um player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Defina o tamanho de uma caixa de desenho de texto do jogador (ou área clicável para PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Alterna o contorno em um player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Defina a sombra em um player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Dimensione o espaçamento do texto em um player-textdraw para uma proporção proporcional.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Define o texto de um player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Mostra um desenho de texto do jogador.
- [PlayerTextDrawHide](PlayerTextDrawHide): Ocultar um player-textdraw.
