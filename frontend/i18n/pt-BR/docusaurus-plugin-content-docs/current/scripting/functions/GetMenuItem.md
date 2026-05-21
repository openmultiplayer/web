---
title: GetMenuItem
sidebar_label: GetMenuItem
description: "Obtenha o texto na célula especificada - endereçado por coluna e linha."
tags: ["menu"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha o texto na célula especificada - endereçado por coluna e linha.

| Nome | Descrição |
| ----------- | ----------------------------------------------------------- |
| Menu:menuid | O ID do menu.                                         |
| column | A coluna.                                                 |
| row | A linha da qual obter o texto.                                 |
| cell[] | Uma matriz na qual armazenar o texto, passado por referência. |
| len | O comprimento da string que deve ser armazenada.             |

## Retornos

Esta função sempre retorna true.

## Exemplos

```c
new text[32];

// Obtenha o texto do item de menu na coluna 1 e na linha 2
GetMenuItem(menuid, 1, 2, text, sizeof(text));
```
## Funções Relacionadas

- [GetMenuItems](GetMenuItems): Obtenha os itens do menu.
- [GetMenuColumns](GetMenuColumns): Obtenha o número de colunas ativas.
