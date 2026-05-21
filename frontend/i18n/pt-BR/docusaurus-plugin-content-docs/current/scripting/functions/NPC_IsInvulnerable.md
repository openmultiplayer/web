---
title: NPC_IsInvulnerable
sidebar_label: NPC_IsInvulnerable
description: "Verifica se um NPC é invulnerável a danos."
tags: ["npc", "invulnerable", "damage", "protection"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um NPC é invulnerável a danos.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna true se NPC for invulnerável, false caso contrário.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkinvulnerable", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isInvulnerable = NPC_IsInvulnerable(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is invulnerable: %s", npcid, isInvulnerable ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna o status de invulnerabilidade definido por `NPC_SetInvulnerable`
- NPCs são vulneráveis por padrão quando criados

## Funções Relacionadas

- [NPC_SetInvulnerable](NPC_SetInvulnerable): Definir invulnerabilidade NPC
- [NPC_IsValid](NPC_IsValid): Verifique se NPC ID é válido
- [NPC_IsDead](NPC_IsDead): Verifique se NPC está morto
- [NPC_GetHealth](NPC_GetHealth): Obtenha saúde de NPC

## Callbacks Relacionadas

- [OnNPCTakeDamage](../callbacks/OnNPCTakeDamage): Chamado quando NPC sofre dano (não chamado para NPCs invulnerável)
- [OnNPCDeath](../callbacks/OnNPCDeath): Chamado quando NPC morre (NPCs invulnerável não pode morrer)
