---
title: PlayerTextDrawShow
sidebar_label: PlayerTextDrawShow
description: "Mostra um player-textdraw ao jogador para o qual foi criado."
tags: ["player", "textdraw", "playertextdraw"]
---


## Descrição

Mostrar um player-textdraw ao jogador para o qual foi criado

| Nome | Descrição |
| ----------------- | --------------------------------------------- |
| playerid | O ID do jogador para mostrar o textdraw para |
| PlayerText:textid | O ID do textdraw para mostrar |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");

    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```
## Notas

:::tip

O player-textdraw é válido apenas para o jogador para o qual foi criado. Isso significa que você não pode mostrar um player-textdraw criado para um jogador específico para outro jogador.

:::

## Funções Relacionadas

- [PlayerTextDrawHide](PlayerTextDrawHide): Ocultar um player-textdraw.
- [CreatePlayerTextDraw](CreatePlayerTextDraw): Crie um player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destrua um player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Defina a cor do texto em um player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Define a cor da caixa do player-textdraw.
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
