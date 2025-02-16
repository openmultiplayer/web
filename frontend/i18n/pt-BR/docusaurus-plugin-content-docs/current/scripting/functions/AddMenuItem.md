---
title: AddMenuItem
description: Adiciona um item a um menu especificado.
tags: ["menu"]
---

## Descrição

Esta função adiciona um item a um menu especificado.

| Nome    | Descrição                                    |
| ------- | -------------------------------------------- |
| menuid  | O ID do menu ao qual o item será adicionado. |
| column  | A coluna em que o item será adicionado.      |
| title[] | O título do novo item de menu.               |

## Retornos

O índice da linha onde este item foi adicionado.

## Exemplos

```c
new Menu:gExampleMenu;
public OnGameModeInit()
{
    gExampleMenu = CreateMenu("Seu menu", 2, 200.0, 100.0, 150.0, 150.0);
    AddMenuItem(gExampleMenu, 0, "item 1");
    AddMenuItem(gExampleMenu, 0, "item 2");
    return 1;
}
```

## Notas

:::tip

Gera um crash quando é passado um ID de menu inválido. Cada menu só pode ter até 12 itens (o 13º vai para o lado direito do cabeçalho do nome da coluna (colorido), o 14º e posteriores não são exibidos). É possível usar apenas 2 colunas (0 e 1). Cada item só pode ter até 8 códigos de cor (r, g etc.). O tamanho máximo do título do item de menu é de 31 símbolos.

:::

## Funções Relacionadas
- [CreateMenu](CreateMenu): Cria um menu.
- [SetMenuColumnHeader](SetMenuColumnHeader): Define o cabeçalho de uma das colunas de um menu.
- [DestroyMenu](DestroyMenu): Destrói um menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Chamado quando um jogador seleciona uma linha em um menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Chamado quando um jogador sai de um menu.
