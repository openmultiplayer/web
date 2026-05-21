---
title: TextDrawShowForPlayer
sidebar_label: TextDrawShowForPlayer
description: "Mostra um textdraw para um jogador específico."
tags: ["player", "textdraw"]
---


## Descrição

Mostra um textdraw para um jogador específico.

| Nome | Descrição |
| ----------- | ---------------------------------------------------------------------------------- |
| playerid | O ID do jogador para o qual mostrar o textdraw.                                     |
| Text:textid | O ID do textdraw para mostrar.<br />Returned por [TextDrawCreate](TextDrawCreate). |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador e/ou textdraw especificado não existe.

## Exemplos

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 100.0, "Welcome!");
    return 1;
}

public OnPlayerConnect(playerid)
{
    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}
```
## Notas

:::tip

Se apenas um único jogador verá um textdraws, pode ser aconselhável usar player-textdraws. Isto também é útil para textdraws que precisam mostrar informações específicas para um jogador individual.

:::

## Funções Relacionadas

- [TextDrawHideForPlayer](TextDrawHideForPlayer): Oculta um textdraw para um determinado jogador.
- [TextDrawShowForAll](TextDrawShowForAll): Mostra um textdraw para todos os jogadores.
- [TextDrawHideForAll](TextDrawHideForAll): Oculta um textdraw para todos os jogadores.
- [IsTextDrawVisibleForPlayer](IsTextDrawVisibleForPlayer): Verifica se um textdraw é mostrado para um jogador.
