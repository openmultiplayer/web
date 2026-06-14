---
title: NPC_GetFacingAngle
sidebar_label: NPC_GetFacingAngle
description: "Obtém o ângulo frontal de um NPC."
tags: ["npc", "angle"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém o ângulo frontal de um NPC.

| Nome | Descrição |
| ------------ | -------------------------------------------------------- |
| npcid | O ID do NPC.                                       |
| &Float:angle | Variável para armazenar o ângulo de face, passado por referência. |

## Retornos

Retorna `true` se o ângulo de face foi recuperado com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkfacingangle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:angle;
        NPC_GetFacingAngle(npcid, angle);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d facing angle: %.2f", npcid, angle);
        return 1;
    }

    return 0;
}
```
## Notas

:::warning

- O ângulo é passado por referência e será modificado.
- Os ângulos estão em graus (0,0 a 360,0).
- Os ângulos são anti-horários em GTA:SA; 90 graus seria Leste no mundo real, mas em GTA:SA 90 graus é na verdade Oeste. Norte e Sul ainda são 0/360 e 180. Para converter ângulos GTA:SA em ângulos de bússola do mundo real, basta fazer 360 - ângulo.

:::

## Funções Relacionadas

- [NPC_SetFacingAngle](NPC_SetFacingAngle): Defina o ângulo de face NPC.
- [NPC_GetRot](NPC_GetRot): Obtenha rotação 3D completa.
- [NPC_SetRot](NPC_SetRot): Defina a rotação 3D completa.
- [NPC_GetPos](NPC_GetPos): Obtenha a posição NPC.

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge.
