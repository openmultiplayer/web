---
title: SetVehicleParamsEx
sidebar_label: SetVehicleParamsEx
description: "Define os parâmetros de um veículo para todos os jogadores."
tags: ["vehicle"]
---


## Descrição

Define os parâmetros de um veículo para todos os jogadores.

| Nome | Descrição |
| --------- | --------------------------------------------------------------- |
| vehicleid | O ID do veículo para definir os parâmetros.                 |
| engine | Estado do motor. 0 - Desligado, 1 - Ligado.                                 |
| lights | Estado leve. 0 - Desligado, 1 - Ligado.                                  |
| alarm | Status do alarme do veículo. Se estiver ativado, o alarme será iniciado. 0 - Desligado, 1 - Ligado. |
| doors | Estado da fechadura da porta. 0 - Desbloqueado, 1 - Bloqueado.                     |
| bonnet | Status do capô (capô). 0 - Fechado, 1 - Aberto.                     |
| boot | Status de inicialização/tronco. 0 - Fechado, 1 - Aberto.                        |
| objective | Alterne a seta objetiva acima do veículo. 0 - Desligado, 1 - Ligado.  |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o veículo não existe.

## Exemplos

```c
// No topo do nosso script, declarando uma variável global
new
    gVehicleAlarmTimer[MAX_VEHICLES] = {0, ...};

// Se estiver configurando um único parâmetro, obtenha os parâmetros atuais para que eles não sejam todos alterados
new
    engine, lights, alarm, doors, bonnet, boot, objective;

// Em algum lugar onde você cria o veículo.
GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
SetVehicleParamsEx(vehicleid, VEHICLE_PARAMS_ON, lights, alarm, doors, bonnet, boot, objective); // Somente o parâmetro do motor foi alterado para VEHICLE_PARAMS_ON (1)

// A função
SetVehicleParamsEx_Fixed(vehicleid, &bool:engine, &bool:lights, &bool:alarm, &bool:doors, &bool:bonnet, &bool:boot, &bool:objective)
{
    SetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
    if (alarm)
    {
        // Mate o cronômetro, redefina o identificador do cronômetro e reinicie-o se já estiver em execução
        KillTimer(gVehicleAlarmTimer[vehicleid]);
        gVehicleAlarmTimer[vehicleid] = 0;
        gVehicleAlarmTimer[vehicleid] = SetTimerEx("DisableVehicleAlarm", 20000, false, "d", vehicleid);
    }
}

forward DisableVehicleAlarm(vehicleid);
public DisableVehicleAlarm(vehicleid)
{
    new
        engine, lights, alarm, doors, bonnet, boot, objective;

    GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
    if (alarm == VEHICLE_PARAMS_ON)
    {
        SetVehicleParamsEx(vehicleid, engine, lights, VEHICLE_PARAMS_OFF, doors, bonnet, boot, objective);
    }

    // Redefinir o identificador do temporizador
    gVehicleAlarmTimer[vehicleid] = 0;
}
```
## Definições

-`VEHICLE_PARAMS_UNSET` (-1)
-`VEHICLE_PARAMS_OFF` (0)
-`VEHICLE_PARAMS_ON` (1)

## Notas

:::tip

- O alarme não será reiniciado quando terminar, você mesmo precisará redefini-lo com esta função.
- As luzes também funcionam durante o dia (somente quando [ManualVehicleEngineAndLights](ManualVehicleEngineAndLights) está ativado).

:::

## Funções Relacionadas

- [GetVehicleParamsEx](GetVehicleParamsEx): Obtenha os parâmetros de um veículo.
- [SetVehicleParamsForPlayer](SetVehicleParamsForPlayer): Defina os parâmetros de um veículo para um jogador.
- [UpdateVehicleDamageStatus](UpdateVehicleDamageStatus): Atualize os danos ao veículo.
