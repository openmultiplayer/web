---
title: GetPlayers
sidebar_label: GetPlayers
description: "Obtém uma variável de array do IDs dos jogadores atuais no servidor."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém uma variável de array do IDs dos jogadores atuais no servidor.

| Nome | Descrição |
| --------- | ----------------------------------------------------------------- |
| players[] | Uma matriz na qual armazenar o jogador IDs, passado por referência. |
| size | O tamanho da matriz.                                            |

## Retornos

A função retorna o número de jogadores armazenados no array.

## Exemplos

Suponha que haja 5 jogadores no servidor:

```c
new players[MAX_PLAYERS];
new length;

length = GetPlayers(players, sizeof(players));
// O array `players` agora contém IDs de jogadores online: {0, 1, 2, 3, 4}
// O valor da variável `comprimento` é 5
```
## Funções Relacionadas

- [GetVehicles](GetVehicles): Obtém uma variável array do IDs dos veículos criados no servidor.
- [GetActors](GetActors): Obtém uma variável array do IDs dos atores criados no servidor.
