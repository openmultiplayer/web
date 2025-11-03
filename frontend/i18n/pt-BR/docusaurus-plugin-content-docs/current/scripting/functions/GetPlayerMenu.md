---
title: GetPlayerMenu
sidebar_label: GetPlayerMenu
description: Obtém o ID do menu que o player está a visualizar no momento (mostrado por ShowMenuForPlayer).
tags: ["player", "menu"]
---

## Descrição

Obtém o ID do menu que o player está a visualizar no momento (mostrado por ShowMenuForPlayer).

| Nome     | Descrição                                          |
| -------- | -------------------------------------------------- |
| playerid | O ID do jogador do qual deseja obter o menu atual. |

## Retorno

O ID do menu visualizado no momento pelo jogador, ou INVALID_MENU (255) se nenhum menu for mostrado. O valor retornado é marcado com Menu:.

## Exemplos

```c
new Menu:currentMenu = GetPlayerMenu(playerid); // Armazena o menu atual do jogador em 'CurrentMenu'
```

## Notas

:::tip

Retorna o menu anterior quando nenhum é mostrado.

:::

## Funções Relacionadas

- [ShowMenuForPlayer](ShowMenuForPlayer): Mostra um menu a um jogador.
- [HideMenuForPlayer](HideMenuForPlayer): Esconde um menu para um jogador.
- [CreateMenu](CreateMenu): Cria um menu.
- [DestroyMenu](DestroyMenu): Destrói um menu.
- [AddMenuItem](AddMenuItem): Adiciona um item a um menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): É chamado quando o jogador seleciona uma linha de um menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): É chamado quando um jogador sai de um menu.
