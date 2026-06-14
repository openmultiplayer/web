---
title: NPC_AimAtPlayer
sidebar_label: NPC_AimAtPlayer
description: "Faz um NPC mirar em um jogador."
tags: ["npc", "weapon", "aiming"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Faz um NPC mirar em um jogador.

| Nome | Descrição |
| ------------------- | --------------------------------------------- |
| npcid | O ID do NPC |
| playerid | O ID do jogador a ser mirado |
| shoot | Seja para atirar enquanto mira |
| shootDelay | Atraso entre disparos em milissegundos |
| updateAngle | Se deve atualizar o ângulo de visão do NPC |
| offsetX | O deslocamento X da posição do alvo |
| offsetY | O deslocamento Y da posição do alvo |
| offsetZ | O deslocamento Z da posição do alvo |
| offsetFromX | O deslocamento X da posição de disparo do NPC |
| offsetFromY | O deslocamento Y da posição de disparo do NPC |
| offsetFromZ | O deslocamento Z da posição de disparo do NPC |
| checkInBetweenFlags | Sinalizadores de verificação de entidade para detecção de colisão |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/hostile", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        NPC_AimAtPlayer(npcid, playerid, true, 800, true, 0.0, 0.0, 0.8, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_PLAYER);
        SendClientMessage(playerid, 0xFF0000FF, "NPC %d is now hostile towards you!", npcid);
        return 1;
    }

    if (!strcmp(cmdtext, "/guard", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        NPC_AimAtPlayer(npcid, playerid, false, 0, true, 0.0, 0.0, 0.0, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_PLAYER);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is now guarding you.", npcid);
        return 1;
    }
    return 0;
}
```
## Notas

- O NPC rastreará continuamente o movimento do jogador enquanto mira
- Se o jogador alvo se desconectar ou ficar inválido, o NPC irá parar de mirar/disparar
- Os parâmetros de deslocamento do alvo permitem mirar partes específicas do corpo (cabeça, tronco, etc.)
- O NPC atualiza automaticamente sua mira conforme o jogador se move
- Use `NPC_IsAimingAtPlayer` para verificar se NPC está visando um jogador específico

## Funções Relacionadas

- [NPC_AimAt](NPC_AimAt): Faça NPC mirar em uma posição
- [NPC_StopAim](NPC_StopAim): Impede que NPC mire
- [NPC_IsAimingAtPlayer](NPC_IsAimingAtPlayer): Verifique se NPC está mirando em um jogador
- [NPC_SetWeaponAccuracy](NPC_SetWeaponAccuracy): Definir precisão da arma

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara uma arma
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Chamado quando NPC causa dano a um jogador
