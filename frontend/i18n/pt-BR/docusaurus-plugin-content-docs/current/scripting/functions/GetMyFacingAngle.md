---
title: GetMyFacingAngle
sidebar_label: GetMyFacingAngle
description: "Obtenha o ângulo atual do NPC."
tags: []
---


:::warning

Esta função está obsoleta. Consulte [NPC_GetFacingAngle](NPC_GetFacingAngle).

:::

## Descrição

Obtenha o ângulo atual do NPC.

| Nome | Descrição |
| ------------ | -------------------------------------------------- |
| &Float:Angle | Um float para salvar o ângulo, passado por referência. |

## Retornos

O ângulo de face é armazenado na variável especificada.

## Exemplos

```c
new Float:Angle;
GetMyFacingAngle(Angle);
printf("I am currently facing %f!", Angle);
```
## Funções Relacionadas

- [SetMyFacingAngle](SetMyFacingAngle): Defina o ângulo de orientação do NPC.
