---
title: GetPlayerCameraTargetActor
sidebar_label: GetPlayerCameraTargetActor
description: "Permite recuperar o ID do ator que o jogador está olhando (em qualquer)."
tags: ["player", "camera", "actor"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Permite recuperar o ID do ator que o jogador está olhando (em qualquer).

| Nome | Descrição |
| -------- | ------------------------------------------------ |
| playerid | O ID do jogador do qual obter o ator alvo. |

## Retornos

O ID do ator que o jogador está olhando.

## Exemplos

```c
new bool:ActorHandsup[MAX_ACTORS];

public OnPlayerConnect(playerid)
{
    EnablePlayerCameraTarget(playerid, true);
    return 1;
}

public OnPlayerUpdate(playerid)
{
    // Descubra para qual ator (se houver) o jogador está OLHANDO
    new playerTargetActor = GetPlayerCameraTargetActor(playerid);

    // Se ele ESTÁ olhando para ALGUM ator
    if (playerTargetActor != INVALID_ACTOR_ID)
    {
        // Guarde a arma do jogador para que possamos verificar se ele está armado
        new playerWeapon = GetPlayerWeapon(playerid);

        // Pegue as chaves do jogador para que possamos verificar se ele está mirando
        new KEY:keys, updown, leftright;
        GetPlayerKeys(playerid, keys, updown, leftright);

        // Se o ator ainda não levantou as mãos E o jogador ESTÁ ARMADO
        if (!ActorHandsup[playerTargetActor] && playerWeapon >= 22 && playerWeapon <= 42 && keys & KEY_AIM)
        {
            // Aplicar animação 'mãos ao alto'
            ApplyActorAnimation(playerTargetActor, "SHOP", "SHP_HandsUp_Scr",4.1,0,0,0,1,0);

            // Defina 'ActorHandsup' como verdadeiro, para que a animação não continue sendo reaplicada
            ActorHandsup[playerTargetActor] = true;
        }
    }
    return 1;
}
```
## Notas

:::tip

Esta função informa apenas para qual ator (se houver) o jogador está olhando. Para descobrir se eles estão mirando neles, você precisa usar GetPlayerTargetActor.

:::

:::warning

Esta função está desabilitada por padrão para economizar largura de banda. Use [EnablePlayerCameraTarget](EnablePlayerCameraTarget) para habilitá-lo para cada jogador.

:::

## Funções Relacionadas

- [GetPlayerTargetActor](GetPlayerTargetActor): Obtém o id de um ator que é apontado por determinado jogador.
- [GetPlayerCameraTargetPlayer](GetPlayerCameratargetPlayer): Obtenha o ID do jogador que um jogador está olhando.
- [GetPlayerCameraTargetVehicle](GetPlayerCameraTargetVehicle): Obtenha o ID do veículo que o jogador está olhando.
- [GetPlayerCameraTargetObject](GetPlayerCameraTargetObject): Obtenha o ID do objeto que um jogador está olhando.
- [GetPlayerCameraFrontVector](GetPlayerCaemraFrontVector): Obtenha o vetor frontal da câmera do jogador
