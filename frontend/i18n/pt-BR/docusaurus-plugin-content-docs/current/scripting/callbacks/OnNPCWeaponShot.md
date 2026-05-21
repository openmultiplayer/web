---
title: OnNPCWeaponShot
sidebar_label: OnNPCWeaponShot
description: "Este callback é chamado quando um NPC dispara uma arma."
tags: ["npc", "weapon", "shooting"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Este callback é chamado quando um NPC dispara uma arma.

| Nome | Descrição |
| ----------------------- | ------------------------------------------ |
| npcid | O ID do NPC que disparou a arma |
| WEAPON:weaponid | A arma ID que foi disparada |
| BULLET_HIT_TYPE:hittype | O tipo de entidade atingida (se houver) |
| hitid | O ID da entidade que foi atingida (se houver) |
| Float:fX | A coordenada X onde a bala atingiu |
| Float:fY | A coordenada Y onde a bala atingiu |
| Float:fZ | A coordenada Z onde a bala atingiu |

## Retornos

Retorne `false` para evitar que o disparo seja processado ou `true` para permitir isso.

## Exemplos

```c
public OnNPCWeaponShot(npcid, WEAPON:weaponid, BULLET_HIT_TYPE:hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    // Notifique apenas os jogadores que estão rastreando este NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            static hitTypeNames[5][32] = {
                "None",
                "Player",
                "Vehicle",
                "Object",
                "Player Object"
            };

            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d fired weapon %d at %s %d (%.2f, %.2f, %.2f)",
                npcid, _:weaponid, hitTypeNames[_:hittype], hitid, fX, fY, fZ);
        }
    }
    return 1;
}
```
## Notas

- Este callback é chamado para cada tiro disparado pelo NPC
- O parâmetro `hittype` indica o que foi atingido (nenhum, jogador, veículo, objeto, etc.)
- O parâmetro `hitid` contém o ID da entidade atingida (jogador ID, veículo ID, etc.)
- As coordenadas do acerto mostram onde a bala impactou
- Retornar `false` evita que o disparo seja processado pelo servidor

## Funções Relacionadas

As funções a seguir podem ser úteis, pois estão relacionadas a esse callback de uma forma ou de outra.

- [NPC_AimAt](../functions/NPC_AimAt): Faça NPC mirar em uma posição
- [NPC_AimAtPlayer](../functions/NPC_AimAtPlayer): Faça NPC mirar em um jogador
- [NPC_StopAim](../functions/NPC_StopAim): Impede que NPC mire
- [NPC_SetWeapon](../functions/NPC_SetWeapon): Defina a arma de NPC
- [NPC_GetAmmo](../functions/NPC_GetAmmo): Obtenha a contagem de munição de NPC

## Callbacks Relacionadas

- [OnNPCGiveDamage](OnNPCGiveDamage): Chamado quando NPC causa dano a um jogador
- [OnPlayerWeaponShot](OnPlayerWeaponShot): Chamado quando um jogador dispara uma arma
