---
title: GetMenuColumnWidth
sidebar_label: GetMenuColumnWidth
description: "Obtenha a largura de uma ou duas colunas."
tags: ["menu"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a largura de uma ou duas colunas.

| Nome | Descrição |
| ------------------- | ----------------------------------------------------------------------------- |
| Menu:menuid | O ID do menu.                                                           |
| &Float:column1Width | Uma variável flutuante na qual armazenar a largura da coluna1, passada por referência. |
| &Float:column2Width | Uma variável flutuante na qual armazenar a largura da coluna2, passada por referência. |

## Retornos

Esta função sempre retorna **true**.

## Exemplos

```c
new Float:column1Width, Float:column2Width;
GetMenuColumnWidth(menuid, column1Width, column2Width);

// Ou você só pode obter a largura da coluna1
new Float:column1Width;
GetMenuColumnWidth(menuid, column1Width);
```
## Funções Relacionadas

- [GetMenuPos](GetMenuPos): Obtenha a posição x/y do menu na tela.
