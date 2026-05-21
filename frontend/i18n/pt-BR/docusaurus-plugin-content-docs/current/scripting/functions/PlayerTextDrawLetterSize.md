---
title: PlayerTextDrawLetterSize
sidebar_label: PlayerTextDrawLetterSize
description: "Define a largura e a altura das letras em um player-textdraw."
tags: ["player", "textdraw", "playertextdraw"]
---


## Descrição

Define a largura e a altura das letras em um player-textdraw.

| Nome | Descrição |
| ----------------- | -------------------------------------------------------------------- |
| playerid | O ID do jogador cujo player-textdraw para definir o tamanho da letra |
| PlayerText:textid | O ID do player-textdraw para alterar o tamanho da letra de |
| Float:width | Largura de um caractere.                                                     |
| Float:height | Altura de um char.                                                    |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawLetterSize(playerid, welcomeText[playerid], 3.2, 5.1);

    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```
## Notas

:::tip

Ao usar esta função apenas para afetar a caixa de desenho de texto, multiplique 'Y' por 0,135 para converter para medidas semelhantes a TextDrawTextSize

:::

:::tip

As fontes parecem ter melhor aparência com uma proporção de X para Y de 1 para 4 (por exemplo, se x for 0,5, y deverá ser 2).

:::

## Funções Relacionadas

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Crie um player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destrua um player-textdraw.
- [PlayerTextDrawGetLetterSize](PlayerTextDrawGetLetterSize): Obtém a largura e altura das letras.
- [PlayerTextDrawColor](PlayerTextDrawColor): Defina a cor do texto em um player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Define a cor da caixa do player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Defina a cor de fundo de um player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Define o alinhamento de um player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): Defina a fonte de um player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Defina o tamanho de uma caixa de desenho de texto do jogador (ou área clicável para PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Alterna o contorno em um player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Defina a sombra em um player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Dimensione o espaçamento do texto em um player-textdraw para uma proporção proporcional.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Ative a caixa em um player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Define o texto de um player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Mostra um desenho de texto do jogador.
- [PlayerTextDrawHide](PlayerTextDrawHide): Ocultar um player-textdraw.
