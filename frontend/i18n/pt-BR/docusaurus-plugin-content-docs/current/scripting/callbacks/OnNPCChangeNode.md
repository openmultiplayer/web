---
title: OnNPCChangeNode
sidebar_label: OnNPCChangeNode
description: Este callback é chamado quando um NPC tenta mudar de um nó de navegação para outro durante a movimentação baseada em nós.
tags: ["npc", "node", "navigation"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Este callback é chamado quando um NPC tenta mudar de um nó de navegação para outro durante a movimentação baseada em nós. Isso permite que você controle se a mudança de nó deve ser permitida ou negada.

| Nome      | Descrição                                       |
| --------- | ----------------------------------------------- |
| npcid     | O ID do NPC tentando mudar de nó                |
| newnodeid | O ID do novo nó para o qual o NPC quer se mover |
| oldnodeid | O ID do nó atual onde o NPC está                |

## Retornos

Retorne `true` para permitir a mudança de nó, ou `false` para negá-la.

## Exemplos

```c
public OnNPCChangeNode(npcid, newnodeid, oldnodeid)
{
    printf("[NPC] NPC %d mudou do nó %d para o nó %d", npcid, oldnodeid, newnodeid);

    // Notificar jogadores que estão rastreando este NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d mudou do nó %d para o nó %d", npcid, oldnodeid, newnodeid);
        }
    }
    return 1;
}
```

## Notas

- Este callback só é chamado quando NPCs estão usando navegação baseada em nós via `NPC_PlayNode`
- Retornar `false` impedirá o NPC de mudar de nó e pode fazer com que ele pare de navegar
- Os arquivos de nós devem ser carregados usando `NPC_OpenNode` antes que os NPCs possam navegar entre eles

## Funções Relacionadas

As seguintes funções podem ser úteis, pois estão relacionadas a este callback de uma forma ou outra.

- [NPC_PlayNode](../functions/NPC_PlayNode): Iniciar navegação baseada em nós do NPC
- [NPC_OpenNode](../functions/NPC_OpenNode): Abrir um arquivo de nó de navegação
- [NPC_CloseNode](../functions/NPC_CloseNode): Fechar um arquivo de nó de navegação
- [NPC_StopPlayingNode](../functions/NPC_StopPlayingNode): Parar navegação de nó do NPC

## Callbacks Relacionados

- [OnNPCFinishNode](OnNPCFinishNode): Chamado quando o NPC termina de navegar um nó completo
- [OnNPCFinishNodePoint](OnNPCFinishNodePoint): Chamado quando o NPC alcança um ponto específico em um nó
