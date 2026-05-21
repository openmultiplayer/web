---
title: PlayerTextDrawSetPreviewModel
sidebar_label: PlayerTextDrawSetPreviewModel
description: "Define um sprite de visualização 3D do textdraw do jogador de um modelo especificado ID."
tags: ["player", "textdraw", "playertextdraw"]
---


## Descrição

Define um sprite de visualização 3D do textdraw do jogador de um modelo especificado ID.

| Nome | Descrição |
| ----------------- | ------------------------------------------------- |
| playerid | O jogador PlayerTextDraw ID.                     |
| PlayerText:textid | O ID do textdraw que exibirá a visualização 3D. |
| model | O modelo GTA SA ou SA:MP ID para exibição.          |

## Retornos

**true** – A função foi executada com sucesso. Se um modelo inválido for aprovado, 'sucesso' será relatado, mas o modelo aparecerá como um ponto de interrogação amarelo/preto.

**false** - Falha na execução da função. Player e/ou textdraw não existem.

## Exemplos

```c
new PlayerText:gTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gTextDraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, gTextDraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, gTextDraw[playerid], true);
    PlayerTextDrawBoxColor(playerid, gTextDraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, gTextDraw[playerid], 40.0, 40.0);

    PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 411); // Mostre um Inferno (modelo 411)
    //PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 0); //Exibir modelo 0 (pele CJ)
    //PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 18646); // Modelo de exibição 18646 (objeto de luz policial)

    PlayerTextDrawShow(playerid, gTextDraw[playerid]);
    return 1;
}
```
## Notas

:::warning

O textdraw MUST utiliza o tipo de fonte `TEXT_DRAW_FONT_MODEL_PREVIEW` para que esta função tenha efeito.

:::

## Funções Relacionadas

- [PlayerTextDrawGetPreviewModel](PlayerTextDrawGetPreviewModel): Obtém o modelo de visualização de um player-textdraw de visualização 3D.
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): Defina a rotação de uma visualização de desenho de texto do jogador 3D.
- [PlayerTextDrawSetPreviewVehCol](PlayerTextDrawSetPreviewVehCol): Defina as cores de um veículo em uma visualização de desenho de texto do jogador 3D.
- [PlayerTextDrawFont](PlayerTextDrawFont): Defina a fonte de um player-textdraw.

## Callbacks Relacionadas

- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Chamado quando um jogador clica em um player-textdraw.
