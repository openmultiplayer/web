---
title: NPC_AimAt
sidebar_label: NPC_AimAt
description: "Faz um NPC mirar em uma posição específica."
tags: ["npc", "weapon", "aiming"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Faz um NPC apontar para coordenadas especificadas.

| Nome | Descrição |
| ------------------- | --------------------------------------------- |
| npcid | O ID do NPC |
| Float:pointX | A coordenada X a ser apontada |
| Float:pointY | A coordenada Y a ser apontada |
| Float:pointZ | A coordenada Z a ser apontada |
| bool:shoot | Seja para atirar enquanto mira |
| shootDelay | Atraso entre disparos em milissegundos |
| bool:updateAngle | Se deve atualizar o ângulo de visão do NPC |
| Float:offsetFromX | O deslocamento X da posição de disparo do NPC |
| Float:offsetFromY | O deslocamento Y da posição de disparo do NPC |
| Float:offsetFromZ | O deslocamento Z da posição de disparo do NPC |
| checkInBetweenFlags | Sinalizadores de verificação de entidade para detecção de colisão |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/aim", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        NPC_AimAt(npcid, x, y, z, false, 0, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_NONE);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is now aiming at your position.", npcid);
        return 1;
    }

    if (!strcmp(cmdtext, "/aimfire", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        NPC_AimAt(npcid, x, y, z, true, 800, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_NONE);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is now firing at your position.", npcid);
        return 1;
    }
    return 0;
}
```
## Notas

- O NPC mirará continuamente na posição especificada até que `NPC_StopAim` seja chamado
- Se `shoot` for `true`, o NPC disparará na posição alvo com o atraso especificado
- O parâmetro `updateAngle` controla se o NPC vira para encarar o alvo
- Os parâmetros de deslocamento ajustam o ponto de origem do disparo em relação à posição do NPC

## Funções Relacionadas

- [NPC_AimAtPlayer](NPC_AimAtPlayer): Faça NPC mirar em um jogador
- [NPC_StopAim](NPC_StopAim): Impede NPC de mirar
- [NPC_IsAiming](NPC_IsAiming): Verifique se NPC está mirando no momento
- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): Definir precisão da arma

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara uma arma
