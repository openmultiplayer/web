---
title: GetMenuColumnHeader
sidebar_label: GetMenuColumnHeader
description: "Obtenha o texto no cabeçalho da coluna especificada."
tags: ["menu"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha o texto no cabeçalho da coluna especificada.

| Nome | Descrição |
| --------------------- | ----------------------------------------------------------- |
| Menu:menuid | O ID do menu.                                         |
| column | A coluna.                                                 |
| header[] | Uma matriz na qual armazenar o texto, passado por referência. |
| len = sizeof (header) | O comprimento do texto que deve ser armazenado.               |

## Retornos

Esta função sempre retorna **true**.

## Exemplos

```c
new text[32];

// Obtenha o texto do cabeçalho do menu na coluna 1
GetMenuColumnHeader(menuid, 1, text, sizeof(text));
```
## Funções Relacionadas

- [CreateMenu](CreateMenu): Cria um menu.
