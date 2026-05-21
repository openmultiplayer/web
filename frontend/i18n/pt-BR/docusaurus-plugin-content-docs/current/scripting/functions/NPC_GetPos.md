---
title: NPC_GetPos
sidebar_label: NPC_GetPos
description: "Obtém a posição de um NPC."
tags: ["npc", "position"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém a posição de um NPC.

| Nome | Descrição |
| -------- | -------------------------------------------------------- |
| npcid | O ID do NPC.                                       |
| &Float:x | Variável para armazenar a coordenada X, passada por referência. |
| &Float:y | Variável para armazenar a coordenada Y, passada por referência. |
| &Float:z | Variável para armazenar a coordenada Z, passada por referência. |

## Retornos

Retorna `true` se a posição foi recuperada com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkpos", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:x, Float:y, Float:z;
        NPC_GetPos(npcid, x, y, z);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d position: %.2f, %.2f, %.2f", npcid, x, y, z);
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- Todos os parâmetros de coordenadas são passados por referência e serão modificados.

:::

## Funções Relacionadas

- [NPC_SetPos](NPC_SetPos): Defina a posição NPC.
- [NPC_GetRot](NPC_GetRot): Obtenha rotação NPC.
- [NPC_SetRot](NPC_SetRot): Definir rotação NPC.
- [NPC_GetFacingAngle](NPC_GetFacingAngle): Obtenha o ângulo de visão.

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge.
- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Chamado quando NPC finaliza o movimento.
