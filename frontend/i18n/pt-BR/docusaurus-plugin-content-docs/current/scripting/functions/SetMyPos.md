---
title: SetMyPos
sidebar_label: SetMyPos
description: "Definir posição do NPC"
tags: ["npc"]
---


:::warning

Esta função está obsoleta. Consulte [NPC_SetPos](NPC_SetPos).

:::

## Descrição

Defina a posição do NPC.

| Nome | Descrição |
| ------- | ----------------------------------- |
| Float:x | A coordenada X na qual colocar NPC. |
| Float:y | A coordenada Y na qual colocar NPC. |
| Float:z | A coordenada Z na qual colocar NPC. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplo

```c
SetMyPos(0.0, 0.0, 3.0);
```
## Funções Relacionadas

- [GetMyPos](GetMyPos): Obtenha a posição atual do NPC.
