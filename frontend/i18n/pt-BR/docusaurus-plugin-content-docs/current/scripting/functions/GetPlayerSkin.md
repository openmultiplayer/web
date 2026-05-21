---
title: GetPlayerSkin
sidebar_label: GetPlayerSkin
description: "Retorna a classe da skin do jogador."
tags: ["player"]
---


## Descrição

Retorna a classe da skin dos jogadores

| Nome | Descrição |
| -------- | ---------------------------------------- |
| playerid | O jogador do qual você deseja obter a skin |

## Retornos

O [id da capa](../resources/skins).

**0** se for inválido.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/myskin", true))
    {
        new string[32];
        new playerSkin = GetPlayerSkin(playerid);

        format(string, sizeof(string), "Your skin id: %d", playerSkin);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

Retorna o novo skin depois que [SetSpawnInfo](SetSpawnInfo) é chamado, mas antes que o jogador realmente reapareça para obter o novo skin. Retorna a skin antiga se o jogador foi gerado através da função [SpawnPlayer](SpawnPlayer).

:::

## Funções Relacionadas

- [SetPlayerSkin](SetPlayerSkin): Defina a skin de um jogador.

## Recursos relacionados

- [Pele IDs](../resources/skins)
