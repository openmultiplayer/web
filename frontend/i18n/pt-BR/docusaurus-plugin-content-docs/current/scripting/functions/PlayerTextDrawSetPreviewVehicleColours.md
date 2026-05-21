---
title: PlayerTextDrawSetPreviewVehicleColours
sidebar_label: PlayerTextDrawSetPreviewVehicleColours
description: "Defina a cor de um veículo em uma visualização do modelo player-textdraw (se um veículo for mostrado)."
tags: ["player", "textdraw", "playertextdraw"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Defina a cor de um veículo em uma visualização do modelo player-textdraw (se um veículo for mostrado).

| Nome | Descrição |
| ----------------- | ----------------------------------------------------- |
| playerid | O ID do jogador cujo player-textdraw será alterado. |
| PlayerText:textid | O ID do player-textdraw do jogador a ser alterado.     |
| colour1 | A cor para definir a cor primária do veículo.    |
| colour2 | A cor para definir a cor secundária do veículo.  |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new PlayerText:gTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gTextDraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, gTextDraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, gTextDraw[playerid], true);
    PlayerTextDrawBoxColour(playerid, gTextDraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, gTextDraw[playerid], 40.0, 40.0);

    PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 411);
    PlayerTextDrawSetPreviewVehicleColours(playerid, gTextDraw[playerid], 3, 6);

    PlayerTextDrawShow(playerid, gTextDraw[playerid]);
    return 1;
}
```
## Notas

:::warning

O textdraw MUST utiliza a fonte `TEXT_DRAW_FONT_MODEL_PREVIEW` e mostra um veículo para que esta função tenha efeito.

:::

## Funções Relacionadas

- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): Defina o modelo ID de uma visualização de desenho de texto do jogador 3D.
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): Defina a rotação de uma visualização de desenho de texto do jogador 3D.
- [PlayerTextDrawFont](PlayerTextDrawFont): Defina a fonte de um player-textdraw.

## Callbacks Relacionadas

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Chamado quando um jogador clica em um player-textdraw.
