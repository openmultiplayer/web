---
title: ManualVehicleEngineAndLights
sidebar_label: ManualVehicleEngineAndLights
description: Use esta função em (OnGameModeInit) para informar a todos os clientes que o script controlará os motores e as luzes do veículo. 
tags: ["vehicle"]
---

## Description

Use esta função antes que qualquer jogador se conecte (OnGameModeInit) para informar a todos os clientes que o script controlará os motores e as luzes do veículo. Isso evita que o jogo ligue / desligue automaticamente o motor quando os jogadores entram/saem dos veículos e os faróis acendem automaticamente quando está escuro. 

## Exemplos

```c
public OnGameModeInit()
{
    ManualVehicleEngineAndLights();
    return 1;
}
```

## Notas

:::warning

Não é possível reverter esta função depois de ter sido usada. Você deve usá-lo ou não usá-lo. 

:::

:::tip

Você também pode ativar ou desativar esta função por meio do [config.json](../../server/config.json) 

```json
"use_manual_engine_and_lights": true,
```

:::

## Funções relacionadas 

- [SetVehicleParamsEx](SetVehicleParamsEx): Define os parâmetros de um veículo para todos os jogadores. 
- [GetVehicleParamsEx](GetVehicleParamsEx): Obtém os parâmetros de um veículo. 
- [SetVehicleParamsForPlayer](SetVehicleParamsForPlayer): Define os parâmetros de um veículo para um jogador. 
