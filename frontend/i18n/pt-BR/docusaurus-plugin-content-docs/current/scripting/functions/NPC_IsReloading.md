---
title: NPC_IsReloading
sidebar_label: NPC_IsReloading
description: "Verifica se um NPC está recarregando sua arma."
tags: ["npc", "weapon", "reloading"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um NPC está recarregando sua arma.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se NPC estiver recarregando, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkreloading", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isReloading = NPC_IsReloading(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is reloading: %s", npcid, isReloading ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Retorna true somente durante a animação de recarga real
- A recarga é automática quando a munição do clipe acaba
- Use NPC_EnableReloading para controlar o comportamento de recarga

## Funções Relacionadas

- [NPC_EnableReloading](NPC_EnableReloading): Habilitar/desabilitar recarregamento
- [NPC_Reload](NPC_Reload): Força NPC a recarregar
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Obtenha munição no clipe
- [NPC_GetWeaponReloadTime](NPC_GetWeaponReloadTime): Obtenha o tempo de recarga

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara
