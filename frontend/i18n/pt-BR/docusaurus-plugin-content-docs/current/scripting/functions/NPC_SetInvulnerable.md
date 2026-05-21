---
title: NPC_SetInvulnerable
sidebar_label: NPC_SetInvulnerable
description: "Define se um NPC é invulnerável a danos."
tags: ["npc", "invulnerable", "damage", "protection"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define se um NPC é invulnerável a danos.

| Nome | Descrição |
| ------ | --------------------------------------------------- |
| npcid | O ID do NPC |
| toggle | true para tornar invulnerável, false para tornar vulnerável |

## Retornos

Retorna `true` se a invulnerabilidade foi definida com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/toggleinvulnerable", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:invulnerable = NPC_IsInvulnerable(npcid);
        NPC_SetInvulnerable(npcid, !invulnerable);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d invulnerable: %s", npcid, !invulnerable ? "Enabled" : "Disabled");

        return 1;
    }
    return 0;
}

```
## Notas

- O invulnerável NPCs não sofrerá nenhum dano de armas, explosões ou outras fontes de dano
- Esta configuração persiste até ser alterada ou o NPC ser destruído
- O invulnerável NPCs ainda pode ser movido, teletransportado ou ter suas animações alteradas

## Funções Relacionadas

- [NPC_IsInvulnerable](NPC_IsInvulnerable): Verifique se um NPC é invulnerável
- [NPC_SetHealth](NPC_SetHealth): Definir integridade de NPC
- [NPC_GetHealth](NPC_GetHealth): Obtenha saúde de NPC
- [NPC_SetArmour](NPC_SetArmour): Definir armadura NPC

## Callbacks Relacionadas

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): Chamado quando NPC sofre dano (não chamado para NPCs invulnerável)
- [OnNPCDeath](../callbacks/OnNPCDeath): Chamado quando NPC morre (NPCs invulnerável não pode morrer)
