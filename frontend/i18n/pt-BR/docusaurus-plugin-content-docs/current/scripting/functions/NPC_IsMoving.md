---
title: NPC_IsMoving
sidebar_label: NPC_IsMoving
description: "Verifica se um NPC está em movimento no momento."
tags: ["npc", "movement"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um NPC está em movimento no momento.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se NPC estiver em movimento, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkmoving", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isMoving = NPC_IsMoving(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is moving: %s", npcid, isMoving ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna true quando NPC está andando, correndo ou dirigindo para um destino
- Retorna false quando o NPC chega ao seu destino ou é parado

## Funções Relacionadas

- [NPC_Move](NPC_Move): Faça com que NPC se mova para a posição
- [NPC_StopMove](NPC_StopMove): Parar o movimento NPC
- [NPC_MoveToPlayer](NPC_MoveToPlayer): Faça NPC seguir o jogador
- [NPC_MoveByPath](NPC_MoveByPath): Faça com que NPC siga o caminho

## Callbacks Relacionadas

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Chamado quando NPC termina o movimento
