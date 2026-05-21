---
title: TextDrawSetPreviewRot
sidebar_label: TextDrawSetPreviewRot
description: "Define a rotação e o zoom de um textdraw de visualização de modelo 3D."
tags: ["textdraw"]
---


## Descrição

Define a rotação e o zoom de um textdraw de visualização de modelo 3D.

| Nome | Descrição |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Text:textid | O ID do textdraw a ser alterado.                                                                                        |
| Float:rotationX | O valor de rotação X.                                                                                                    |
| Float:rotationY | O valor de rotação Y.                                                                                                    |
| Float:rotationZ | O valor de rotação Z.                                                                                                    |
| Float:zoom | O valor de zoom, valor padrão 1.0, valores menores aproximam a câmera e valores maiores afastam a câmera. |

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
    TextDrawSetPreviewModel(gMyTextdraw, 411);
    TextDrawSetPreviewRot(gMyTextdraw, -10.0, 0.0, -20.0, 1.0);

    // Você ainda precisa usar TextDrawShowForAll/TextDrawShowForPlayer para tornar o textdraw visível.
    return 1;
}
```
## Notas

:::warning

O textdraw MUST utiliza o tipo de fonte `TEXT_DRAW_FONT_MODEL_PREVIEW` e já possui um modelo definido para que esta função tenha efeito.

:::

## Funções Relacionadas

- [TextDrawGetPreviewRot](TextDrawGetPreviewRot): Obtém a rotação e o zoom de um desenho de texto de visualização de modelo 3D.
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): Defina a rotação de uma visualização de desenho de texto do jogador 3D.
- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): Defina o modelo de visualização 3D de um textdraw.
- [TextDrawSetPreviewVehCol](TextDrawSetPreviewVehCol): Defina as cores de um veículo em uma visualização de desenho de texto 3D.
- [TextDrawFont](TextDrawFont): Define a fonte de um textdraw.

## Callbacks Relacionadas

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Chamado quando um jogador clica em um textdraw.
