---
title: NPC_Respawn
sidebar_label: NPC_Respawn
description: "Reaparece um NPC em sua posição de surgimento, redefinindo seu estado."
tags: ["npc", "spawn", "respawn"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Reaparece um NPC em sua posição de surgimento, redefinindo seu estado.

| Nome | Descrição |
| ----- | ------------------ |
| npcid | O ID do NPC. |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/respawnnpc", true))
    {
        new npcid = PlayerNPC[playerid];

        if (!NPC_IsValid(npcid))
        {
            SendClientMessage(playerid, 0xFF0000FF, "You don't have a valid NPC to respawn.");
            return 1;
        }

        if (NPC_Respawn(npcid))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Your NPC (ID %d) has been respawned.", npcid);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to respawn your NPC (ID %d).", npcid);
        }

        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- Redefine a integridade, posição e estado de NPC.
- NPC retorna às suas coordenadas originais de spawn.
- Todas as atividades atuais (movimento, combate) são interrompidas.

:::

## Funções Relacionadas

- [NPC_Spawn](NPC_Spawn): Geração inicial de NPC.
- [NPC_SetPos](NPC_SetPos): Defina a posição NPC.
- [NPC_GetHealth](NPC_GetHealth): Obtenha saúde de NPC.
- [NPC_IsDead](NPC_IsDead): Verifique se NPC está morto.

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge.
- [OnNPCRespawn](../callbacks/OnNPCRespawn): Chamado quando NPC reaparece.
