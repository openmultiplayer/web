---
title: NPC_UpdateNodePoint
sidebar_label: NPC_UpdateNodePoint
description: "Atualiza um NPC para um ponto específico no nó atualmente em execução."
tags: ["npc", "node"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Atualiza um NPC para um ponto específico no nó atualmente em execução.

| Nome | Descrição |
| ------- | ------------------------------------- |
| npcid | O ID do NPC |
| pointid | O ponto ID no nó para o qual atualizar |

## Retornos

Retorna `true` se a atualização foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcupdatenodepoint ", true, 20))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new pointid = strval(cmdtext[20]);

        new bool:success = NPC_UpdateNodePoint(npcid, pointid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d update node point %d: %s", npcid, pointid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```
## Notas

- O NPC deve estar atualmente reproduzindo um nó
- O ponto ID deve existir no nó atual
- Use isto para pular para pontos de referência específicos na navegação
- Útil para teletransportar NPCs dentro do caminho atual

## Funções Relacionadas

- [NPC_PlayNode](NPC_PlayNode): Comece a reproduzir um nó
- [NPC_SetNodePoint](NPC_SetNodePoint): Definir coordenadas do ponto do nó
- [NPC_GetNodePointPosition](NPC_GetNodePointPosition): Obter posição do ponto
- [NPC_IsPlayingNode](NPC_IsPlayingNode): Verifique se o nó está sendo reproduzido

## Callbacks Relacionadas

- [OnNPCFinishNode](../callbacks/OnNPCFinishNode): Chamado quando NPC finaliza um nó
