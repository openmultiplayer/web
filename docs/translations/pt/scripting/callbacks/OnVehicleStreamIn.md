---
title: OnVehicleStreamIn
description: Essa callback é chamada quando um veículo entra na área visível de um jogador.
tags: ["vehicle"]
---

<VersionWarnPT name='callback' version='SA-MP 0.3.a' />

## Descrição

Essa callback é chamada quando um veículo entra na área visível de um jogador.

| Nome        | Descrição                                                       |
| ----------- | --------------------------------------------------------------- |
| vehicleid   | ID do veículo que acabara de entrar na área visível do jogador. |
| forplayerid | ID do jogador cujo o carro entrou na área visível do jogador.   |

## Retornos

Sempre é chamada primeiro em Filterscripts.

## Exemplos

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), " Você agora pode ver o veículo de ID %d.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notas

<TipNPCCallbacksPT />

## Funções Relacionadas
