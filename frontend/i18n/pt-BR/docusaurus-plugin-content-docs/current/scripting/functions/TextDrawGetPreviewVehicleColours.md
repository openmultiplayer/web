---
title: TextDrawGetPreviewVehicleColours
sidebar_label: TextDrawGetPreviewVehicleColours
description: "Obtém as cores do veículo de visualização de um textdraw de visualização 3D."
tags: ["textdraw"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém as cores do veículo de visualização de um textdraw de visualização 3D.

| Nome | Descrição |
| ----------- | ---------------------------------------------------------------- |
| Text:textid | O ID do textdraw para obter as cores do veículo.            |
| &colour1 | Uma variável na qual armazenar color1, passada por referência. |
| &colour2 | Uma variável na qual armazenar color2, passada por referência. |

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBoxColour(gMyTextdraw, 0x000000FF);
    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);
    TextDrawSetPreviewModel(gMyTextdraw, 411);
    TextDrawSetPreviewVehicleColours(gMyTextdraw, 6, 8);

    new colour1, colour2;
    TextDrawGetPreviewVehicleColours(gMyTextdraw, colour1, colour2);
    // colour1 = 6
    // colour2 = 8
    return 1;
}
```
## Funções Relacionadas

- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): Defina o modelo de visualização 3D de um textdraw.
- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): Defina a rotação de uma visualização de desenho de texto 3D.
- [TextDrawFont](TextDrawFont): Define a fonte de um textdraw.

## Callbacks Relacionadas

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Chamado quando um jogador clica em um textdraw.
