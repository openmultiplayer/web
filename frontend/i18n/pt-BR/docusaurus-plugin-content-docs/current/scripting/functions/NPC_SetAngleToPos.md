---
title: NPC_SetAngleToPos
sidebar_label: NPC_SetAngleToPos
description: "Gira um NPC para que fique voltado para uma posição mundial específica."
tags: ["npc", "angle", "position"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Gira um NPC para que fique voltado para uma posição mundial específica.

| Nome | Descrição |
| ------- | ------------------------------------ |
| npcid | O ID do NPC.                   |
| Float:x | Coordenada X da posição alvo. |
| Float:y | Coordenada Y da posição alvo. |
| Float:z | Coordenada Z da posição alvo. |

## Retornos

Retorna `true` se NPC foi girado com sucesso, `false` caso contrário.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/lookatpos", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        NPC_SetAngleToPos(npcid, x + 3.0, y, z);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d now faces %.2f, %.2f, %.2f", npcid, x + 3.0, y, z);
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- Somente o plano horizontal (X/Y) é considerado no cálculo do ângulo de faceamento.
- O NPC não se moverá; ele apenas gira para ficar de frente para a posição.

:::

## Funções Relacionadas

- [NPC_SetFacingAngle](NPC_SetFacingAngle): Defina um valor de ângulo exato.
- [NPC_SetAngleToPlayer](NPC_SetAngleToPlayer): Enfrente um jogador automaticamente.
- [NPC_GetFacingAngle](NPC_GetFacingAngle): Obtenha a face atual do NPC.
- [NPC_Move](NPC_Move): Mova o NPC em direção a uma posição.
