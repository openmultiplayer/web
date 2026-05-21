---
title: PlayerTextDrawGetPreviewVehCol
sidebar_label: PlayerTextDrawGetPreviewVehCol
description: "Obtém as cores do veículo de visualização de um player-textdraw de visualização 3D."
tags: ["player", "textdraw", "playertextdraw"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém as cores do veículo de visualização de um player-textdraw de visualização 3D.

| Nome | Descrição |
| ----------------- | ---------------------------------------------------------------- |
| playerid | O ID do jogador.                                            |
| PlayerText:textid | O ID do player-textdraw para obter as cores do veículo.      |
| &colour1 | Uma variável na qual armazenar color1, passada por referência. |
| &colour2 | Uma variável na qual armazenar color2, passada por referência. |

## Exemplos

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playeird, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, pTextdraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, pTextdraw[playerid], true);
    PlayerTextDrawBoxColor(playerid, pTextdraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, pTextdraw[playerid], 40.0, 40.0);
    PlayerTextDrawSetPreviewModel(playerid, pTextdraw[playerid], 411);
    PlayerTextDrawSetPreviewVehCol(playerid, pTextdraw[playerid], 6, 8);

    new colour1, colour2;
    PlayerTextDrawGetPreviewVehCol(playerid, pTextdraw[playerid], colour1, colour2);
    // cor1 = 6
    // cor2 = 8
    return 1;
}
```
## Funções Relacionadas

- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): Defina o modelo ID de uma visualização de desenho de texto do jogador 3D.
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): Defina a rotação de uma visualização do desenho de texto do jogador 3D.
- [PlayerTextDrawFont](PlayerTextDrawFont): Defina a fonte de um player-textdraw.

## Callbacks Relacionadas

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Chamado quando um jogador clica em um player-textdraw.
