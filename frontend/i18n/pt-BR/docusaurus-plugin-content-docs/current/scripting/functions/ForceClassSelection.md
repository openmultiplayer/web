---
title: ForceClassSelection
sidebar_label: ForceClassSelection
description: "Força um jogador a voltar para a seleção de classe."
tags: ["class"]
---


## Descrição

Força um jogador a voltar para a seleção de classe.

| Nome | Descrição |
| -------- | ------------------------------------------- |
| playerid | O jogador a ser enviado de volta para a seleção de classe. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/class", true))
    {
        ForceClassSelection(playerid);
        TogglePlayerSpectating(playerid, true);
        TogglePlayerSpectating(playerid, false);
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

Esta função não realiza uma mudança de estado para `PLAYER_STATE_WASTED` quando combinada com TogglePlayerSpectating (veja o exemplo acima), conforme listado aqui.

:::

## Funções Relacionadas

- [AddPlayerClass](AddPlayerClass): Adicione uma classe.
- [SetPlayerSkin](SetPlayerSkin): Defina a skin de um jogador.
- [GetPlayerSkin](GetPlayerSkin): Obtenha a skin atual de um jogador.

## Callbacks Relacionadas

- [OnPlayerRequestClass](../callbacks/OnPlayerRequestClass): Chamado quando um jogador muda de classe na seleção de classe.
