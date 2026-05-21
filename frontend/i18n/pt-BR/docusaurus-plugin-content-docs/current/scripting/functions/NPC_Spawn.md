---
title: NPC_Spawn
sidebar_label: NPC_Spawn
description: "Gera um NPC no mundo do jogo."
tags: ["npc"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Gera um NPC no mundo do jogo, tornando-o visível e ativo.

| Nome | Descrição |
| ----- | ------------------ |
| npcid | O ID do NPC. |

## Retornos

Retorna `true` se NPC foi gerado com sucesso, caso contrário, `false`.

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

- O NPC deve ser criado com [NPC_Create](NPC_Create) antes do spawn.

:::

## Funções Relacionadas

- [NPC_Create](NPC_Create): Crie um novo NPC.
- [NPC_IsValid](NPC_IsValid): Verifique se NPC ID é válido.
- [NPC_SetPos](NPC_SetPos): Defina a posição NPC.
- [NPC_Destroy](NPC_Destroy): Destrua um NPC.

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge.
- [OnNPCCreate](../callbacks/OnNPCCreate): Chamado quando NPC é criado.
