---
title: GetPlayerFacingAngle
sidebar_label: GetPlayerFacingAngle
description: Obtém o ângulo que um jogador está voltado (rotação Z).
tags: []
---

## Descrição

Obtém o ângulo que um jogador está voltado (rotação Z).

| Nome         | Descrição                                                  |
| ------------ | ---------------------------------------------------------- |
| playerid     | O jogador do qual você deseja obter o ângulo Z.            |
| & Float: ang | O Float para armazenar o ângulo Z, passado por referência. |

## Retorno

1: A função foi executada com sucesso.

0: Falha ao executar a função. Isso significa que o jogador não existe.

O ângulo do jogador é armazenado na variável especificada.

## Exemplos

```c
new Float:Angle, string[26];
GetPlayerFacingAngle(playerid, Angle);
format(string, sizeof(string), "O ângulo para qual você está voltado é: %0.2f", Angle);
SendClientMessage(playerid, 0xFFFFFFFF, string);
```

## Notas

:::tip

Os ângulos retornados quando dentro de um veículo raramente são corretos. Para obter o ângulo de visão correto dentro de um veículo, use GetVehicleZAngle.

:::

:::warning

Os ângulos são invertidos em GTA: SA; 90 graus seria o leste no mundo real, mas em GTA: SA 90 graus seria na verdade o oeste. Norte e Sul ainda são 0/360 e 180. Para converter isso, basta fazer 360 - ângulo.

:::

## Funções Relacionadas

- [GetVehicleZAngle](../functions/GetVehicleZAngle.md): Obtém o ângulo Z atual de um veículo.
- [SetPlayerFacingAngle](../functions/SetPlayerFacingAngle.md): Define o ângulo para qual um jogador está voltado (olhando).
