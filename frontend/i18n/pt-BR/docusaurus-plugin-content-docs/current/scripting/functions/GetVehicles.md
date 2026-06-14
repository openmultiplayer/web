---
title: GetVehicles
sidebar_label: GetVehicles
description: "Obtém uma variável array do IDs dos veículos criados no servidor."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém uma variável array do IDs dos veículos criados no servidor.

| Nome | Descrição |
| ---------- | ------------------------------------------------------------------ |
| vehicles[] | Uma matriz na qual armazenar o veículo IDs, passado por referência. |
| size | O tamanho da matriz.                                             |

## Retornos

A função retorna o número de veículos armazenados no array.

## Exemplos

```c
new vehicles[MAX_VEHICLES];

GetVehicles(vehicles, sizeof(vehicles));
// O array `vehicles` agora contém IDs de veículos criados. {0, 1, 2, 3, 4,...}
```
## Funções Relacionadas

- [GetPlayers](GetPlayers): Obtém uma variável array do IDs dos jogadores atuais no servidor.
- [GetActors](GetActors): Obtém uma variável array do IDs dos atores criados no servidor.
