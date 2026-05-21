---
title: GetPlayerAmmo
sidebar_label: GetPlayerAmmo
description: "Obtém a quantidade de munição da arma atual de um jogador."
tags: ["player"]
---


## Descrição

Obtém a quantidade de munição da arma atual de um jogador.

| Nome | Descrição |
| -------- | --------------------------------------- |
| playerid | O ID do jogador cuja munição deve ser obtida. |

## Retornos

A quantidade de munição na arma atual do jogador.

## Exemplos

```c
ublic OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/myammo", true))
    {
        new
            ammo = GetPlayerAmmo(playerid),
            string[32];

        format(string, sizeof(string), "Your ammo: %i", ammo);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

A munição pode conter valores de 16 bits, portanto valores acima de 32767 retornarão valores errados.

:::

## Funções Relacionadas

- [SetPlayerAmmo](SetPlayerAmmo): Define a munição da arma de um jogador específico.
- [GetPlayerWeaponData](GetPlayerWeaponData): Descubra informações sobre as armas que um jogador possui.
