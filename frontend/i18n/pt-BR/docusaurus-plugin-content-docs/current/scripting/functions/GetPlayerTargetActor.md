---
title: GetPlayerTargetActor
sidebar_label: GetPlayerTargetActor
description: "Obtém a identificação de um ator visado por determinado jogador."
tags: ["player"]
---


<VersionWarn version='SA-MP 0.3.7' />

## Descrição

Obtém a identificação de um ator visado por determinado jogador.

| Nome | Descrição |
| -------- | ------------------------------------------ |
| playerid | O ID do jogador cujo alvo será atingido. |

## Retornos

O ID do ator alvo ou `INVALID_ACTOR_ID` se não houver nenhum.

## Exemplos

```c
public OnPlayerUpdate(playerid)
{
    new
        targetActorId = GetPlayerTargetActor(playerid),
        string[32];

    format(string, sizeof(string), "You are aiming at actor id %d", targetActorId);
    SendClientMessage(playerid, -1, string);
    return 1;
}
```
## Notas

:::warning

Não funciona para joypads/controladores e após uma certa distância. Não funciona para o rifle de precisão, pois não trava em nada e, como tal, não pode e não irá devolver um jogador.

:::

## Funções Relacionadas

- [GetPlayerCameraTargetActor](GetPlayerCameraTargetActor): Obtenha o ID do ator (se houver) que um jogador está olhando.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Obtenha o vetor frontal da câmera do jogador

## Callbacks Relacionadas

- [OnPlayerGiveDamageActor](../callbacks/OnPlayerGiveDamageActor): Este callback é chamado quando um jogador causa dano a um ator.
