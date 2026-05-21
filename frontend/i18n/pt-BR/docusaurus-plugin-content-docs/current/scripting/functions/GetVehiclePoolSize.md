---
title: GetVehiclePoolSize
sidebar_label: GetVehiclePoolSize
description: "Obtém o veículo mais alto atualmente em uso no servidor."
tags: ["vehicle"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Obtém o veículo mais alto atualmente em uso no servidor. Observe que em SA:MP esta função está quebrada e retornará `0` mesmo quando não houver veículos. open.mp corrige isso para retornar `-1`, mas também descontinua a função em favor de `MAX_VEHICLES` ou `foreach`.

## Exemplos

```c
RepairAllVehicles()
{
    // veículosids começam em 1
    for(new i = 1, j = GetVehiclePoolSize(); i <= j; i++)
    {
        RepairVehicle(i);
    }
}
```
## Funções Relacionadas

- [GetPlayerPoolSize](GetPlayerPoolSize): Obtém o maior playerid conectado ao servidor.
