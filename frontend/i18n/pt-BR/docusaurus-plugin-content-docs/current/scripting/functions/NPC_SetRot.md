---
title: NPC_SetRot
sidebar_label: NPC_SetRot
description: "Define a rotação de um NPC em todos os eixos."
tags: ["npc", "rotation", "angle"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define a rotação de um NPC em todos os três eixos (X, Y, Z).

| Nome | Descrição |
| ------- | --------------------------- |
| npcid | O ID do NPC.          |
| Float:x | Rotação do eixo X em graus. |
| Float:y | Rotação do eixo Y em graus. |
| Float:z | Rotação do eixo Z em graus. |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setrandomrot", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:x = float(random(360));
        new Float:y = float(random(360));
        new Float:z = float(random(360));

        NPC_SetRot(npcid, x, y, z);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d rotation randomized", npcid);

        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- Os valores de rotação estão em graus (0-360).
- A rotação do eixo Z afeta a direção de faceamento (o mesmo que [NPC_SetFacingAngle](NPC_SetFacingAngle)).
- As rotações X e Y podem criar NPCs inclinado ou de cabeça para baixo.
- Use [NPC_GetRot](NPC_GetRot) para recuperar os valores de rotação atuais.

:::

## Funções Relacionadas

- [NPC_GetRot](NPC_GetRot): Obtenha rotação NPC.
- [NPC_SetFacingAngle](NPC_SetFacingAngle): Defina apenas o ângulo de face.
- [NPC_GetFacingAngle](NPC_GetFacingAngle): Obtenha o ângulo de visão.
- [NPC_SetPos](NPC_SetPos): Defina a posição NPC.
