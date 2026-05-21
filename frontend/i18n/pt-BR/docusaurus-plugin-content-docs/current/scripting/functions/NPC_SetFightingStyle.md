---
title: NPC_SetFightingStyle
sidebar_label: NPC_SetFightingStyle
description: "Define o estilo de luta de um NPC para combate corpo a corpo."
tags: ["npc", "combat", "fighting", "melee"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define o estilo de luta de um NPC para combate corpo a corpo.

| Nome | Descrição |
| ----- | --------------------- |
| npcid | O ID do NPC |
| style | O estilo de luta ID |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setfightingstyle ", true, 18))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new styleid = strval(cmdtext[18]);
        // Estilos de luta válidos: 4, 5, 6, 7, 15, 16
        if (styleid != 4 && styleid != 5 && styleid != 6 && styleid != 7 && styleid != 15 && styleid != 16)
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid style. Valid: 4(Normal), 5(Boxing), 6(KungFu), 7(KneeHead), 15(GrabKick), 16(Elbow)");

        NPC_SetFightingStyle(npcid, FIGHT_STYLE:styleid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d fighting style set to %d", npcid, styleid);

        return 1;
    }
    return 0;
}
```
## Notas

- Os estilos de luta afetam as animações e os danos dos ataques corpo a corpo
- Use NPC_GetFightingStyle para verificar o estilo atual
- O estilo afeta as animações de ataque e a eficácia do combate

## Funções Relacionadas

- [NPC_GetFightingStyle](NPC_GetFightingStyle): Obtenha estilo de luta
- [NPC_MeleeAttack](NPC_MeleeAttack): Faça o ataque NPC
- [NPC_IsMeleeAttacking](NPC_IsMeleeAttacking): Verifique se está atacando
- [NPC_StopMeleeAttack](NPC_StopMeleeAttack): Pare de atacar

## Recursos relacionados

- [Estilos de luta](../resources/fightingstyles)

## Callbacks Relacionadas

- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Chamado quando NPC causa dano a alguém
