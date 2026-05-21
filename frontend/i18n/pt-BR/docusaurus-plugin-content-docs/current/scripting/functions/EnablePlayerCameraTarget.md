---
title: EnablePlayerCameraTarget
sidebar_label: EnablePlayerCameraTarget
description: "Alternar funções de mira de câmera para um jogador."
tags: ["player"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Alternar funções de mira de câmera para um jogador. Desativado por padrão para economizar largura de banda.

| Nome | Descrição |
| ----------- | ------------------------------------------------------------------------ |
| playerid | O ID do jogador para o qual alternar as funções de mira da câmera.           |
| bool:enable | 'true' para ativar funções de direcionamento de câmera e 'false' para desativá-las. |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. O jogador não está conectado.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
     EnablePlayerCameraTarget(playerid, true);
     return 1;
}
```
## Funções Relacionadas

- [IsPlayerCameraTargetEnabled](IsPlayerCameraTargetEnabled): Verifique se o alvo da câmera do jogador está habilitado.
- [GetPlayerCameraTargetVehicle](GetPlayerCameraTargetVehicle): Obtenha o ID do veículo que o jogador está olhando.
- [GetPlayerCameraTargetPlayer](GetPlayerCameraTargetPlayer): Obtenha o ID do jogador que um jogador está olhando.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Obtenha o vetor frontal da câmera do jogador
