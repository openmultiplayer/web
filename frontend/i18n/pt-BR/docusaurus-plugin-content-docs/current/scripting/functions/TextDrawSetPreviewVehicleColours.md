---
title: TextDrawSetPreviewVehicleColours
sidebar_label: TextDrawSetPreviewVehicleColours
description: "Se um modelo de veículo for usado em um textdraw de visualização 3D, isso definirá os dois valores de cores para esse veículo."
tags: ["textdraw"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Se um modelo de veículo for usado em um textdraw de visualização 3D, isso definirá os dois valores de cores para esse veículo.

| Nome | Descrição |
| ----------- | ------------------------------------------------------------------ |
| Text:textid | O ID do textdraw definido para exibir uma visualização do modelo de veículo 3D. |
| colour1 | A cor primária ID para definir o veículo.                        |
| colour2 | A cor secundária ID para definir o veículo.                      |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(gMyTextdraw, 1);
    TextDrawBoxColor(gMyTextdraw, 0x000000FF);
    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);
    TextDrawSetPreviewModel(gMyTextdraw, 411); // Exibir modelo 411 (Infernus)
    TextDrawSetPreviewVehicleColours(gMyTextdraw, 6, 6); // Defina o Infernus para ter a cor 6 (Amarelo)

    // Você ainda precisa usar TextDrawShowForAll/TextDrawShowForPlayer para tornar o textdraw visível.
    return 1;
}
```
## Notas

:::warning

O textdraw MUST utiliza o tipo de fonte `TEXT_DRAW_FONT_MODEL_PREVIEW` para que esta função tenha efeito.

:::

## Funções Relacionadas

- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): Defina o modelo de visualização 3D de um textdraw.
- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): Defina a rotação de uma visualização de desenho de texto 3D.
- [TextDrawFont](TextDrawFont): Define a fonte de um textdraw.

## Callbacks Relacionadas

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Chamado quando um jogador clica em um textdraw.
