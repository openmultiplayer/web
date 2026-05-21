---
title: random
sidebar_label: random
description: "Obtenha um número pseudo-aleatório."
tags: ["core"]
---


<LowercaseNote />

## Descrição

Obtenha um número pseudo-aleatório.

| Nome | Descrição |
| ---- | -------------------------------------------------------------------------- |
| max | O intervalo de valores (de 0 a este valor menos um) que pode ser retornado. |

## Retornos

Um número aleatório variando de 0 a no máximo 1.

## Exemplos

```c
new value = random(5);

// 'value' pode ser 0, 1, 2, 3 ou 4 (5 valores possíveis)
new Float:RandomSpawn[][4] =
{
    // Posições, (X, Y, Z e ângulo de face)
    {-2796.9854, 1224.8180, 20.5429, 192.0335},
    {-2454.2170, 503.8759, 30.0790, 267.2932},
    {-2669.7322, -6.0874, 6.1328, 89.8853}
};


public OnPlayerSpawn(playerid)
{
    new rand = random(sizeof(RandomSpawn));

    // SetPlayerPos para os dados de geração aleatória
    SetPlayerPos(playerid, RandomSpawn[rand][0], RandomSpawn[rand][1], RandomSpawn[rand][2]);

    // SetPlayerFacingAngle para os dados de ângulo de face aleatório
    SetPlayerFacingAngle(playerid, RandomSpawn[rand][3]);
    return 1;
}
```
## Notas

:::tip

Usar um valor menor que 1 fornece valores estranhos.

:::
