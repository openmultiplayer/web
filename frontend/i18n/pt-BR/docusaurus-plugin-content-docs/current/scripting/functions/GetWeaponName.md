---
title: GetWeaponName
sidebar_label: GetWeaponName
description: "Obtenha o nome de uma arma."
tags: []
---


## Descrição

Obtenha o nome de uma arma.

| Nome | Descrição |
| --------------------- | ----------------------------------------------------------------------- |
| WEAPON:weaponid | O ID da arma cujo nome deseja obter.                                |
| weapon[] | Um array para armazenar o nome da arma, passado por referência.            |
| len = sizeof (weapon) | O comprimento máximo do nome da arma a ser armazenado. Deve ser sizeof(nome). |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. A arma especificada não existe.

O nome da arma é armazenado no array especificado.

## Exemplos

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Declarações de variáveis, com killerName tendo o valor padrão de "World".
    new
        weaponName[32],
        string[64],
        playerName[MAX_PLAYER_NAME],
        killerName[MAX_PLAYER_NAME] = "World";

    // Obtenha a arma/motivo e o nome do jogador
    GetWeaponName(reason, weaponName, sizeof(weaponName));
    GetPlayerName(playerid, playerName, sizeof(playerName));

    // Verifique se o jogador foi morto por outro jogador ou foi por causa do ambiente
    if (killerid != INVALID_PLAYER_ID)
    {
        // Esvaziamos a string killerName definindo o primeiro índice como EOS (fim da string)
        killerName[0] = EOS;
        // Obtenha o nome do assassino
        GetPlayerName(killerid, killerName, sizeof(killerName));
    }

    // Envie uma mensagem para o chat público informando que o X causou a morte de Y tendo Z como motivo
    format(string, sizeof(string), "%s (%i) has wasted %s (%i) using a %s.", killerName, killerid, playerName, playerid, weaponName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```
## Funções Relacionadas

- [GetPlayerWeapon](GetPlayerWeapon): Verifique qual arma o jogador está segurando no momento.
- [AllowInteriorWeapons](AllowInteriorWeapons): Determine se armas podem ser usadas em interiores.
- [GivePlayerWeapon](GivePlayerWeapon): Dê uma arma ao jogador.
