---
title: VectorSize
sidebar_label: VectorSize
description: "Retorna a norma (comprimento) do vetor fornecido."
tags: ["math"]
---


## Descrição

Retorna a norma (comprimento) do vetor fornecido.

| Nome | Descrição |
| ------- | ------------------------------------- |
| Float:x | A magnitude do vetor no eixo X. |
| Float:y | A magnitude do vetor no eixo Y. |
| Float:z | A magnitude do vetor no eixo Z. |

## Retornos

A norma (comprimento) do vetor fornecido como um ponto flutuante.

## Exemplos

```c
stock Float:GetDistanceBetweenPoints(Float:x1, Float:y1, Float:z1, Float:x2, Float:y2, Float:z2)
{
    return VectorSize(x1-x2, y1-y2, z1-z2);
}
```
## Funções Relacionadas

- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): Obtenha a distância entre um jogador e um ponto.
- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): Obtenha a distância entre um veículo e um ponto.
- [floatsqroot](floatsqroot): Calcula a raiz quadrada de um valor de ponto flutuante.
