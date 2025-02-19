---
title: OnVehiclePaintjob
sidebar_label: OnVehiclePaintjob
description: Executada quando um jogador pré-visualiza um paintjob na garagem (modshop).
tags: ["vehicle"]
---

:::tip

[Paintjob](../resources/paintjobs) são as pinturas personalizadas, igual aquelas das garagens low-rider. 

:::


## Descrição

Executada quando um jogador pré-visualiza um paintjob na garagem (modshop). Cuidado, essa callback não é executada quando o jogador compra o paintjob!

| Nome       | Descrição                                                        |
| ---------- | ---------------------------------------------------------------- |
| playerid   | ID do jogador que está mudando o paintjob do veículo.            |
| vehicleid  | ID do veículo que está mudando o paintjob.                       |
| paintjobid | ID do novo paintjob.                                             |

## Retornos

Sempre executada primeiro no gamemode, retornar 0 irá impedir outros scripts de acessar a mesma.

## Exemplos

```c
public OnVehiclePaintjob(playerid, vehicleid, paintjobid)
{
    new string[128];
    format(string, sizeof(string), "Você mudou o paintjob do seu veículo para %d!", paintjobid);
    SendClientMessage(playerid, 0x33AA33AA, string);
    return 1;
}
```

## Notas

:::tip

Essa callback não é executada pela função ChangeVehiclePaintjob. Você deve utilizar o OnVehicleChangePaintjob juntamente com o vSync para saber exatamente quando o player fez a compra.

:::

## Funções Relacionadas

- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Troca o paintjob de um veículo.
- [ChangeVehicleColor](../functions/ChangeVehicleColor): Define uma cor para o veículo.

## Callbacks Relacionadas

- [OnVehicleRespray](OnVehicleRespray): Executada quando um veículo é pintado/repintado.
- [OnVehicleMod](OnVehicleMod): Executada quando um veículo é modificado.
