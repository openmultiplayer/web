---
title: PlayerTextDrawSetPreviewRot
sidebar_label: PlayerTextDrawSetPreviewRot
description: "Define a rotação e o zoom de um player-textdraw de visualização de modelo 3D."
tags: ["player", "textdraw", "playertextdraw"]
---


## Descrição

Define a rotação e o zoom de um player-textdraw de visualização de modelo 3D.

| Nome | Descrição |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------ |
| playerid | O ID do jogador cujo player-textdraw será alterado.                                                                    |
| PlayerText:textid | O ID do player-textdraw a ser alterado.                                                                                 |
| Float:rotX | O valor de rotação X.                                                                                                    |
| Float:rotY | O valor de rotação Y.                                                                                                    |
| Float:rotZ | O valor de rotação Z.                                                                                                    |
| Float:zoom | O valor de zoom, valor padrão 1.0, valores menores aproximam a câmera e valores maiores afastam a câmera. |

## Retornos

Esta função não retorna nenhum valor específico.

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
    return 1;
}
```
## Notas

:::warning

O textdraw MUST utiliza o tipo de fonte `TEXT_DRAW_FONT_MODEL_PREVIEW` e já possui um modelo definido para que esta função tenha efeito.

:::

## Funções Relacionadas

- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): Defina a rotação de uma visualização de desenho de texto 3D.
- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): Defina o modelo ID de uma visualização de desenho de texto do jogador 3D.
- [PlayerTextDrawSetPreviewVehCol](PlayerTextDrawSetPreviewVehCol): Defina as cores de um veículo em uma visualização de desenho de texto do jogador 3D.
- [PlayerTextDrawFont](PlayerTextDrawFont): Defina a fonte de um player-textdraw.

## Callbacks Relacionadas

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Chamado quando um jogador clica em um player-textdraw.
