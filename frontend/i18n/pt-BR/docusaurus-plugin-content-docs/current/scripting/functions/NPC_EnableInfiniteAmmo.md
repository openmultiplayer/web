---
title: NPC_EnableInfiniteAmmo
sidebar_label: NPC_EnableInfiniteAmmo
description: "Ativa ou desativa munição infinita para um NPC."
tags: ["npc", "weapon", "ammo"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Ativa ou desativa munição infinita para um NPC.

| Nome | Descrição |
| ------ | -------------------------------------------------- |
| npcid | O ID do NPC |
| enable | `true` para ativar munição infinita, `false` para desativar |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/toggleinfiniteammo", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        new bool:infinite = NPC_IsInfiniteAmmoEnabled(npcid);
        NPC_EnableInfiniteAmmo(npcid, !infinite);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d infinite ammo: %s", npcid, !infinite ? "Enabled" : "Disabled");

        return 1;
    }
    return 0;
}
```
## Notas

- Quando ativado, o NPC nunca ficará sem munição
- Isso afeta todas as armas que o NPC usa
- A exibição da contagem de munição ainda pode diminuir, mas a funcionalidade da arma permanece

## Funções Relacionadas

- [NPC_IsInfiniteAmmoEnabled](NPC_IsInfiniteAmmoEnabled): Verifique se a munição infinita está habilitada
- [NPC_SetAmmo](NPC_SetAmmo): Conjunto de munição NPC
- [NPC_GetAmmo](NPC_GetAmmo): Obtenha munição NPC
- [NPC_SetWeapon](NPC_SetWeapon): Definir arma NPC

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara uma arma
