---
title: GetActors
sidebar_label: GetActors
description: "Obtém uma variável de array do IDs dos atores criados no servidor."
tags: ["actor"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém uma variável de array do IDs dos atores criados no servidor.

| Nome | Descrição |
| -------- | ---------------------------------------------------------------- |
| actors[] | Uma matriz na qual armazenar o ator IDs, passado por referência. |
| size | O tamanho da matriz.                                           |

## Retornos

A função retorna o número de atores armazenados no array.

## Exemplos

```pawn
new actors[MAX_ACTORS];

GetActors(actors, sizeof(actors));
// O array `actors` agora contém IDs de atores criados. {0, 1, 2, 3, 4,...}
```
## Funções Relacionadas

- [GetPlayers](GetPlayers): Obtém uma variável array do IDs dos jogadores atuais no servidor.
- [GetVehicles](GetVehicles): Obtém uma variável array do IDs dos veículos criados no servidor.
