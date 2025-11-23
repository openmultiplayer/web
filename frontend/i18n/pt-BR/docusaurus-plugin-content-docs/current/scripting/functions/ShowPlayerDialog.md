---
title: ShowPlayerDialog
sidebar_label: ShowPlayerDialog
description: Mostra um dialog (janela) asíncrono (um único por vez).
tags: ["player"]
---

## Descrição

Mostra um dialog (janela) asíncrono (um único por vez).

| Parâmetro | Descrição                                                                                                                      |
| --------- | ------------------------------------------------------------------------------------------------------------------------------ |
| playerid  | ID do jogador que irá ver o dialog                                                                                             |
| dialogid  | ID do dialog (será usado para processar as respostas). ID máximo 32767. Usar valores negativos fechará qualquer dialog aberto. |
| style     | The [style](../resources/dialogstyles) of the dialog.                                                                          |
| caption[] | Título mostrado no topo do dialog. O tamanho do caption não deve ultrapassar 64 caracteres, ou será cortado.                   |
| info[]    | Texto que será mostrado no corpo do dialog. Use \n para iniciar uma nova linha e \t para espaço (TAB).                         |
| button1[] | Texto do botão esquerdo.                                                                                                       |
| button2[] | Texto do botão direito. Manter vazio, caso queira ocultar o button2.                                                           |

## Retorno

1: A função foi executada corretamente.

0: A função falhou ao executar. Isto significa que o jogador não está conectado.

## Exemplos

```c
// Define os dialogid dentro de uma enum
enum
{
    DIALOG_LOGIN,
    DIALOG_WELCOME,
    DIALOG_WEAPONS
}

// Alternativamente, por meio de macros:
#define DIALOG_LOGIN 1
#define DIALOG_WELCOME 2
#define DIALOG_WEAPONS 3

// Enums são recommendadas, já que você não pode reutilizar IDs. No entanto, enums usam memória para armazenar as definições, enquanto as define são pré-processadas na compilação.

// Exemplo para DIALOG_STYLE_MSGBOX:
ShowPlayerDialog(playerid, DIALOG_WELCOME, DIALOG_STYLE_MSGBOX, "Notice", "You are connected to the server", "Close", "");

// Exemplo para DIALOG_STYLE_INPUT:
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Enter your password below:", "Login", "Cancel");

// Exemplo para DIALOG_STYLE_LIST:
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons", "AK47\nM4\nSniper Rifle", "Option 1", "Option 2");

// Exemplo para DIALOG_STYLE_PASSWORD:
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_PASSWORD, "Login", "Enter your password below:", "Login", "Cancel");

// Exemplo para DIALOG_STYLE_TABLIST:
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST, "Buy Weapon", "Deagle\t$5000\t100\nSawnoff\t$5000\t100\nPistol\t$1000\t50", "Select", "Cancel");

// Exemplo para DIALOG_STYLE_TABLIST_HEADERS:
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST_HEADERS, "Buy Weapon", "Weapon\tPrice\tAmmo\nDeagle\t$5000\t100\nSawnoff\t$5000\t100\nPistol\t$1000\t50", "Select", "Cancel");
```

## Notas

:::tip

É recomendado usar enumerações (enums - veja abaixo) ou constantes (#define) para determinar quais dialogid's estão sendo usados, para evitar confusões no futuro. Você nunca deve usar números direto, porque isso gera confusões.

:::

:::tip

Use cores embutidas para múltiplas cores no texto. Usando -1 como dialogid fecha todos os dialogs abertos na tela do cliente (jogador).

:::

## Funções relacionadas

- [TextDrawShowForPlayer](TextDrawShowForPlayer): Apresenta um textdraw para certo jogador.
- [OnDialogResponse](../callbacks/OnDialogResponse): É chamada quando um jogador responde a um dialog.
