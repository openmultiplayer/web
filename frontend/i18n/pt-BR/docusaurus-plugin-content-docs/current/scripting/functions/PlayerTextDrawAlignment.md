---
title: PlayerTextDrawAlignment
sidebar_label: PlayerTextDrawAlignment
description: "Defina o alinhamento do texto de um player-textdraw."
tags: ["player", "textdraw", "playertextdraw"]
---


## Descrição

Defina o alinhamento do texto de um player-textdraw.

| Nome | Descrição |
| ------------------------- | --------------------------------------------------------------------------- |
| playerid | O ID do jogador cujo player-textdraw definir o alinhamento.         |
| PlayerText:textid | O ID do player-textdraw para definir o alinhamento.                      |
| TEXT_DRAW_ALIGN:alignment | `TEXT_DRAW_ALIGN_LEFT`/`TEXT_DRAW_ALIGN_CENTER`/`TEXT_DRAW_ALIGN_RIGHT` |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
/*
    TEXT_DRAW_ALIGN_LEFT
    TEXT_DRAW_ALIGN_CENTER
    TEXT_DRAW_ALIGN_RIGHT
*/

new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 425.0, "This is an example textdraw");
    PlayerTextDrawAlignment(playerid, gMyTextdraw[playerid], TEXT_DRAW_ALIGN_CENTER); // Alinhe o textdraw no centro
    return 1;
}
```
## Notas

:::warning

Para o alinhamento 2 (TEXT_DRAW_ALIGN_CENTER), os valores xey de TextSize precisam ser trocados, consulte as notas em [PlayerTextDrawTextSize](PlayerTextDrawTextSize).

:::

:::tip

Caso o textdraw já esteja sendo mostrado para o jogador, ele deve ser mostrado novamente ([PlayerTextDrawShow](PlayerTextDrawShow)) para mostrar as alterações desta função.

:::

## Funções Relacionadas

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Crie um player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destrua um jogador-textdraw.
- [PlayerTextDrawGetAlignment](PlayerTextDrawGetAlignment): Obtém o alinhamento do texto de um player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Defina a cor do texto em um player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Define a cor da caixa do player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Defina a cor de fundo de um player-textdraw.
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
