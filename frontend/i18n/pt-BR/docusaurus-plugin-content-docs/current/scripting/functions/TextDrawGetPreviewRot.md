---
title: TextDrawGetPreviewRot
sidebar_label: TextDrawGetPreviewRot
description: "Obtém a rotação e o zoom de um textdraw de visualização de modelo 3D."
tags: ["textdraw"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém a rotação e o zoom de um textdraw de visualização de modelo 3D.

| Nome | Descrição |
| ---------------- | ------------------------------------------------------------------------------- |
| Text:textid | O ID do textdraw para obter rotação e zoom.                             |
| &Float:rotationX | Uma variável flutuante na qual armazenar a coordenada de rotaçãoX, passada por referência. |
| &Float:rotationY | Uma variável flutuante na qual armazenar a coordenada de rotaçãoY, passada por referência. |
| &Float:rotationZ | Uma variável flutuante na qual armazenar a coordenada de rotaçãoZ, passada por referência. |
| &Float:zoom | Uma variável flutuante na qual armazenar o valor de zoom, passada por referência.           |

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBoxColor(gMyTextdraw, 0x000000FF);
    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);
    TextDrawSetPreviewModel(gMyTextdraw, 411);
    TextDrawSetPreviewRot(gMyTextdraw, -10.0, 0.0, -20.0, 1.0);

    new Float:rotationX, Float:rotationY, Float:rotationZ, Float:zoom;
    TextDrawGetPreviewRot(gMyTextdraw, rotationX, rotationY, rotationZ, zoom);
    // rotationX = -10.0
    // rotationY = 0.0
    // rotationZ = -20.0
    // zoom = 1.0
    return 1;
}
```
## Funções Relacionadas

- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): Define a rotação e o zoom de um desenho de texto de visualização de modelo 3D.
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): Defina a rotação de uma visualização do desenho de texto do jogador 3D.
- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): Defina o modelo de visualização 3D de um textdraw.
- [TextDrawSetPreviewVehCol](TextDrawSetPreviewVehCol): Defina as cores de um veículo em uma visualização de desenho de texto 3D.
- [TextDrawFont](TextDrawFont): Define a fonte de um textdraw.

## Callbacks Relacionadas

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Chamado quando um jogador clica em um textdraw.
