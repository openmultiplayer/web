---
title: SetPlayerAmmo
sidebar_label: SetPlayerAmmo
description: "Defina a munição da arma de um jogador."
tags: ["player"]
---


## Descrição

Defina a munição da arma de um jogador.

| Nome | Descrição |
| --------------- | -------------------------------------------------------------------------------- |
| playerid | O ID do jogador para definir a munição da arma.                                  |
| WEAPON:weaponid | O ID da arma para definir a munição. (não o slot de armas como no samp inclui) |
| ammo | A quantidade de munição a ser definida.                                                       |

## Retornos

**1** - A função foi executada com sucesso. O sucesso também é retornado quando o slot da arma especificado é inválido (não 0-12).

**0** - A função não foi executada. O jogador não está conectado.

## Exemplos

```c
SetPlayerAmmo(playerid, WEAPON_SHOTGUN, 100); // Defina munição de espingarda para balas 100
```
## Notas

:::tip

O parâmetro 'weaponslot' é um erro de digitação no sa-mp include. Você deve usar a arma ID e não o slot da arma cuja munição deseja definir.

:::

:::tip

Defina a munição como 0 para remover uma arma do inventário de um jogador. Observe que a arma ainda aparecerá em [GetPlayerWeaponData](GetPlayerWeaponData), embora com 0 munição.

:::

## Funções Relacionadas

- [GetPlayerAmmo](GetPlayerAmmo): Verifique quanta munição um jogador tem no slot especificado.
- [GivePlayerWeapon](GivePlayerWeapon): Dê uma arma ao jogador.
- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): Define a arma armada de um jogador.
