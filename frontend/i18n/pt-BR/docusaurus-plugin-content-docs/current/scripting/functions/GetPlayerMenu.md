---
title: GetPlayerMenu
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

- [ShowMenuForPlayer](ShowMenuForPlayer.md): Mostra um menu a um jogador.
- [HideMenuForPlayer](HideMenuForPlayer.md): Esconde um menu para um jogador.
- [CreateMenu](CreateMenu.md): Cria um menu.
- [DestroyMenu](DestroyMenu.md): Destrói um menu.
- [AddMenuItem](AddMenuItem.md): Adiciona um item a um menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow.md): É chamado quando o jogador seleciona uma linha de um menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu.md): É chamado quando um jogador sai de um menu.
