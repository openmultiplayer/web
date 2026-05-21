---
title: GetPlayerWeather
sidebar_label: GetPlayerWeather
description: "Obtenha o clima de um jogador."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha o clima de um jogador.

| Nome | Descrição |
| -------- | ------------------------------------------- |
| playerid | O ID do jogador para obter a previsão do tempo. |

## Retornos

Retorna o clima do jogador.

## Exemplos

```c
SetPlayerWeather(playerid, 8);

printf("Player weather: %d", GetPlayerWeather(playerid));
// A saída será 'Clima do jogador: 8'
```
## Funções Relacionadas

- [SetPlayerWeather](SetPlayerWeather): Defina o clima de um jogador.
- [SetWeather](SetWeather): Defina o clima mundial para todos os jogadores.

## Recursos relacionados

- [Tempo IDs](../resources/weatherid)
