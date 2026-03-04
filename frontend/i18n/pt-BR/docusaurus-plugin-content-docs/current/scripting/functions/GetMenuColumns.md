---
title: GetMenuColumns
sidebar_label: GetMenuColumns
description: Obtém o número de colunas ativas.
tags: ["menu"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o número de colunas ativas.

| Name        | Description                                   |
| ----------- | --------------------------------------------- |
| Menu:menuid | O ID do menu de onde obter as colunas.        |

## Retorno

Retorna o número de colunas ativas.

## Exemplos

```c
new columns = GetMenuColumns(menuid);
```

## Funções Relacionadas

- [GetMenuItems](GetMenuItems): Obtém os itens do menu.
- [GetMenuItem](GetMenuItem): Obtém o texto na célula especificada - definida por coluna e linha.
