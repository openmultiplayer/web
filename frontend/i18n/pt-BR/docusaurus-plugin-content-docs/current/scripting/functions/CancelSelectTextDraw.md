---
title: CancelSelectTextDraw
sidebar_label: CancelSelectTextDraw
description: Cancela a seleção de textdraw com o mouse.
tags: ["textdraw"]
---

## Descrição

Cancela a seleção de textdraw com o mouse

| Nome     | Descrição                                                           |
| -------- | ------------------------------------------------------------------- |
| playerid | O ID do jogador que deve ter a seleção de textdraw desabilitada    |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/cancelselect", true))
    {
        CancelSelectTextDraw(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Seleção de TextDraw desabilitada!");
        return 1;
    }
    return 0;
}
```

## Notas

:::warning

Esta função chama [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw) com INVALID_TEXT_DRAW (65535).

Usar esta função dentro de OnPlayerClickTextDraw sem capturar este caso fará com que os clientes entrem em um loop infinito.

:::

## Funções Relacionadas

- [SelectTextDraw](SelectTextDraw): Habilita o mouse, para que o jogador possa selecionar um textdraw
- [TextDrawSetSelectable](TextDrawSetSelectable): Define se um textdraw é selecionável através de SelectTextDraw

## Callbacks Relacionadas

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Chamado quando um jogador clica em um textdraw.