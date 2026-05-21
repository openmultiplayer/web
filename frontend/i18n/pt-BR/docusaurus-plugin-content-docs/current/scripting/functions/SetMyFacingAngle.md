---
title: SetMyFacingAngle
sidebar_label: SetMyFacingAngle
description: "Defina o ângulo de visão do NPC."
tags: []
---


:::warning

Esta função está obsoleta. Consulte [NPC_SetFacingAngle](NPC_SetFacingAngle).

:::

## Descrição

Defina o ângulo de visão do NPC.

| Nome | Descrição |
| --------- | --------------------------- |
| Float:ang | O ângulo de visão do novo NPC. |

## Exemplos

```c
SetMyFacingAngle(0); //NPC voltado para o norte
```
```c
       north (0)
          |
(90) west- -east (270)
          |
       south (180)
```
## Funções Relacionadas

- [GetMyFacingAngle](GetMyFacingAngle): Obtenha o ângulo de visão do NPC.
