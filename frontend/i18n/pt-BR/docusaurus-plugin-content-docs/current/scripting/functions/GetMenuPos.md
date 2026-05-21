---
title: GetMenuPos
sidebar_label: GetMenuPos
description: "Obtenha a posição x/y da tela do menu."
tags: ["menu"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a posição x/y da tela do menu.

| Nome | Descrição |
| ----------- | -------------------------------------------------------------------------- |
| Menu:menuid | O ID do menu.                                                        |
| &Float:x | Uma variável float na qual armazenar a posição X, passada por referência. |
| &Float:y | Uma variável float na qual armazenar a posição Y, passada por referência. |

## Retornos

Esta função sempre retorna true.

## Exemplos

```c
new Float:x, Float:y;
GetMenuPos(menuid, x, y);
```
## Funções Relacionadas

- [GetMenuColumnWidth](GetMenuColumnWidth): Obtenha a largura das colunas.
