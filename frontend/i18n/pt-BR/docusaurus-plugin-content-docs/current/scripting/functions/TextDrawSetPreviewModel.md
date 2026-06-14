---
title: TextDrawSetPreviewModel
sidebar_label: TextDrawSetPreviewModel
description: "Defina o modelo para uma visualização do modelo textdraw."
tags: ["textdraw"]
---


## Descrição

Defina o modelo para uma visualização do modelo textdraw.

| Nome | Descrição |
| ----------- | ------------------------------------------------- |
| Text:textid | O ID do textdraw que exibirá a visualização 3D. |
| model | O modelo GTA SA ou SA:MP ID para exibição.          |

## Retornos

Esta função não retorna nenhum valor específico.

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

    TextDrawSetPreviewModel(gMyTextdraw, 411); // Exibir modelo 411 (Infernus)
    // TextDrawSetPreviewModel(gMyTextdraw, 1); Modelo de exibição // 1 (capa CJ)
    // TextDrawSetPreviewModel(gMyTextdraw, 18646); // Modelo de exibição 18646 (objeto de luz policial)

    // Você ainda precisa usar TextDrawShowForAll/TextDrawShowForPlayer para tornar o textdraw visível.
    return 1;
}
```
## Notas

:::tip

Use [TextDrawBackgroundColor](TextDrawBackgroundColor) para definir a cor de fundo atrás do modelo.

:::

:::warning

O textdraw MUST utiliza o tipo de fonte `TEXT_DRAW_FONT_MODEL_PREVIEW` para que esta função tenha efeito.

:::

## Funções Relacionadas

- [TextDrawGetPreviewModel](TextDrawGetPreviewModel): Obtém o modelo de visualização de um textdraw de visualização 3D.
- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): Defina a rotação de uma visualização de desenho de texto 3D.
- [TextDrawSetPreviewVehCol](TextDrawSetPreviewVehCol): Defina as cores de um veículo em uma visualização de desenho de texto 3D.
- [TextDrawFont](TextDrawFont): Define a fonte de um textdraw.
- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): Defina o modelo ID de uma visualização de desenho de texto do jogador 3D.

## Callbacks Relacionadas

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Chamado quando um jogador clica em um textdraw.
