---
title: IsValidAnimationLibrary
sidebar_label: IsValidAnimationLibrary
description: "Verifica se a biblioteca de animação fornecida é válida."
tags: ["animation"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se a biblioteca de animação fornecida é válida.

| Nome | Descrição |
| ------------ | ------------------------------------ |
| const name[] | O nome da biblioteca de animação a ser verificada. |

## Retornos

Retorna true se a biblioteca de animação for válida, caso contrário, false.

## Exemplos

```c
if (IsValidAnimationLibrary("PED"))
{
    // A biblioteca de animação é válida
}
else
{
    // A biblioteca de animação não é válida
}
```
## Funções Relacionadas

- [ApplyAnimation](ApplyAnimation): Aplique uma animação a um jogador.

## Recursos relacionados

- [Animações](../resources/animations)
