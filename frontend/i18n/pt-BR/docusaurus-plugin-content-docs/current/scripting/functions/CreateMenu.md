---
title: CreateMenu
sidebar_label: CreateMenu
description: Cria um menu.
tags: ["menu"]
---

## Descrição

Cria um menu.

| Nome               | Descrição                                                                           |
| ------------------ | ----------------------------------------------------------------------------------- |
| const title[]      | O título para o novo menu.                                                         |
| columns            | Quantas colunas o novo menu deve ter.                                              |
| Float:x            | A posição X do menu (canvas 640x460 - 0 colocaria o menu no extremo esquerdo).    |
| Float:y            | A posição Y do menu (canvas 640x460 - 0 colocaria o menu no extremo superior).    |
| Float:column1width | A largura para a primeira coluna.                                                  |
| Float:column2width | A largura para a segunda coluna.                                                   |
| OPEN_MP_TAGS:...   | Número indefinido de argumentos de qualquer tag.                                   |

## Retorno

O ID do novo menu ou **-1** em caso de falha.

## Exemplos

```c
new Menu:exampleMenu;

public OnGameModeInit()
{
    exampleMenu = CreateMenu("Menu de Exemplo", 2, 200.0, 100.0, 150.0, 150.0);
    return 1;
}
```

## Notas

:::tip

- Esta função apenas CRIA o menu - [ShowMenuForPlayer](ShowMenuForPlayer) deve ser usado para mostrá-lo.
- Você só pode criar e acessar 2 colunas (0 & 1).
- Se o comprimento do título for igual ou maior que 32 caracteres, o título é truncado para 30 caracteres.

:::

:::warning

Há um limite de 12 itens por menu, e um limite de 128 menus no total.

:::

## Funções Relacionadas

- [AddMenuItem](AddMenuItem): Adiciona um item a um menu especificado.
- [SetMenuColumnHeader](SetMenuColumnHeader): Define o cabeçalho para uma das colunas em um menu.
- [DestroyMenu](DestroyMenu): Destrói um menu.
- [ShowMenuForPlayer](ShowMenuForPlayer): Mostra um menu para um jogador.
- [HideMenuForPlayer](HideMenuForPlayer): Esconde um menu para um jogador.

## Callbacks Relacionados

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Chamado quando um jogador seleciona uma linha em um menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Chamado quando um jogador sai de um menu.