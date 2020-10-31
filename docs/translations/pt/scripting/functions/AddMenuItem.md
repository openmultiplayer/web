---
title: AddMenuItem
description: Adiciona um item a um menu específico.
tags: ["menu"]
---

## Descrição

Adiciona um item a um menu específico.

| Nome    | Descrição                          |
| ------- | --------------------------------   |
| menuid  | O ID do menu a adicionar o item.   |
| column  | A coluna a adicionar o item.       |
| title[] | O título para o novo item do menu. |

## Retorno

O index da linha à qual o item foi adicionado.

## Exemplos

```c
new Menu:gExampleMenu;

public OnGameModeInit()
{
    gExampleMenu = CreateMenu("Seu Menu", 2, 200.0, 100.0, 150.0, 150.0);
    AddMenuItem(gExampleMenu, 0, "item 1");
    AddMenuItem(gExampleMenu, 0, "item 2");
    return 1;
}
```

## Notas

:::tip

Crasha quando passa a um ID de menu inválido. Você só pode ter 12 itens por menu (o 13º vai para o lado direito do cabeçalho do nome da coluna (colorido), 14º e superior não aparecem). Você só pode usar 2 colunas (0 e 1). Você só pode adicionar 8 códigos de cores por item (~r~, ~g~ etc.). O comprimento máximo do item do menu são 31 símbolos.

:::

## Funções Relacionadas

- [CreateMenu](CreateMenu.md): Cria um menu.
- [SetMenuColumnHeader](SetMenuColumnHeader.md): Define o cabeçalho de uma das colinas em um menu.
- [DestroyMenu](DestroyMenu.md): Destrói um menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow.md): É chamada quando um jogador seleciona uma linha no menu. 
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu.md): É chamada quando o jogador sai do menu.
