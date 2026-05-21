---
title: GetPlayerPoolSize
sidebar_label: GetPlayerPoolSize
description: "Obtém o playerid mais alto atualmente em uso no servidor."
tags: ["player"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Obtém o playerid mais alto atualmente em uso no servidor. Observe que em SA:MP esta função está quebrada e retornará `0` mesmo quando não houver jogadores. open.mp corrige isso para retornar `-1`, mas também descontinua a função em favor de `MAX_PLAYERS` ou `foreach`.

## Exemplos

```c
FreezeAll()
{
    // observe que atribuímos o valor de retorno a uma nova variável (j) para evitar chamar a função a cada iteração
    for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
    {
        TogglePlayerControllable(i, 0);
    }
}
```
## Funções Relacionadas

- [GetVehiclePoolSize](GetVehiclePoolSize): Obtém o maior ID de veículo atualmente em uso no servidor.
- [GetMaxPlayers](GetMaxPlayers): Obtém o número máximo de jogadores que podem ingressar no servidor.
