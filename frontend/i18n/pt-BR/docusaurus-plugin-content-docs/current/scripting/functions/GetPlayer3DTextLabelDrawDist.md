---
title: GetPlayer3DTextLabelDrawDist
sidebar_label: GetPlayer3DTextLabelDrawDist
description: "Obtém a distância de desenho do rótulo de texto 3D do jogador."
tags: ["player", "3dtextlabel"]
---


:::warning

Esta função está obsoleta. Consulte [GetPlayer3DTextLabelDrawDistance](GetPlayer3DTextLabelDrawDistance).

:::

## Descrição

Obtém a distância de desenho do rótulo de texto 3D do jogador.

| Nome | Descrição |
| ------------------- | ----------------------------------------------------------------- |
| playerid | O ID do jogador.                                             |
| PlayerText3D:textid | O ID do rótulo de texto 3D do jogador para obter a distância de visão. |

## Retornos

Retorna a distância de desenho do rótulo de texto 3D do jogador como flutuante.

## Exemplos

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new Float:drawDistance;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

drawDistance = GetPlayer3DTextLabelDrawDist(playerid, playerTextId);
// distância de desenho = 40,0
```
## Notas

:::tip

Esta função é apenas o nome abreviado de [GetPlayer3DTextLabelDrawDistance](GetPlayer3DTextLabelDrawDistance).

:::

## Funções Relacionadas

- [SetPlayer3DTextLabelDrawDistance](SetPlayer3DTextLabelDrawDistance): Define a distância de desenho do rótulo de texto 3D do jogador.
- [Get3DTextLabelDrawDistance](Get3DTextLabelDrawDistance): Obtém a distância de desenho do rótulo de texto 3D.
