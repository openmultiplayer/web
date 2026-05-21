---
title: GetWeaponSlot
sidebar_label: GetWeaponSlot
description: "Obtém o slot de uma arma."
tags: ["weapon"]
---


<versionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o slot de uma arma.

| Nome | Descrição |
| --------------- | ---------------------------------------- |
| WEAPON:weaponid | O ID da arma para obter o slot. |

## Retornos

O número do [slot de arma](../resources/weaponslots) (0 - 12)

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/weaponslot", true) == 0)
    {
        new WEAPON:weaponid = GetPlayerWeapon(playerid); // armazenará o ID da arma que o jogador está segurando no momento
        new WEAPON_SLOT:slot = GetWeaponSlot(weaponid); // irá armazenar o id do slot da arma
        SendClientMessage(playerid, -1, "Your weapon is occupying the slot %d.", slot); // envia uma mensagem formatada para o jogador
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [GetPlayerWeapon](GetPlayerWeapon): Obtém o ID da arma que o jogador está segurando no momento.
- [GetPlayerWeaponData](GetPlayerWeaponData): Obtenha a arma e a munição no slot de arma de um jogador específico (por exemplo, a arma no slot 'SMG').
- [GetPlayerAmmo](GetPlayerAmmo): Obtém a quantidade de munição na arma atual de um jogador.
- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): Define qual arma (que o jogador já possui) o jogador está segurando.
- [ResetPlayerWeapon](ResetPlayerWeapons): Remove todas as armas de um jogador.
- [RemovePlayerWeapon](RemovePlayerWeapon): Remove uma arma específica de um jogador.

## Recursos relacionados

- [Slots para armas](../resources/weaponslots).
