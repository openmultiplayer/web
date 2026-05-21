---
title: GetPlayer3DTextLabelLOS
sidebar_label: GetPlayer3DTextLabelLOS
description: "Obtém a linha de visão do rótulo de texto 3D do jogador."
tags: ["player", "3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém a linha de visão do rótulo de texto 3D do jogador.

| Nome | Descrição |
| ------------------- | ----------------------------------------------------------------- |
| playerid | O ID do jogador.                                             |
| PlayerText3D:textid | O ID do rótulo de texto 3D do jogador para obter a linha de visão. |

## Retornos

Retorna a linha de visão do rótulo de texto 3D do jogador como booleano (false/true).

## Exemplos

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new bool:testLOS;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0, INVALID_PLAYER_ID, INVALID_VEHICLE_ID, true);

testLOS = GetPlayer3DTextLabelLOS(playerid, playerTextId);
// testeLOS = verdadeiro
```
## Funções Relacionadas

- [SetPlayer3DTextLabelLOS](SetPlayer3DTextLabelLOS): Define a linha de visão do rótulo de texto 3D do jogador.
- [Get3DTextLabelLOS](Get3DTextLabelLOS): Obtém a linha de visão do rótulo de texto 3D.
