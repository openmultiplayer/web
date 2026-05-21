---
title: NPC_EnableReloading
sidebar_label: NPC_EnableReloading
description: "Ativa ou desativa o recarregamento automático para um NPC."
tags: ["npc", "weapon", "reload"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Ativa ou desativa o recarregamento automático para um NPC.

| Nome | Descrição |
| ------ | ---------------------------------------------- |
| npcid | O ID do NPC |
| enable | `true` para ativar o recarregamento, `false` para desativar |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/togglereload", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        new bool:reload = NPC_IsReloadEnabled(npcid);
        NPC_EnableReloading(npcid, !reload);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d reloading: %s", npcid, !reload ? "Enabled" : "Disabled");

        return 1;
    }
    return 0;
}
```
## Notas

- Quando ativado, o NPC será recarregado automaticamente quando seu clipe estiver vazio
- Quando desativado, o NPC não recarregará e eventualmente ficará sem munição no pente
- O tempo de recarga pode ser personalizado com `NPC_SetWeaponReloadTime`

## Funções Relacionadas

- [NPC_IsReloadEnabled](NPC_IsReloadEnabled): Verifique se o recarregamento está habilitado
- [NPC_IsReloading](NPC_IsReloading): Verifique se NPC está recarregando no momento
- [NPC_SetWeaponReloadTime](NPC_SetWeaponReloadTime): Definir tempo de recarga da arma
- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): Obtenha o tempo de recarga da arma

## Callbacks Relacionadas

- [OnNPCWeaponStateChange](../callbacks/OnNPCWeaponStateChange): Chamado quando o estado da arma NPC muda
