---
title: TextDrawSetSelectable
sidebar_label: TextDrawSetSelectable
description: "Define se um textdraw pode ser selecionado (clicado) ou não."
tags: ["textdraw"]
---


## Descrição

Define se um textdraw pode ser selecionado (clicado) ou não

| Nome | Descrição |
| --------------- | ------------------------------------------------------------------- |
| Text:textid | O ID do textdraw para tornar selecionável.                          |
| bool:selectable | 'true' para torná-lo selecionável ou 'false' para torná-lo não selecionável. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawTextSize(gMyTextdraw, 30.0, 10.0);
    TextDrawSetSelectable(gMyTextdraw, true);
    return 1;
}
```
## Notas

:::tip

Use [TextDrawTextSize](TextDrawTextSize) para definir a área clicável.

:::

:::warning

TextDrawSetSelectable deve ser usado BEFORE o textdraw é mostrado aos jogadores para que seja selecionável.

:::

## Funções Relacionadas

- [TextDrawIsSelectable](TextDrawIsSelectable): Verifica se um textdraw é selecionável.
- [SelectTextDraw](SelectTextDraw): Habilita o mouse, para que o jogador possa selecionar um textdraw
- [CancelSelectTextDraw](CancelSelectTextDraw): Cancele a seleção do textdraw com o mouse

## Callbacks Relacionadas

- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Chamado quando um jogador clica em um textdraw.
