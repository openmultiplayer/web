---
title: NPC_GetRot
sidebar_label: NPC_GetRot
description: "Obtém a rotação de um NPC."
tags: ["npc", "rotation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém a rotação de um NPC no espaço 3D.

| Nome | Descrição |
| -------- | -------------------------------------------------------------- |
| npcid | O ID do NPC.                                             |
| &Float:x | Variável para armazenar a rotação X (passo), passada por referência. |
| &Float:y | Variável para armazenar a rotação Y (yaw), passada por referência.   |
| &Float:z | Variável para armazenar a rotação Z (roll), passada por referência.  |

## Retornos

Retorna `true` se a rotação foi recuperada com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkrot", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:rotX, Float:rotY, Float:rotZ;
        NPC_GetRot(npcid, rotX, rotY, rotZ);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d rotation: X=%.2f, Y=%.2f, Z=%.2f", npcid, rotX, rotY, rotZ);
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- Todos os parâmetros de rotação são passados por referência e serão modificados.
- X = inclinação (para cima/para baixo), Y = guinada (esquerda/direita), Z = rotação (inclinação).
- Para direção de faceamento simples, use [NPC_GetFacingAngle](NPC_GetFacingAngle).

:::

## Funções Relacionadas

- [NPC_SetRot](NPC_SetRot): Definir rotação NPC.
- [NPC_GetFacingAngle](NPC_GetFacingAngle): Obtenha apenas o ângulo frontal.
- [NPC_SetFacingAngle](NPC_SetFacingAngle): Defina apenas o ângulo de face.
- [NPC_GetPos](NPC_GetPos): Obtenha a posição NPC.

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge.
