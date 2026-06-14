---
title: IsValidVehicle
sidebar_label: IsValidVehicle
description: "Verifique se um veículo foi criado."
tags: ["vehicle"]
---


:::note

Esta função não está presente nas bibliotecas antigas empacotadas com o servidor SA-MP, no entanto, as [versões mais recentes das bibliotecas mantidas](https://github.com/pawn-lang/samp-stdlib) contêm esta e outras declarações anteriormente ausentes.

:::

## Descrição

Verifique se um veículo foi criado.

## Parâmetros

| Nome | Descrição |
| --------- | ---------------------------------- |
| vehicleid | O veículo para verificar a existência |

## Valores de retorno

**true** se o veículo existir, caso contrário **false**.

## Exemplo de uso

```c
#if !defined IsValidVehicle
    native IsValidVehicle(vehicleid);
#endif

// Contar veículos
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/countvehicles", true))
    {
        new
            count,
            string[128];

        for (new i = 0; i < MAX_VEHICLES; i++)
        {
            if (IsValidVehicle(i))
            {
                count++;
            }
        }

        format(string, sizeof(string), "* There are %d valid spawned vehicles on this server.", count);
        SendClientMessage(playerid, 0x33CCCCFF, string);
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [GetPlayerVehicleID](GetPlayerVehicleID): Obtenha o ID do veículo em que o jogador está.
- [GetVehicleModel](GetVehicleModel): Obtenha o ID do modelo de um veículo.
