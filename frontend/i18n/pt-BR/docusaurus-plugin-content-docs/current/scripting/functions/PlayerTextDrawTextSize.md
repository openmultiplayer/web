---
title: PlayerTextDrawTextSize
sidebar_label: PlayerTextDrawTextSize
description: "Altere o tamanho de um player-textdraw (caixa se PlayerTextDrawUseBox estiver habilitado e/ou área clicável para uso com PlayerTextDrawSetSelectable)."
tags: ["player", "textdraw", "playertextdraw"]
---


## Descrição

Altere o tamanho de um player-textdraw (caixa se [PlayerTextDrawUseBox](PlayerTextDrawUseBox) estiver habilitado e/ou área clicável para uso com [PlayerTextDrawSetSelectable](PlayerTextDrawSetSelectable)).

| Nome | Descrição |
| ----------------- | -------------------------------------------------------------------------------------- |
| playerid | O ID do jogador cujo player-textdraw definirá o tamanho de |
| PlayerText:textid | O ID do player-textdraw para definir o tamanho.                                      |
| Float:width | O tamanho no eixo X (esquerda/direita) seguindo a mesma grade de 640x480 de TextDrawCreate. |
| Float:height | O tamanho no eixo Y (para cima/para baixo) seguindo a mesma grade de 640x480 de TextDrawCreate.    |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server!");
    PlayerTextDrawTextSize(playerid, welcomeText[playerid], 2.0, 3.6);

    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```
## Notas

:::tip

- X e y têm significados diferentes com valores [PlayerTextDrawAlignment](PlayerTextDrawAlignment) diferentes:
  - 1 (esquerda): são o canto direito da caixa, coordenadas absolutas.
  - 2 (centro): precisam ser invertidos (trocar os dois) e o valor de x é a largura total da caixa.
  - 3 (direita): x e y são as coordenadas do canto mais esquerdo da caixa
- Usar o tipo de fonte 4 (sprite) e 5 (visualização do modelo) converte X e Y desta função das coordenadas de canto para WIDTH e HEIGHT (offsets).
- A caixa TextDraw inicia 10,0 unidades para cima e 5,0 para a esquerda como origem (coordenada TextDrawCreate).
- Esta função define a área clicável para uso com [PlayerTextDrawSetSelectable](PlayerTextDrawSetSelectable), independentemente de uma caixa ser mostrada ou não.

:::

## Funções Relacionadas

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Crie um player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destrua um player-textdraw.
- [PlayerTextDrawGetTextSize](PlayerTextDrawGetTextSize): Obtém o eixo X e o eixo Y do tamanho do texto player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Defina a cor do texto em um player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Defina a cor da caixa do player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Defina a cor de fundo de um player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Define o alinhamento de um player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): Defina a fonte de um player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Defina o tamanho da letra do texto em um player-textdraw.
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Alterna o contorno em um player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Defina a sombra em um player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Dimensione o espaçamento do texto em um player-textdraw para uma proporção proporcional.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Ative a caixa em um player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Define o texto de um player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Mostra um desenho de texto do jogador.
- [PlayerTextDrawHide](PlayerTextDrawHide): Ocultar um player-textdraw.
