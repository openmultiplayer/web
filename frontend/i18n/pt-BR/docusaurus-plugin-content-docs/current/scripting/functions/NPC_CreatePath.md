---
title: NPC_CreatePath
sidebar_label: NPC_CreatePath
description: "Cria um novo caminho NPC."
tags: ["npc", "path"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Cria um novo caminho que pode ser usado para navegação NPC.

## Retornos

Retorna o ID do caminho criado.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/createpatrol", true))
    {
        new pathid = NPC_CreatePath();
        g_PatrolPath = pathid;

        // Se você quiser, você já pode adicionar pontos ao caminho aqui
        // NPC_AddPointToPath(g_PatrolPath, x, y, z, 1,5)
        // NPC_AddPointToPath(g_PatrolPath, x1, y1, z1, 1,5)
        // NPC_AddPointToPath(g_PatrolPath, x2, y2, z2, 1,5)

        SendClientMessage(playerid, 0x00FF00FF, "Created a patrol path %d", g_PatrolPath);

        return 1;
    }
    return 0;
}
```
## Notas

- O caminho é sempre criado vazio, use `NPC_AddPointToPath` para adicionar waypoints
- Vários NPCs podem usar o mesmo caminho simultaneamente
- Os caminhos permanecem válidos até serem destruídos com `NPC_DestroyPath`

## Funções Relacionadas

- [NPC_DestroyPath](NPC_DestroyPath): Destruir um caminho
- [NPC_AddPointToPath](NPC_AddPointToPath): Adicionar waypoint ao caminho
- [NPC_MoveByPath](NPC_MoveByPath): Faça NPC seguir um caminho
- [NPC_GetPathCount](NPC_GetPathCount): Obtenha o número total de caminhos

## Callbacks Relacionadas

- [OnNPCFinishMovePath](../callbacks/OnNPCFinishMovePath): Chamado quando NPC termina um caminho
