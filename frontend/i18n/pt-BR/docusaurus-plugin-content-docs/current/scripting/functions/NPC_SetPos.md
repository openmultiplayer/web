---
title: NPC_SetPos
sidebar_label: NPC_SetPos
description: "Define a posição de um NPC."
tags: ["npc", "position"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define a posição de um NPC instantaneamente sem animação de movimento.

| Nome | Descrição |
| ------- | ------------------ |
| npcid | O ID do NPC. |
| Float:x | A coordenada X.  |
| Float:y | A coordenada Y.  |
| Float:z | A coordenada Z.  |

## Retornos

Retorna `true` em caso de sucesso, `false` em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setposhere", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        NPC_SetPos(npcid, x + 2.0, y, z);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d teleported to your position", npcid);

        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- Esta função teletransporta o NPC instantaneamente sem animação
- Qualquer movimento atual é interrompido ao definir a posição
- Use `NPC_Move` se quiser que o NPC caminhe até uma posição

:::

## Funções Relacionadas

- [NPC_GetPos](NPC_GetPos): Obtenha a posição NPC.
- [NPC_Move](NPC_Move): Mova NPC para a posição com animação.
- [NPC_SetRot](NPC_SetRot): Definir rotação NPC.
- [NPC_SetFacingAngle](NPC_SetFacingAngle): Defina a direção voltada para NPC.

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge.
