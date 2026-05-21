---
title: OnNPCDestroy
sidebar_label: OnNPCDestroy
description: "Este callback é chamado quando um NPC é destruído."
tags: ["npc"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Esse callback é chamado quando um NPC é destruído e removido do servidor.

| Nome | Descrição |
| ----- | ------------------------------------ |
| npcid | O ID do NPC que foi destruído |

## Exemplos

```c
public OnNPCDestroy(npcid)
{
    printf("[NPC] NPC %d has been destroyed", npcid);

    // Limpe qualquer jogador que esteja rastreando este NPC e notifique
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            PlayerNPC[playerid] = INVALID_NPC_ID;
            SendClientMessage(playerid, 0xFF0000FF, "Your tracked NPC %d has been destroyed", npcid);
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d has been destroyed", npcid);
        }
    }
    return 1;
}

```
## Notas

- Este callback é chamado imediatamente antes de NPC ser removido do servidor
- O NPC será desconectado e seu slot de jogador liberado após este callback

## Funções Relacionadas

As funções a seguir podem ser úteis, pois estão relacionadas a esse callback de uma forma ou de outra.

- [NPC_Create](../functions/NPC_Create): Crie um novo NPC
- [NPC_Destroy](../functions/NPC_Destroy): Destrua um NPC existente
- [NPC_IsValid](../functions/NPC_IsValid): Verifique se NPC ID é válido

## Callbacks Relacionadas

- [OnNPCCreate](OnNPCCreate): Chamado quando um NPC é criado
