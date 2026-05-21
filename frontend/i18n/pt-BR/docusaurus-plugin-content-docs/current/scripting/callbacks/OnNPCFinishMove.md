---
title: OnNPCFinishMove
sidebar_label: OnNPCFinishMove
description: "Esse callback é chamado quando um NPC termina de se mover para seu destino."
tags: ["npc", "movement"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Esse callback é chamado quando um NPC termina de se mover para seu destino.

| Nome | Descrição |
| ----- | -------------------------------------- |
| npcid | O ID do NPC que terminou de se mover |

## Exemplos

```c
public OnNPCFinishMove(npcid)
{
    // Encontre todos os jogadores rastreando este NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            new Float:x, Float:y, Float:z;
            NPC_GetPos(npcid, x, y, z);
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d finished moving to position (%.2f, %.2f, %.2f)", npcid, x, y, z);
        }
    }
    return 1;
}
```
## Notas

- Este callback é chamado para todos os tipos de movimento do NPC (caminhar, correr, sprintar, dirigir)
- É chamado quando NPC atinge a posição alvo definida pelas funções de movimento
- Para movimentação baseada em caminho, isso é chamado quando todo o caminho é concluído (consulte `OnNPCFinishMovePath` para callback específico do caminho)
- Para seguir o jogador, isso é chamado quando NPC para de seguir (se a reinicialização automática estiver desabilitada)

## Funções Relacionadas

As funções a seguir podem ser úteis, pois estão relacionadas a esse callback de uma forma ou de outra.

- [NPC_Move](../functions/NPC_Move): Faça NPC se mover para uma posição
- [NPC_MoveToPlayer](../functions/NPC_MoveToPlayer): Faça NPC seguir um jogador
- [NPC_StopMove](../functions/NPC_StopMove): Parar o movimento NPC
- [NPC_IsMoving](../functions/NPC_IsMoving): Verifique se NPC está em movimento no momento

## Callbacks Relacionadas

- [OnNPCFinishNodePoint](OnNPCFinishNodePoint): Chamado quando NPC atinge um ponto de nó
- [OnNPCFinishNode](OnNPCFinishNode): Chamado quando NPC termina a navegação do nó
- [OnNPCFinishMovePath](OnNPCFinishMovePath): Chamado quando NPC termina de se mover ao longo de um caminho
