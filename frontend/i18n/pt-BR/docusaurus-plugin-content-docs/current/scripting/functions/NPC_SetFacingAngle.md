---
title: NPC_SetFacingAngle
sidebar_label: NPC_SetFacingAngle
description: "Define o ângulo de orientação de um NPC."
tags: ["npc", "angle", "rotation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define o ângulo de face de um NPC.

| Nome | Descrição |
| ----------- | ------------------------------------ |
| npcid | O ID do NPC.                   |
| Float:angle | O ângulo de face em graus (0-360). |

## Retornos

Retorna `true` se o ângulo de face foi definido com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setfacingangle ", true, 16))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:angle = floatstr(cmdtext[16]);
        if (angle < 0.0 || angle > 360.0)
            return SendClientMessage(playerid, 0xFF0000FF, "Angle must be between 0.0 and 360.0.");

        NPC_SetFacingAngle(npcid, angle);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d facing angle set to %.1f", npcid, angle);

        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- O ângulo é medido em graus (0-360).
- Use [NPC_GetFacingAngle](NPC_GetFacingAngle) para obter o ângulo de face atual.
- Gira instantaneamente NPC sem animação.

:::

## Funções Relacionadas

- [NPC_GetFacingAngle](NPC_GetFacingAngle): Obtenha o ângulo de visão de NPC.
- [NPC_SetRot](NPC_SetRot): Definir rotação NPC (X, Y, Z).
- [NPC_GetRot](NPC_GetRot): Obtenha rotação NPC.
- [NPC_SetPos](NPC_SetPos): Defina a posição NPC.
