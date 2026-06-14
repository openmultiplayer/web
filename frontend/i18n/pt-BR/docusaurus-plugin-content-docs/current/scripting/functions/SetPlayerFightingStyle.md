---
title: SetPlayerFightingStyle
sidebar_label: SetPlayerFightingStyle
description: "Defina o estilo de luta especial de um jogador."
tags: ["player"]
---


## Descrição

Defina o estilo de luta especial de um jogador. Para usar no jogo, mire e pressione a tecla ‘ataque secundário’ (ENTER por padrão).

| Nome | Descrição |
| ----------------- | --------------------------------------------------------------------- |
| playerid | O ID do jogador para definir o estilo de luta.                        |
| FIGHT_STYLE:style | O [estilo] de luta (../resources/fightingstyles) que deve ser definido. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/boxing", true) == 0)
    {
        SetPlayerFightingStyle(playerid, FIGHT_STYLE_BOXING);
        SendClientMessage(playerid, 0xFFFFFFAA, "You have changed your fighting style to boxing!");
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

Isso não afeta ataques normais de punho - apenas ataques especiais/secundários (mirar + pressionar a tecla 'ataque secundário').

:::

## Funções Relacionadas

- [GetPlayerFightingStyle](GetPlayerFightingStyle): Obtenha o estilo de luta de um jogador.

## Recursos relacionados

- [Estilos de luta](../resources/fightingstyles)
