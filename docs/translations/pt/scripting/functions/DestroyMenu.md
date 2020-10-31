---
title: DestroyMenu
description: Destrói um menu específico.
tags: ["menu"]
---

## Descrição

Destrói um menu específico.

| Nome   | Descrição              		 |
| ------ | ---------------------- 		 |
| menuid | O ID do menu a ser destruído. |

## Retorno

True se destruir com sucesso, caso contrário false.

## Exemplos

```c
new Menu:examplemenu;
examplemenu = CreateMenu("Seu Menu", 2, 200.0, 100.0, 150.0, 150.0);

// ...
DestroyMenu(examplemenu);
```

## Funções Relacionadas

- [CreateMenu](CreateMenu.md): Cria um menu.
- [SetMenuColumnHeader](SetMenuColumnHeader.md): Define o cabeçalho de uma das colunas do menu.
- [AddMenuItem](AddMenuItem.md): Adiciona um item ao menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow.md): É chamado quando um jogador seleciona uma linha do menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu.md): É chamado quando um jogador sai do menu. 
