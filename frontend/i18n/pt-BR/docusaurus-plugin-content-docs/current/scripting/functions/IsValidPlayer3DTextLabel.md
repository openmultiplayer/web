---
title: IsValidPlayer3DTextLabel
sidebar_label: IsValidPlayer3DTextLabel
description: "Verifica se o rótulo de texto 3D de um jogador é válido."
tags: ["player", "3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se o rótulo de texto 3D de um jogador é válido.

| Nome | Descrição |
| ------------------- | ---------------------------------------------- |
| playerid | O ID do jogador.                          |
| PlayerText3D:textid | O ID da etiqueta de texto 3D do jogador a ser verificado. |

## Retornos

Esta função retorna **true** se o rótulo de texto 3D do jogador for válido ou **false** se não for.

## Exemplos

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

if (IsValidPlayer3DTextLabel(playerid, playerTextId))
{
    // Faça alguma coisa
}
```
## Funções Relacionadas

- [CreatePlayer3DTextLabel](CreatePlayer3DTextLabel): Cria um rótulo de texto 3D apenas para um jogador específico.
- [IsValid3DTextLabel](IsValid3DTextLabel): Verifica se uma etiqueta de texto 3D é válida.
