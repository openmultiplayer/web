---
title: NPC_GetPosMovingTo
sidebar_label: NPC_GetPosMovingTo
description: "Obtém a posição para a qual NPC está se movendo atualmente."
tags: ["npc", "position", "movement"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém a posição para a qual NPC está se movendo atualmente.

| Nome | Descrição |
| -------- | ------------------------------------------------------------------------------ |
| npcid | O ID do NPC |
| &Float:x | Variável para armazenar a coordenada X da posição alvo, passada por referência |
| &Float:y | Variável para armazenar a coordenada Y da posição alvo, passada por referência |
| &Float:z | Variável para armazenar a coordenada Z da posição alvo, passada por referência |

## Retornos

Retorna `true` em caso de sucesso, `false` em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkposmovingto", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        if (!NPC_IsMoving(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "NPC %d is not moving", npcid);

        new Float:x, Float:y, Float:z;
        NPC_GetPosMovingTo(npcid, x, y, z);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d target position: %.2f, %.2f, %.2f", npcid, x, y, z);
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- Todos os parâmetros de coordenadas são passados por referência e serão modificados.
- Esta função retorna a posição alvo para a qual NPC está se movendo, não a posição atual.
- Use [NPC_IsMoving](NPC_IsMoving) para verificar se NPC está se movendo antes de chamar esta função.

:::

## Funções Relacionadas

- [NPC_Move](NPC_Move): Faz com que um NPC se mova para uma posição específica.
- [NPC_IsMoving](NPC_IsMoving): Verifique se NPC está se movendo.
- [NPC_GetPos](NPC_GetPos): Obtenha a posição atual de NPC.
- [NPC_StopMove](NPC_StopMove): Interrompe o movimento NPC.

## Callbacks Relacionadas

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Chamado quando NPC finaliza o movimento.
