---
title: ShowMenuForPlayer
sidebar_label: ShowMenuForPlayer
description: "Mostra um menu criado anteriormente para um jogador."
tags: ["player", "menu"]
---


## Descrição

Mostra um menu criado anteriormente para um jogador.

| Nome | Descrição |
| ----------- | ---------------------------------------------------- |
| Menu:menuid | O ID do menu a ser exibido. Retornado por CreateMenu.  |
| playerid | O ID do jogador para quem o menu será mostrado. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Menu e/ou player não existe.

## Exemplos

```c
new Menu:exampleMenu;

public OnGameModeInit()
{
    exampleMenu = CreateMenu("Example Menu", 2, 200.0, 100.0, 150.0, 150.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/menu", true) == 0)
    {
        ShowMenuForPlayer(exampleMenu, playerid);
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

Trava o servidor e o jogador se um menu ID for fornecido inválido.

:::

## Funções Relacionadas

- [CreateMenu](CreateMenu): Crie um menu.
- [AddMenuItem](AddMenuItem): Adiciona um item a um menu especificado.
- [SetMenuColumnHeader](SetMenuColumnHeader): Define o cabeçalho de uma das colunas de um menu.
- [DestroyMenu](DestroyMenu): Destrua um menu.

## Callbacks Relacionadas

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Chamado quando um jogador seleciona uma linha em um menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Chamado quando um jogador sai de um menu.
