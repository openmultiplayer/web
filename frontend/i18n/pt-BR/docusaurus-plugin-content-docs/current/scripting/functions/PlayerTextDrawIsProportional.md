---
title: PlayerTextDrawIsProportional
sidebar_label: PlayerTextDrawIsProportional
description: "Verifica se um player-textdraw é proporcional."
tags: ["player", "textdraw", "playertextdraw"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se um player-textdraw é proporcional.

## Parâmetros

| Nome | Descrição |
| ----------------- | --------------------------------------- |
| playerid | O ID do jogador.                   |
| PlayerText:textid | O ID do player-textdraw a ser verificado. |

## Valores de retorno

Retorna **true** se o player-textdraw for proporcional, caso contrário **false**.

## Exemplo de uso

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawSetProportional(playerid, welcomeText[playerid], true);
    PlayerTextDrawShow(playerid, welcomeText[playerid]);

    if (PlayerTextDrawIsProportional(playerid, welcomeText[playerid]))
    {
        // Player-textdraw é proporcional
    }
    else
    {
        // Player-textdraw não é proporcional
    }
    return 1;
}
```
## Funções Relacionadas

- [PlayerTextDrawCreate](PlayerTextDrawCreate): Crie um player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destrua um player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Dimensione o espaçamento do texto em um player-textdraw para uma proporção proporcional.
- [PlayerTextDrawColor](PlayerTextDrawColor): Defina a cor do texto em um player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Define a cor da caixa do player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Defina a cor de fundo de um player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Define o alinhamento de um player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): Defina a fonte de um player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Defina o tamanho da letra do texto em um player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Defina o tamanho de uma caixa de desenho de texto do jogador (ou área clicável para PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Alterna o contorno em um player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Defina a sombra em um player-textdraw.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Ative a caixa em um player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Define o texto de um player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Mostra um desenho de texto do jogador.
- [PlayerTextDrawHide](PlayerTextDrawHide): Ocultar um player-textdraw.
- [IsPlayerTextDrawVisible](IsPlayerTextDrawVisible): Verifica se um player-textdraw é mostrado para o jogador.
- [IsValidPlayerTextDraw](IsValidPlayerTextDraw): Verifica se um player-textdraw é válido.
