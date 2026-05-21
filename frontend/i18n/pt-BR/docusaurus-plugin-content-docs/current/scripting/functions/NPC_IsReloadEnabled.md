---
title: NPC_IsReloadEnabled
sidebar_label: NPC_IsReloadEnabled
description: "Verifica se o recarregamento automático está habilitado para um NPC."
tags: ["npc", "weapon", "ammo"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se o recarregamento automático está habilitado para um NPC.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se o recarregamento automático estiver habilitado, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkreloadenabled", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isReloadEnabled = NPC_IsReloadEnabled(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d reload enabled: %s", npcid, isReloadEnabled ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- O recarregamento automático faz com que o NPCs seja recarregado automaticamente quando o clipe estiver vazio
- NPCs sem recarga automática irá parar de gravar quando o clipe acabar
- Isso afeta apenas a munição do pente, não a munição total
- Use `NPC_EnableReloading` para alterar a configuração de recarga

## Funções Relacionadas

- [NPC_EnableReloading](NPC_EnableReloading): Ativar/desativar recarga automática
- [NPC_IsReloading](NPC_IsReloading): Verifique se está recarregando no momento
- [NPC_GetAmmoInClip](NPC_GetAmmoInClip): Obtenha munição de clipe
- [NPC_SetAmmoInClip](NPC_SetAmmoInClip): Definir munição de clipe

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC é acionado
