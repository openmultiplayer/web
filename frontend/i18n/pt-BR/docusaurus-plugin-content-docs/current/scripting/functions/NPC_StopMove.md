---
title: NPC_StopMove
sidebar_label: NPC_StopMove
description: "Impede que um NPC se mova."
tags: ["npc", "movement"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Impede que um NPC se mova para seu destino atual.

| Nome | Descrição |
| ----- | ------------------ |
| npcid | O ID do NPC. |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcstopmove", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:success = NPC_StopMove(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d stop moving: %s", npcid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```
## Notas

- Isso para o NPC em sua posição atual.
- Se o NPC não estiver em movimento, esta função não terá efeito.
- O NPC permanecerá na posição parada até receber um novo comando de movimento.
- Use [NPC_IsMoving](NPC_IsMoving) para verificar se um NPC está em movimento no momento.

## Funções Relacionadas

- [NPC_Move](NPC_Move): Faça NPC se mover para uma posição.
- [NPC_IsMoving](NPC_IsMoving): Verifique se NPC está se movendo.
- [NPC_MoveByPath](NPC_MoveByPath): Faça NPC seguir um caminho.
- [NPC_SetPos](NPC_SetPos): Defina a posição NPC instantaneamente.

## Callbacks Relacionadas

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Chamado quando NPC finaliza o movimento.
