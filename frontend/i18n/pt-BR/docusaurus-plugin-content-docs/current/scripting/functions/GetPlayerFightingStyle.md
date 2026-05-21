---
title: GetPlayerFightingStyle
sidebar_label: GetPlayerFightingStyle
description: "Obtenha o estilo de luta que o jogador está usando atualmente."
tags: ["player"]
---


## Descrição

Obtenha o estilo de luta que o jogador está usando atualmente.

| Nome | Descrição |
| -------- | -------------------------------------------------- |
| playerid | O ID do jogador para obter o estilo de luta. |

## Retornos

O ID do [estilo de luta](../resources/fightingstyles) do jogador.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/fightstyle", true))
    {
        new string[64];

        new FIGHT_STYLE:style = GetPlayerFightingStyle(playerid);
        new styleName[11];

        switch (style)
        {
            case FIGHT_STYLE_NORMAL:
            {
                styleName = "normal";
            }
            case FIGHT_STYLE_BOXING:
            {
                styleName = "boxing";
            }
            case FIGHT_STYLE_KUNGFU:
            {
                styleName = "kungfu";
            }
            case FIGHT_STYLE_KNEEHEAD:
            {
                styleName = "kneehead";
            }
            case FIGHT_STYLE_GRABKICK:
            {
                styleName = "grabkick";
            }
            case FIGHT_STYLE_ELBOW:
            {
                styleName = "elbow";
            }
        }

        format(string, sizeof(string), "You are using %s fighting style!", styleName);
        SendClientMessage(playerid, 0xFFFFFFAA, string);
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [SetPlayerFightingStyle](SetPlayerFightingStyle): Defina o estilo de luta de um jogador.

## Recursos relacionados

- [Estilos de Luta](../resources/fightingstyles)
