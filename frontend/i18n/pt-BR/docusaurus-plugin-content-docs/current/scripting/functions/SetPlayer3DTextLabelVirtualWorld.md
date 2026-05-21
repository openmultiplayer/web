---
title: SetPlayer3DTextLabelVirtualWorld
sidebar_label: SetPlayer3DTextLabelVirtualWorld
description: "Define o ID do mundo virtual do rótulo de texto 3D do jogador."
tags: ["player", "3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Define o ID do mundo virtual do rótulo de texto 3D do jogador.

| Nome | Descrição |
| ------------------- | ----------------------------------------------------------------- |
| playerid | O ID do jogador.                                             |
| PlayerText3D:textid | O ID do rótulo de texto 3D do jogador para definir o ID do mundo virtual. |
| virtualWorld | O mundo virtual no qual você pode ver o Texto 3D |

## Exemplos

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

SetPlayer3DTextLabelVirtualWorld(playerid, playerTextId, 60);
```
## Notas

:::warning

Não há suporte de mundo virtual para rótulos de texto 3D do jogador.
Esta função não faz nada e está fundamentalmente quebrada!

:::

## Funções Relacionadas

- [GetPlayer3DTextLabelVirtualWorld](GetPlayer3DTextLabelVirtualWorld): Obtém o ID do mundo virtual do rótulo de texto 3D do jogador.
- [Set3DTextLabelVirtualWorld](Set3DTextLabelVirtualWorld): Define o ID do mundo virtual do rótulo de texto 3D.
