---
title: PlayerTextDrawGetTextSize
sidebar_label: PlayerTextDrawGetTextSize
description: "Obtém o eixo X e o eixo Y do tamanho do texto player-textdraw."
tags: ["player", "textdraw", "playertextdraw"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o eixo X e o eixo Y do tamanho do texto player-textdraw.

| Nome | Descrição |
| ------------- | ----------------------------------------------------------------- |
| playerid | O ID do jogador.                                             |
| Text:textid | O ID do textdraw do qual obter o tamanho do texto.                       |
| &Float:width | Uma variável flutuante na qual armazenar a largura, passada por referência.  |
| &Float:height | Uma variável flutuante na qual armazenar a altura, passada por referência. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawTextSize(playerid, welcomeText[playerid], 2.0, 3.6);
    PlayerTextDrawShow(playerid, welcomeText[playerid]);

    new Float:width, Float:height;
    PlayerTextDrawGetTextSize(playerid, welcomeText[playerid], width, height);
    // largura = 2,0
    // altura = 3,6
    return 1;
}
```
## Funções Relacionadas

- [PlayerTextDrawCreate](PlayerTextDrawCreate): Crie um player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destrua um player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Defina o tamanho de uma caixa de desenho de texto do jogador (ou área clicável para PlayerTextDrawSetSelectable).
- [PlayerTextDrawColor](PlayerTextDrawColor): Defina a cor do texto em um player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Define a cor da caixa do player-textdraw.
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
- [IsPlayerTextDrawVisible](IsPlayerTextDrawVisible): Verifica se um player-textdraw é mostrado para o jogador.
- [IsValidPlayerTextDraw](IsValidPlayerTextDraw): Verifica se um player-textdraw é válido.
