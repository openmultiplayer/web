---
title: GetPlayerVirtualWorld
sidebar_label: GetPlayerVirtualWorld
description: "Recupera o mundo virtual atual em que o jogador está."
tags: ["player"]
---


## Descrição

Recupera o mundo virtual atual em que o jogador está.

| Nome | Descrição |
| -------- | ------------------------------------------------- |
| playerid | O ID do jogador para obter o mundo virtual. |

## Retornos

O ID do mundo virtual em que o jogador está atualmente.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/world", true))
    {
        new string[32];
        format(string, sizeof(string), "Your virtual world: %i", GetPlayerVirtualWorld(playerid));
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
    return 0;
}
```
## Notas

:::tip

Os mundos virtuais não são iguais aos interiores.

:::

## Funções Relacionadas

- [SetPlayerVirtualWorld](SetPlayerVirtualWorld): Defina o mundo virtual de um jogador.
- [GetVehicleVirtualWorld](GetVehicleVirtualWorld): Verifique em que mundo virtual um veículo está.
- [GetPlayerInterior](GetPlayerInterior): Obtenha o interior atual de um jogador.
