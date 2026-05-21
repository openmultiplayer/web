---
title: floatcos
sidebar_label: floatcos
description: "Obtenha o cosseno de um determinado ângulo."
tags: ["math", "floating-point"]
---


<LowercaseNote />

## Descrição

Obtenha o cosseno de um determinado ângulo. O ângulo de entrada pode estar em radianos, graus ou graus.

| Nome | Descrição |
| -------------- | --------------------------------------------------------------------------------------------------- |
| Float:value | O ângulo a partir do qual obter o cosseno.                                                             |
| anglemode:mode | O [modo de ângulo](../resources/anglemodes) a ser usado, dependendo do valor inserido. (padrão: radiano) |

## Retornos

O cosseno do valor inserido.

## Exemplos

```c
public OnGameModeInit()
{
    printf("The cosine from 90° is %.0f", floatcos(90.0, degrees));
    // Saída: 0
    return 1;
}
```
## Notas

:::warning

GTA/SA-MP usam graus para ângulos na maioria das circunstâncias, por exemplo [GetPlayerFacingAngle](GetPlayerFacingAngle). Portanto, é mais provável que você queira usar o modo de ângulo 'graus', não radianos. Observe também que os ângulos em GTA são no sentido anti-horário; 270° é Leste e 90° é Oeste. O Sul ainda é 180° e o Norte ainda é 0°/360°.

:::

## Funções Relacionadas

- [floatsin](floatsin): Obtenha o seno de um ângulo específico.
- [floattan](floattan): Obtenha a tangente de um ângulo específico.

## Recursos relacionados

- [Modos de Ângulo](../resources/anglemodes): Constantes de unidade SI para medição de ângulos.
