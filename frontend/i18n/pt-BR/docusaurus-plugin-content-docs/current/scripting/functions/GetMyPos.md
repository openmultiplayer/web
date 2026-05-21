---
title: GetMyPos
sidebar_label: GetMyPos
description: "Obtenha a posição do NPC"
tags: ["npc"]
---


:::warning

Esta função está obsoleta. Consulte [NPC_GetPos](NPC_GetPos).

:::

## Descrição

Obtenha a posição do NPC.

| Nome | Descrição |
| -------- | ------------------------------------------------------ |
| &Float:x | Um float para salvar a coordenada X, passada por referência. |
| &Float:y | Um float para salvar a coordenada Y, passada por referência. |
| &Float:z | Um float para salvar a coordenada Z, passada por referência. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplo

```c
new Float:x, Float:y, Float:z;
GetMyPos(x,y,z);
printf("I am currently at %f, %f, %f!",x,y,z);
```
## Funções Relacionadas

- [SetMyPos](SetMyPos): Defina a posição atual do NPC.
