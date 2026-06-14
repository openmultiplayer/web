---
title: GetPlayer3DTextLabelColour
sidebar_label: GetPlayer3DTextLabelColour
description: "Obtém a cor do rótulo de texto 3D do jogador."
tags: ["player", "3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém a cor do rótulo de texto 3D do jogador.

| Nome | Descrição |
| ------------------- | ---------------------------------------------------------- |
| playerid | O ID do jogador.                                      |
| PlayerText3D:textid | O ID do rótulo de texto 3D do jogador para obter a cor. |

## Retornos

Retorna a cor do rótulo do texto 3D do jogador.

## Exemplos

```c
new PlayerText3D:playerTextId;
new Float:x, Float:y, Float:z;
new colour;

GetPlayerPos(playerid, x, y, z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, x, y, z, 40.0);

colour = GetPlayer3DTextLabelColour(playerid, playerTextId);
// cor = 0x008080FF
```
## Funções Relacionadas

- [Get3DTextLabelColour](Get3DTextLabelColour): Obtém a cor do rótulo do texto 3D.
