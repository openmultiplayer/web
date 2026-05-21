---
title: SetPlayerColor
sidebar_label: SetPlayerColor
description: "Defina a cor do crachá e do marcador de um jogador (ponto de radar)."
tags: ["player"]
---


## Descrição

Defina a cor do crachá e do marcador de um jogador (ponto de radar).

| Nome | Descrição |
| -------- | ---------------------------------------- |
| playerid | O ID do jogador cuja cor será definida. |
| colour | A cor a ser definida. Suporta valores alfa. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
// Vermelho, usando notação hexadecimal:
SetPlayerColor(playerid, 0xFF0000FF);

// Vermelho, usando notação decimal:
SetPlayerColor(playerid, 4278190335);
```
## Notas

:::tip

- Esta função mudará a cor do jogador para todos, mesmo que a cor do jogador tenha sido alterada com SetPlayerMarkerForPlayer para qualquer outro jogador.
- Se usado em OnPlayerConnect, o jogador afetado não verá a cor no menu TAB.

:::

## Funções Relacionadas

- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): Define o marcador de um jogador.
- [GetPlayerColor](GetPlayerColor): Verifique a cor de um jogador.
- [ChangeVehicleColor](ChangeVehicleColor): Defina a cor de um veículo.

## Recursos relacionados

- [Lista de cores](../resources/colorslist)
