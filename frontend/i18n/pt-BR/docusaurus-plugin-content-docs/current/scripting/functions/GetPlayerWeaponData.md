---
title: GetPlayerWeaponData
sidebar_label: GetPlayerWeaponData
description: "Pegue a arma e a munição no slot de arma de um jogador específico (por exemplo,"
tags: ["player"]
---


## Descrição

Obtenha a arma e a munição no slot de arma de um jogador específico (por exemplo, a arma no slot 'SMG').

| Nome | Descrição |
| ---------------- | ------------------------------------------------------------------------------------------ |
| playerid | O ID do jogador cujos dados da arma devem ser recuperados.                                        |
| WEAPON_SLOT:slot | O [slot de arma](../resources/weaponslots) para obter dados para (0-12).                        |
| &WEAPON:weapons | Uma variável na qual armazenar a [arma ID](../resources/weaponids), passada por referência. |
| &ammo | Uma variável na qual armazenar a munição, passada por referência.                                |

## Retornos

**1** - A função foi executada com sucesso.

**0** - A função não foi executada. O jogador não está conectado e/ou o slot da arma especificado é inválido (válido é 0-12).

## Exemplos

```c
// Uso comum: obtenha todas as armas e armazene informações em uma matriz contendo 13 slots
// O primeiro valor é o ID da arma e o segundo é a munição

new weapons[13][2];

for (new i = 0; i <= 12; i++)
{
    GetPlayerWeaponData(playerid, WEAPON_SLOT:i, weapons[i][0], weapons[i][1]);
}
```
Outro exemplo:

```c
new
    weaponid,
    ammo;

// Obtenha o ID da arma e munição do jogador no slot PISTOL
GetPlayerWeaponData(playerid, WEAPON_SLOT_PISTOL, weaponid, ammo);
```
## Notas

:::tip

Armas antigas sem munição ainda são devolvidas.

:::

## Funções Relacionadas

- [GetPlayerWeapon](GetPlayerWeapon): Verifique qual arma o jogador está segurando no momento.
- [GivePlayerWeapon](GivePlayerWeapon): Dê uma arma ao jogador.

## Recursos relacionados

- [Slots para armas](../resources/weaponslots)
- [Arma IDs](../resources/weaponids)
