---
title: HideMenuForPlayer
sidebar_label: HideMenuForPlayer
description: "Oculta um menu para um jogador."
tags: ["player", "menu"]
---


## Descrição

Oculta um menu para um jogador.

| Nome | Descrição |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Menu:menuid | O ID do menu a ser ocultado. Retornado por CreateMenu e passado para [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow). |
| playerid | O ID do jogador para o qual o menu ficará oculto.                                                                            |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/menuhide", true) == 0)
    {
        new Menu:myMenu = GetPlayerMenu(playerid);
        HideMenuForPlayer(myMenu, playerid);
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

Trava o servidor e o jogador se um menu ID for fornecido inválido. (Corrigido em open.mp)

:::

:::tip

Esta função sempre tomou um parâmetro de menu ID, mas em SA:MP este ID não foi utilizado. Portanto, qualquer que seja o valor dado, o menu atual do jogador será fechado, mesmo que ele não esteja olhando para aquele que você disse para fechar.

O código antigo pode ser parecido com:

```c
gShopMenu = CreateMenu("text", 2, 100.0, 30.0, 7.0);

HideMenuForPlayer(gShopMenu, playerid);
```
Isso sempre fecharia o menu atual do jogador, independentemente de qual deles ele estivesse realmente olhando. Agora você precisará lembrar qual deles eles estão olhando ou apenas entender:

```c
gShopMenu = CreateMenu("text", 2, 100.0, 30.0, 7.0);

HideMenuForPlayer(GetPlayerMenu(playerid), playerid);
```
:::

## Funções Relacionadas

- [CreateMenu](CreateMenu): Crie um menu.
- [AddMenuItem](AddMenuItem): Adiciona um item a um menu especificado.
- [SetMenuColumnHeader](SetMenuColumnHeader): Define o cabeçalho de uma das colunas de um menu.
- [ShowMenuForPlayer](ShowMenuForPlayer): Mostra um menu para um jogador.
