---
title: NPC_StopMeleeAttack
sidebar_label: NPC_StopMeleeAttack
description: "Impede que um NPC execute ataques corpo a corpo."
tags: ["npc", "melee", "fighting"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Impede que um NPC execute ataques corpo a corpo.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcstopmelee", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:success = NPC_StopMeleeAttack(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d stop melee attack: %s", npcid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}

```
## Notas

- Isso interrompe imediatamente qualquer animação de ataque corpo a corpo em andamento
- O NPC retornará à sua posição normal
- Não tem efeito se o NPC não estiver atacando no momento

## Funções Relacionadas

- [NPC_MeleeAttack](NPC_MeleeAttack): Iniciar ataque corpo a corpo
- [NPC_IsMeleeAttacking](NPC_IsMeleeAttacking): Verifique se NPC está atacando
- [NPC_SetFightingStyle](NPC_SetFightingStyle): Definir estilo de luta
- [NPC_GetFightingStyle](NPC_GetFightingStyle): Obtenha estilo de luta

## Callbacks Relacionadas

- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Chamado quando NPC causa dano a alguém
