---
title: GetPlayerWeaponState
sidebar_label: GetPlayerWeaponState
description: "Verifique o estado da arma de um jogador."
tags: ["player"]
---


## Descrição

Verifique o estado da arma de um jogador.

| Nome | Descrição |
| -------- | --------------------------------------------------- |
| playerid | O ID do jogador para obter o estado da arma. |

## Retornos

O [estado da arma do jogador](../resources/weaponstates).

**0** se o jogador especificado não existir.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/wstate", true))
    {
        new WEAPONSTATE:state = GetPlayerWeaponState(playerid);

        static weaponStates[4][64] =
        {
            "Current weapon has no ammo remaining",
            "Current weapon has a single bullet left",
            "Current weapon has more than one bullet left",
            "Reloading current weapon"
        };

        new string[144];
        format(string, sizeof(string), "Your weapon state: %s", weaponStates[state]);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [GivePlayerWeapon](GivePlayerWeapon): Dê uma arma ao jogador.

## Recursos relacionados

- [Estados da Arma](../resources/weaponstates)
