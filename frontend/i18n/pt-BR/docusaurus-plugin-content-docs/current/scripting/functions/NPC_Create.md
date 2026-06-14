---
title: NPC_Create
sidebar_label: NPC_Create
description: "Cria um novo NPC."
tags: ["npc"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Cria um novo NPC.

| Nome | Descrição |
| ------------ | ---------------------------------------- |
| const name[] | O nome do NPC (máximo de 24 caracteres). |

## Retornos

Retorna o ID do NPC criado ou `INVALID_NPC_ID` em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/createnpc", true))
    {
        new name[24];
        format(name, sizeof name, "Bot_%d", g_NPCCount++);

        new npcid = NPC_Create(name);
        if (NPC_IsValid(npcid))
        {
            new Float:x, Float:y, Float:z;
            GetPlayerPos(playerid, x, y, z);

            NPC_Spawn(npcid);
            NPC_SetPos(npcid, x + 3.0, y, z);
            NPC_SetWeapon(npcid, WEAPON_M4);
            NPC_SetAmmo(npcid, 500);

            PlayerNPC[playerid] = npcid;
            SendClientMessage(playerid, 0x00FF00FF, "NPC %s (ID %d) spawned near you!", name, npcid);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Failed to create NPC!");
        }
        return 1;
    }
    return 0;
}
```
## Notas

:::warning

- O NPC não será gerado automaticamente. Use [NPC_Spawn](NPC_Spawn) para gerá-lo.
- Os nomes NPC devem seguir as mesmas regras dos nomes dos jogadores.
- O comprimento máximo do nome é de 24 caracteres.

:::

## Funções Relacionadas

- [NPC_Destroy](NPC_Destroy): Destrói um NPC.
- [NPC_Spawn](NPC_Spawn): Gera um NPC.
- [NPC_IsValid](NPC_IsValid): Verifica se um NPC ID é válido.

## Callbacks Relacionadas

- [OnNPCCreate](../callbacks/OnNPCCreate): Chamado quando um NPC é criado.
