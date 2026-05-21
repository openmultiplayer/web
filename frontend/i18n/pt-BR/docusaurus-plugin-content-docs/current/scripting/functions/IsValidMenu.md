---
title: IsValidMenu
sidebar_label: IsValidMenu
description: "Verifica se um menu ID é válido."
tags: ["menu"]
---


## Descrição

Verifica se um menu ID é válido.

| Nome | Descrição |
| ----------- | ---------------------------- |
| Menu:menuid | O ID do menu a ser verificado. |

## Retornos

**true** - O menu é válido.

**false** - O menu não é válido.

## Funções Relacionadas

- [CreateMenu](CreateMenu): Cria um menu.
- [DestroyMenu](DestroyMenu): Destrói o menu especificado.
- [DisableMenu](DisableMenu): Desativa um menu.
- [DisableMenuRow](DisableMenuRow): Desativa uma linha específica em um menu para todos os jogadores.
- [AddMenuItem](AddMenuItem): Adiciona um item a um menu especificado.
- [SetMenuColumnHeader](SetMenuColumnHeader): Defina o cabeçalho de uma das colunas de um menu.
- [IsMenuDisabled](IsMenuDisabled): Verifique se algum menu está desabilitado.
- [IsMenuRowDisabled](IsMenuRowDisabled): Verifique se uma linha do menu está desabilitada.
-

## Callbacks Relacionadas

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Chamado quando um jogador seleciona uma linha em um menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Chamado quando um jogador sai de um menu.
