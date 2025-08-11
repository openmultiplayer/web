---

title: DestroyMenu
sidebar_label: DestroyMenu
description: Destroi o menu especificado.
tags: ["menu"]
---

## descrição

Destrói o menu indicado.

| Nome         | Descrição               |
| ------------ | ----------------------- |
| Menu:menuid | O ID do menu a destruir |

## retorno

**true** se o menu foi destruído com sucesso, caso contrário **false**.

## exemplo

```c
new Menu:exampleMenu;
exampleMenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);

// Mais tarde...
DestroyMenu(exampleMenu);
```

## funções relacionadas

* [CreateMenu](CreateMenu): Cria um menu.
* [SetMenuColumnHeader](SetMenuColumnHeader): Define o cabeçalho de uma coluna do menu.
* [AddMenuItem](AddMenuItem): Adiciona um item ao menu.

## callbacks relacionados

* [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Chamado quando um jogador escolhe uma linha no menu.
* [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Chamado quando um jogador sai do menu.
