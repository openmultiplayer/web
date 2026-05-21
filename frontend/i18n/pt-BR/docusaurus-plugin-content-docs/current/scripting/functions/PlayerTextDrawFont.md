---
title: PlayerTextDrawFont
sidebar_label: PlayerTextDrawFont
description: "Altere a fonte de um player-textdraw."
tags: ["player", "textdraw", "playertextdraw"]
---


## Descrição

Altere a fonte de um player-textdraw.

| Nome | Descrição |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| playerid | O ID do jogador cujo player-textdraw deseja alterar a fonte de |
| PlayerText:textid | O ID do player-textdraw para alterar a fonte de |
| TEXT_DRAW_FONT:font | Existem quatro estilos de fonte, conforme mostrado abaixo. Um valor de fonte maior que 3 não é exibido e qualquer valor maior que 16 trava o cliente. |

Estilos disponíveis:
![Estilos disponíveis](https://assets.open.mp/assets/images/textdraws/Textdraw_font_styles.png)

Fontes disponíveis:
![Fontes disponíveis](https://assets.open.mp/assets/images/textdraws/Textdraw_Fonts.png)

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
/*
    TEXT_DRAW_FONT_0
    TEXT_DRAW_FONT_1
    TEXT_DRAW_FONT_2
    TEXT_DRAW_FONT_3
    TEXT_DRAW_FONT_SPRITE_DRAW
    TEXT_DRAW_FONT_MODEL_PREVIEW
*/

new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Primeiro, crie o textdraw
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server!");

    // Defina a fonte do player-textdraw 'welcomeText[playerid]' como 2.
    PlayerTextDrawFont(playerid, welcomeText[playerid], TEXT_DRAW_FONT_2);

    // Mostrar 'welcomeText[playerid]' ao jogador
    PlayerTextDrawShow(playerid, welcomeText[playerid]);

    return 1;
}
```
## Funções Relacionadas

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Crie um player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destrua um player-textdraw.
- [PlayerTextDrawGetFont](PlayerTextDrawGetFont): Obtém a fonte do texto de um player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Defina a cor do texto em um player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Define a cor da caixa do player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Defina a cor de fundo de um player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Define o alinhamento de um player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Defina o tamanho da letra do texto em um player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Defina o tamanho de uma caixa de desenho de texto do jogador (ou área clicável para PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Alterna o contorno em um player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Defina a sombra em um player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Dimensione o espaçamento do texto em um player-textdraw para uma proporção proporcional.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Ative a caixa em um player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Define o texto de um player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Mostra um desenho de texto do jogador.
- [PlayerTextDrawHide](PlayerTextDrawHide): Ocultar um player-textdraw.
