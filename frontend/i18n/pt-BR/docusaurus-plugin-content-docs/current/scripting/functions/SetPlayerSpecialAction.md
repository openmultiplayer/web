---
title: SetPlayerSpecialAction
sidebar_label: SetPlayerSpecialAction
description: "Esta função permite definir ações especiais dos jogadores."
tags: ["player"]
---


## Descrição

Esta função permite definir ações especiais dos jogadores.

| Nome | Descrição |
| ----------------------- | ------------------------------------------------------------------- |
| playerid | O jogador que deverá realizar a ação |
| SPECIAL_ACTION:actionid | A [ação](../resources/specialactions) que deve ser executada. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador não está conectado.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/handsup", true) == 0)
    {
        SetPlayerSpecialAction(playerid, SPECIAL_ACTION_HANDSUP);
        return 1;
    }
    if (strcmp(cmdtext, "/drink", true) == 0)
    {
        SetPlayerSpecialAction(playerid, SPECIAL_ACTION_DRINK_WINE);
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

Remover jetpacks dos jogadores configurando sua ação especial para `SPECIAL_ACTION_NONE` (0) faz com que o som permaneça até a morte. Existe uma solução para isso, basta aplicar uma animação aleatória ao jogador e seu jetpack será removido.

:::

## Funções Relacionadas

- [GetPlayerSpecialAction](GetPlayerSpecialAction): Obtenha a ação especial atual de um jogador.
- [ApplyAnimation](ApplyAnimation): Aplique uma animação a um jogador.

## Recursos relacionados

- [Ação Especial IDs](../resources/specialactions)
