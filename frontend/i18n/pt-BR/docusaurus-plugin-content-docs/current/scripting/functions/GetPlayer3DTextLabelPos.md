---
title: GetPlayer3DTextLabelPos
sidebar_label: GetPlayer3DTextLabelPos
description: "Obtém a posição do rótulo de texto 3D do jogador."
tags: ["player", "3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém a posição do rótulo de texto 3D do jogador.

| Nome | Descrição |
| ------------------- | ---------------------------------------------------------------------------- |
| playerid | O ID do jogador.                                                        |
| PlayerText3D:textid | O ID do rótulo de texto 3D do jogador para obter a posição.                 |
| &Float:x | Uma variável flutuante na qual armazenar a coordenada X, passada por referência. |
| &Float:y | Uma variável flutuante na qual armazenar a coordenada Y, passada por referência. |
| &Float:z | Uma variável flutuante na qual armazenar a coordenada Z, passada por referência. |

## Exemplos

```c
new PlayerText3D:playerTextId;
new Float:playerX, Float:playerY, Float:playerZ;

GetPlayerPos(playerid, playerX, playerY, playerZ);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, playerX, playerY, playerZ, 40.0);

new Float:x, Float:y, Float:z;
GetPlayer3DTextLabelPos(playerid, playerTextId, x, y, z);
```
## Funções Relacionadas

- [Get3DTextLabelPos](Get3DTextLabelPos): Obtém a posição do rótulo de texto 3D.
