---
title: GetPlayer3DTextLabelDrawDistance
sidebar_label: GetPlayer3DTextLabelDrawDistance
description: "Obtém a distância de desenho do rótulo de texto 3D do jogador."
tags: ["player", "3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

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
new Float:x, Float:y, Float:z;
new Float:drawDistance;

GetPlayerPos(playerid, x, y, z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, x, y, z, 40.0);

drawDistance = GetPlayer3DTextLabelDrawDistance(playerid, playerTextId);
// distância de desenho = 40,0
```
## Funções Relacionadas

- [SetPlayer3DTextLabelDrawDistance](SetPlayer3DTextLabelDrawDistance): Define a distância de desenho do rótulo de texto 3D do jogador.
- [Get3DTextLabelDrawDistance](Get3DTextLabelDrawDistance): Obtém a distância de desenho do rótulo de texto 3D.
