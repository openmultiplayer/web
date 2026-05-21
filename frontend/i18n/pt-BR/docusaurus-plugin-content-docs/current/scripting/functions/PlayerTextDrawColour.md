---
title: PlayerTextDrawColour
sidebar_label: PlayerTextDrawColour
description: "Define a cor do texto de um player-textdraw."
tags: ["player", "textdraw", "playertextdraw"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Define a cor do texto de um player-textdraw

| Nome | Descrição |
| ----------------- | -------------------------------------------------------- |
| playerid | O ID do jogador que está textdraw para definir a cor de |
| PlayerText:textid | O TextDraw a ser alterado.                                  |
| textColour | A cor em formato hexadecimal.                        |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Example Text");
    PlayerTextDrawColour(playerid, pTextdraw[playerid], 0xFF0000FF); // Texto vermelho

    PlayerTextDrawShow(playerid, pTextdraw[playerid]);
    return 1;
}
```
## Notas

:::tip

- Você também pode usar cores do Gametext em textdraws. (por exemplo, `~r~` `~g~` `~b~`)
- O textdraw deve ser mostrado novamente ao jogador para atualizar a cor.

:::

## Funções Relacionadas

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Crie um player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Destrua um player-textdraw.
- [PlayerTextDrawBoxColour](PlayerTextDrawBoxColour): Define a cor da caixa do player-textdraw.
- [PlayerTextDrawBackgroundColour](PlayerTextDrawBackgroundColour): Defina a cor de fundo de um player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Define o alinhamento de um player-textdraw.
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
