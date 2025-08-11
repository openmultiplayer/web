---
title: DisableRemoteVehicleCollisions
sidebar_label: DisableRemoteVehicleCollisions
description: Desativa as colisões entre veículos ocupados para um jogador.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Desativa as colisões entre veículos ocupados para um jogador.

| Nome         | Descrição                                                   |
| ------------ | ------------------------------------------------------------- |
| playerid     | O ID do jogador para quem você deseja desativar as colisões. |
| bool:disable | 'true' para desativar colisões, 'false' para ativar colisões.   |

## Retornos

**true** - A função foi executada com sucesso.

**false** - A função falhou ao executar. O jogador especificado não existe.

## Exemplos

```c
new bool:gPlayerVehicleCollision[MAX_PLAYERS];

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/collision", true))
    {
        new string[64];

        format(string, sizeof(string), "Colisão de veículos para você está agora '%s'", (gPlayerVehicleCollision[playerid] == false) ? ("Desativada") : ("Ativada"));
        SendClientMessage(playerid, 0xFFFFFFFF, string);

        gPlayerVehicleCollision[playerid] = !gPlayerVehicleCollision[playerid];

        DisableRemoteVehicleCollisions(playerid, gPlayerVehicleCollision[playerid]);
        return 1;
    }
    return 0;
}
```