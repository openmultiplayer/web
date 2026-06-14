---
title: floatsin
sidebar_label: floatsin
description: "Obtenha o seno de um determinado ângulo."
tags: ["math", "floating-point"]
---


<LowercaseNote />

## Descrição

Obtenha o seno de um determinado ângulo. O ângulo de entrada pode estar em radianos, graus ou graus.

| Nome | Descrição |
| -------------- | --------------------------------------------------------------------------------------------------- |
| Float:value | O ângulo a partir do qual obter o seno.                                                               |
| anglemode:mode | O [modo de ângulo](../resources/anglemodes) a ser usado, dependendo do valor inserido. (padrão: radiano) |

## Retornos

O seno do valor inserido.

## Exemplos

```c
GetPosInFrontOfPlayer(playerid, Float:distance, &Float:x, &Float:y, &Float:z)
{
    if (GetPlayerPos(playerid, x, y, z)) // esta função retorna 0 se o jogador não estiver conectado
    {
        new Float:z_angle;
        GetPlayerFacingAngle(playerid, z_angle);

        x += distance * floatsin(-z_angle, degrees); // ângulos em GTA vão no sentido anti-horário, então precisamos reverter o ângulo recuperado
        y += distance * floatcos(-z_angle, degrees);

        return 1; // retornar 1 em caso de sucesso, as coordenadas reais serão retornadas por referência
    }
    return 0; // retorne 0 se o jogador não estiver conectado
}
```
## Notas

:::warning

GTA/SA-MP usam graus para ângulos na maioria das circunstâncias, por exemplo [GetPlayerFacingAngle](GetPlayerFacingAngle). Portanto, é mais provável que você queira usar o modo de ângulo 'graus', não radianos. Observe também que os ângulos em GTA são no sentido anti-horário; 270° é Leste e 90° é Oeste. O Sul ainda é 180° e o Norte ainda é 0°/360°.

:::

## Funções Relacionadas

- [floattan](floattan): Obtenha a tangente de um ângulo específico.
- [floatcos](floatcos): Obtenha o cosseno de um ângulo específico.

## Recursos relacionados

- [Modos de Ângulo](../resources/anglemodes): Constantes de unidade SI para medição de ângulos.
