---
title: GetPlayerColor
sidebar_label: GetPlayerColor
description: "Obtém a cor do nome do jogador e do marcador de radar."
tags: ["player"]
---


## Descrição

Obtém a cor do nome do jogador e do marcador de radar. Só funciona após SetPlayerColor.

| Nome | Descrição |
| -------- | ----------------------------------------- |
| playerid | O ID do jogador cuja cor deseja obter. |

## Retornos

A cor do jogador. 0 se nenhuma cor estiver definida ou o jogador não estiver conectado.

## Exemplos

```c
SendClientMessage(playerid, GetPlayerColor(playerid), "This message is in your color :)");

new output[144];
format(output, sizeof(output), "You can also use the player's color for {%06x}color embedding!", GetPlayerColor(playerid) >>> 8);
SendClientMessage(playerid, -1, output);
// irá exibir uma mensagem em branco, com incorporação de cores na cor do jogador
```
## Notas

:::warning

GetPlayerColor não retornará nada (0), a menos que SetPlayerColor tenha sido usado primeiro. Clique em [HERE](../../tutorials/colorfix) para obter uma correção.

:::

## Funções Relacionadas

- [SetPlayerColor](SetPlayerColor): Defina a cor de um jogador.
- [ChangeVehicleColor](ChangeVehicleColor): Defina a cor de um veículo.
