---
title: OnNPCCreate
sidebar_label: OnNPCCreate
description: "Este callback é chamado quando um NPC é criado com sucesso."
tags: ["npc"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Esse callback é chamado quando um NPC é criado e adicionado com êxito ao servidor.

| Nome | Descrição |
| ----- | ---------------------------------- |
| npcid | O ID do NPC que foi criado |

## Exemplos

```c
public OnNPCCreate(npcid)
{
    printf("[NPC] NPC %d has been created", npcid);

    // Notifique todos os jogadores conectados
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d has been created", npcid);
    }
    return 1;
}
```
## Notas

- Este callback é chamado imediatamente após o NPC ser criado, mas antes de ser gerado
- O NPC precisará ser gerado usando `NPC_Spawn` para se tornar visível no mundo do jogo

## Funções Relacionadas

As funções a seguir podem ser úteis, pois estão relacionadas a esse callback de uma forma ou de outra.

- [NPC_Create](../functions/NPC_Create): Crie um novo NPC
- [NPC_Destroy](../functions/NPC_Destroy): Destrua um NPC existente
- [NPC_Spawn](../functions/NPC_Spawn): Gera o NPC no mundo do jogo

## Callbacks Relacionadas

- [OnNPCDestroy](OnNPCDestroy): Chamado quando um NPC é destruído
- [OnNPCSpawn](OnNPCSpawn): Chamado quando um NPC é gerado
