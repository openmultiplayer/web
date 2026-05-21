---
title: GetPlayer3DTextLabelVirtualWorld
sidebar_label: GetPlayer3DTextLabelVirtualWorld
description: "Obtém o ID do mundo virtual do rótulo de texto 3D do jogador."
tags: ["player", "3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o ID do mundo virtual do rótulo de texto 3D do jogador.

| Nome | Descrição |
| ------------------- | -------------------------------------------------------------------- |
| playerid | O ID do jogador.                                                |
| PlayerText3D:textid | O ID do rótulo de texto 3D do jogador para obter a identificação do mundo virtual. |

## Retornos

Retorna o ID do mundo virtual do rótulo de texto 3D do jogador.

## Exemplos

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new worldid;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

worldid = GetPlayer3DTextLabelVirtualWorld(playerid, playerTextId);
```
## Notas

:::warning

Não há suporte de mundo virtual para rótulos de texto 3D do jogador.
Esta função apenas retorna o mundo virtual do jogador!

:::

## Funções Relacionadas

- [Get3DTextLabelVirtualWorld](Get3DTextLabelVirtualWorld): Obtém o ID do mundo virtual do rótulo de texto 3D.
