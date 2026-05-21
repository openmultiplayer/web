---
title: GetPlayerWeapon
sidebar_label: GetPlayerWeapon
description: "Retorna o ID da arma que o jogador está segurando no momento."
tags: ["player"]
---


## Descrição

Retorna o ID da arma que o jogador está segurando no momento.

| Nome | Descrição |
| -------- | --------------------------------------------------------- |
| playerid | O ID do jogador para obter a arma atualmente em poder. |

## Retornos

O ID da arma atual do jogador. Retorna -1 se o jogador especificado não existir.

## Exemplos

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Verifique se o killerid não é um jogador inválido (o que significa que está conectado).
    if (killerid != INVALID_PLAYER_ID)
    {
        // A constante WEAPON_MINIGUN é pré-definida na biblioteca padrão e é igual a 38.
        if (GetPlayerWeapon(killerid) == WEAPON_MINIGUN)
        {
            // Banir se ele estiver com uma minigun
            Ban(killerid);
        }
    }
    return 1;
}
```
## Notas

:::tip

Quando o estado do jogador é `PLAYER_STATE_DRIVER` ou `PLAYER_STATE_PASSENGER` esta função retorna a arma que o jogador segurava antes de entrar no veículo. Se um cheat for usado para gerar uma arma dentro de um veículo, esta função não irá reportá-lo.

:::

:::warning

Às vezes, o resultado pode ser -1, que é uma arma inválida ID. As circunstâncias disso ainda não são conhecidas, mas é melhor descartar as informações quando a arma devolvida for -1.

:::

## Funções Relacionadas

- [GetPlayerWeaponData](GetPlayerWeaponData): Descubra informações sobre as armas que um jogador possui.
- [GivePlayerWeapon](GivePlayerWeapon): Dê uma arma ao jogador.
- [ResetPlayerWeapons](ResetPlayerWeapons): Remova todas as armas de um jogador.
- [RemovePlayerWeapon](RemovePlayerWeapon): Remove uma arma específica de um jogador.

## Recursos relacionados

- [Arma IDs](../resources/weaponids)
