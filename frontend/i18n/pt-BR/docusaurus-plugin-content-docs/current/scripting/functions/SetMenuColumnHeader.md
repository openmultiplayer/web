---
title: SetMenuColumnHeader
sidebar_label: SetMenuColumnHeader
description: "Define a legenda de uma coluna em um menu."
tags: ["menu"]
---


## Descrição

Define a legenda de uma coluna em um menu.

| Nome | Descrição |
| ---------------- | ------------------------------------------ |
| Menu:menuid | ID do menu a ser alterado.                  |
| column | A coluna (0 ou 1) para definir o cabeçalho.  |
| const text[] | O texto da legenda da coluna.           |
| OPEN_MP_TAGS:... | Número indefinido de argumentos de qualquer tag. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new Menu:gTestMenu;

// Existem duas linhas neste menu
gTestMenu = CreateMenu("Menu Header", 2, 200.0, 100.0, 150.0, 150.0);
SetMenuColumnHeader(gTestMenu, 0, "Row 1");
SetMenuColumnHeader(gTestMenu, 1, "Row 2");

// Adicione itens de menu a ele.
AddMenuItem(gTestMenu, 0, "Row1 Item1");
AddMenuItem(gTestMenu, 1, "Row2 Item1");
```
## Notas

:::tip

Trava ao passar por um menu inválido ID.

:::

:::warning

Observe que você pode adicionar apenas 12 itens com [AddMenuItem](AddMenuItem). O 13º objeto de um menu substituiria o cabeçalho da coluna que está corretamente configurada com esta função.

:::

## Funções Relacionadas

- [AddMenuItem](AddMenuItem): Adiciona um item a um menu.
- [CreateMenu](CreateMenu): Crie um menu.

## Callbacks Relacionadas

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Chamado quando um jogador seleciona uma linha em um menu.
