---
title: PlayerTextDrawSetProportional
sidebar_label: PlayerTextDrawSetProportional
description: "Parece dimensionar o espaçamento do texto para uma proporção proporcional."
tags: ["player", "textdraw", "playertextdraw"]
---


## Descrição

Parece dimensionar o espaçamento do texto para uma proporção proporcional. Útil ao usar [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize) para garantir que o texto tenha espaçamento uniforme entre caracteres.

| Nome | Descrição |
| ----------------- | ------------------------------------------------------------------------ |
| playerid | O ID do jogador cujo player-textdraw para definir a proporcionalidade de |
| PlayerText:textid | O ID do player-textdraw para definir a proporcionalidade de |
| bool:proportional | 'true' para ativar a proporcionalidade, 'false' para desativar.                    |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server!");
    PlayerTextDrawSetProportional(playerid, welcomeText[playerid], true);

    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```
## Funções Relacionadas

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Crie um player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destrua um player-textdraw.
- [PlayerTextDrawIsProportional](PlayerTextDrawIsProportional): Verifica se o player-textdraw é proporcional.
- [PlayerTextDrawColor](PlayerTextDrawColor): Defina a cor do texto em um player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Define a cor da caixa do player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Defina a cor de fundo de um player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Define o alinhamento de um player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): Define a fonte de um player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Defina o tamanho da letra do texto em um player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Defina o tamanho de uma caixa de desenho de texto do jogador (ou área clicável para PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Alterna o contorno em um player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Defina a sombra em um player-textdraw.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Ative a caixa em um player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Define o texto de um player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Mostra um desenho de texto do jogador.
- [PlayerTextDrawHide](PlayerTextDrawHide): Ocultar um player-textdraw.
