---
title: PlayerTextDrawSetShadow
sidebar_label: PlayerTextDrawSetShadow
description: "Adiciona uma sombra ao lado inferior direito do texto em um player-textdraw."
tags: ["player", "textdraw", "playertextdraw"]
---


## Descrição

Adiciona uma sombra ao lado inferior direito do texto em um player-textdraw. A fonte sombreada corresponde à fonte do texto.

| Nome | Descrição |
| ----------------- | --------------------------------------------------------------------- |
| playerid | O ID do jogador cujo player-textdraw definir o tamanho da sombra. |
| PlayerText:textid | O ID do player-textdraw para alterar a sombra de |
| shadowSize | O tamanho da sombra. 0 ocultará a sombra.                       |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o player-textdraw não existe.

## Exemplos

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server!");
    PlayerTextDrawSetShadow(playerid, welcomeText[playerid], 1);

    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```
## Notas

:::tip

A sombra pode ser cortada pela área da caixa se o tamanho for muito grande para a área.

:::

## Funções Relacionadas

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Crie um player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destrua um jogador-textdraw.
- [PlayerTextDrawGetShadow](PlayerTextDrawGetShadow): Obtenha o tamanho da sombra em um player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Defina a cor do texto em um player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Define a cor da caixa do player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Defina a cor de fundo de um player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Define o alinhamento de um player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): Defina a fonte de um player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Defina o tamanho da letra do texto em um player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Defina o tamanho de uma caixa de desenho de texto do jogador (ou área clicável para PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Alterna o contorno em um player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Dimensione o espaçamento do texto em um player-textdraw para uma proporção proporcional.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Ative a caixa em um player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Define o texto de um player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Mostra um desenho de texto do jogador.
- [PlayerTextDrawHide](PlayerTextDrawHide): Ocultar um player-textdraw.
