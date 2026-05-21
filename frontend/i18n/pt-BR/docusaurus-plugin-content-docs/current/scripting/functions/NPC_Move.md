---
title: NPC_Move
sidebar_label: NPC_Move
description: "Faz um movimento NPC para uma posição específica."
tags: ["npc", "movement"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Faz um movimento NPC para uma posição específica.

| Nome | Descrição |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| npcid | O ID do NPC.                                                                             |
| Float:x | A coordenada X para a qual mover.                                                                   |
| Float:y | A coordenada Y para a qual mover.                                                                   |
| Float:z | A coordenada Z para a qual mover.                                                                   |
| NPC_MOVE_TYPE:moveType | [O tipo de movimento](../resources/npc-constants#movement-types) (padrão: `NPC_MOVE_TYPE_JOG`). |
| Float:moveSpeed | [Velocidade de movimento](../resources/npc-constants#movement-speed) (padrão: `NPC_MOVE_SPEED_AUTO`).  |
| Float:stopRange | Distância até o alvo antes de parar (padrão: 0,2).                                             |

## Retornos

Retorna `true` se a movimentação foi iniciada com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcmove", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_JOG, NPC_MOVE_SPEED_AUTO, 0.2);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d moving to your position (%.2f, %.2f, %.2f)", npcid, x, y, z);
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- O NPC encontrará o caminho para a posição alvo.
- Os tipos de movimento afetam a animação e a velocidade.
- O intervalo de parada determina o quão perto o NPC chega antes de parar.
- Use [NPC_IsMoving](NPC_IsMoving) para verificar se o NPC está se movendo no momento

:::

## Funções Relacionadas

- [NPC_MoveToPlayer](NPC_MoveToPlayer): Mova NPC para seguir um jogador.
- [NPC_StopMove](NPC_StopMove): Interrompe o movimento NPC.
- [NPC_IsMoving](NPC_IsMoving): Verifique se NPC está se movendo.
- [NPC_MoveByPath](NPC_MoveByPath): Mova NPC ao longo de um caminho predefinido.

## Callbacks Relacionadas

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Chamado quando NPC finaliza o movimento.

## Recursos relacionados

- [Constantes NPC](../resources/npc-constants)
