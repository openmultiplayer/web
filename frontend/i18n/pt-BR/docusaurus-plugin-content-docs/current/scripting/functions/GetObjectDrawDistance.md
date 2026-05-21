---
title: GetObjectDrawDistance
sidebar_label: GetObjectDrawDistance
description: "Obtenha a distância de visão de um objeto."
tags: ["object"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a distância de visão de um objeto.

| Nome | Descrição |
| -------- | ------------------------------------------------ |
| objectid | O ID do objeto para obter a distância de visão de |

## Retornos

Retorna a distância de desenho como float.

## Exemplos

```c
new objectid = CreateObject(3335, 672.53485, -656.11023, 15.26560,  3.00000, 0.00000, 0.00000,  100.0);

new Float:drawDistance = GetObjectDrawDistance(objectid);
// distância de desenho = 100,0
```
## Funções Relacionadas

- [GetPlayerObjectDrawDistance](GetPlayerObjectDrawDistance): Obtenha a distância de visão de um objeto do jogador.
