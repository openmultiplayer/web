---
title: GetMenuItems
sidebar_label: GetMenuItems
description: "Obtenha o número de linhas na coluna fornecida."
tags: ["menu"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha o número de linhas na coluna fornecida.

| Nome | Descrição |
| ----------- | ------------------- |
| Menu:menuid | O ID do menu. |
| column | A coluna.         |

## Retornos

Retorna o número de linhas.

## Exemplos

```c
// Obtenha o número de linhas do menu na coluna 1
new items = GetMenuItems(menuid, 1);
```
## Funções Relacionadas

- [GetMenuColumns](GetMenuColumns): Obtenha o número de colunas ativas.
- [GetMenuItem](GetMenuItem): Obtenha o texto na célula especificada - endereçado por coluna e linha.
