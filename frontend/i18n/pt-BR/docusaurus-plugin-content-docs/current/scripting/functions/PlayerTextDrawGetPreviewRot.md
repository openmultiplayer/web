---
title: PlayerTextDrawGetPreviewRot
sidebar_label: PlayerTextDrawGetPreviewRot
description: "Obtém a rotação e o zoom de um player-textdraw de visualização de modelo 3D."
tags: ["player", "textdraw", "playertextdraw"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém a rotação e o zoom de um player-textdraw de visualização de modelo 3D.

| Nome | Descrição |
| ----------------- | ------------------------------------------------------------------------------- |
| playerid | O ID do jogador.                                                           |
| PlayerText:textid | O ID do player-textdraw para obter rotação e zoom.                      |
| &Float:rotationX | Uma variável flutuante na qual armazenar a coordenada de rotaçãoX, passada por referência. |
| &Float:rotationY | Uma variável flutuante na qual armazenar a coordenada de rotaçãoY, passada por referência. |
| &Float:rotationZ | Uma variável flutuante na qual armazenar a coordenada de rotaçãoZ, passada por referência. |
| &Float:zoom | Uma variável flutuante na qual armazenar o valor de zoom, passada por referência.           |

## Exemplos

```c
new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, gMyTextdraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], 1);
    PlayerTextDrawBoxColor(playerid, gMyTextdraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, gMyTextdraw[playerid], 40.0, 40.0);
    PlayerTextDrawSetPreviewModel(playerid, gMyTextdraw[playerid], 411);
    PlayerTextDrawSetPreviewRot(playerid, gMyTextdraw[playerid], -10.0, 0.0, -20.0, 1.0);
    PlayerTextDrawShow(playerid, gMyTextdraw[playerid]);

    new Float:rotationX, Float:rotationY, Float:rotationZ, Float:zoom;
    PlayerTextDrawGetPreviewRot(playerid, gMyTextdraw[playerid], rotationX, rotationY, rotationZ, zoom);
    // rotaçãoX = -10,0
    // rotaçãoY = 0,0
    // rotaçãoZ = -20,0
    // ampliação = 1,0
    return 1;
}
```
## Funções Relacionadas

- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): Defina a rotação de uma visualização de desenho de texto do jogador 3D.
- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): Defina o modelo de visualização 3D de um textdraw do jogador.
- [PlayerTextDrawSetPreviewVehCol](PlayerTextDrawSetPreviewVehCol): Defina as cores de um veículo em uma visualização de desenho de texto do jogador 3D.

## Callbacks Relacionadas

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Chamado quando um jogador clica em um textdraw.
