---
title: GetPlayer3DTextLabelColor
sidebar_label: GetPlayer3DTextLabelColor
description: "Obtém a cor do rótulo de texto 3D do jogador."
tags: ["player", "3dtextlabel"]
---


:::warning

Esta função está obsoleta. Consulte [GetPlayer3DTextLabelColour](GetPlayer3DTextLabelColour).

:::

## Descrição

Obtém a cor do rótulo de texto 3D do jogador.

| Nome | Descrição |
| ------------------- | --------------------------------------------------------- |
| playerid | O ID do jogador.                                     |
| PlayerText3D:textid | O ID do rótulo de texto 3D do jogador para obter a cor. |

## Retornos

Retorna a cor do rótulo do texto 3D do jogador.

## Exemplos

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new color;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

color = GetPlayer3DTextLabelColor(playerid, playerTextId);
// cor = 0x008080FF
```
## Funções Relacionadas

- [Get3DTextLabelColor](Get3DTextLabelColor): Obtém a cor do rótulo do texto 3D.
