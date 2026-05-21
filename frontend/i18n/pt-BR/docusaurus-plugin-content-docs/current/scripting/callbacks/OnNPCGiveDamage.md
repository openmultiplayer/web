---
title: OnNPCGiveDamage
sidebar_label: OnNPCGiveDamage
description: "Este callback é chamado quando um NPC causa dano a um jogador."
tags: ["npc", "damage"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Este callback é chamado quando um NPC causa dano a um jogador.

| Nome | Descrição |
| --------------- | ---------------------------------------------------- |
| npcid | O ID do NPC que deu o dano |
| damagedid | O ID do jogador que recebeu o dano |
| Float:amount | A quantidade de dano causado |
| WEAPON:weaponid | A arma ID usada para causar o dano |
| bodypart | A [parte do corpo](../resources/bodyparts) que foi atingida |

## Retornos

1 - Callback não será chamado em outros filterscripts.

0 - Permite que esse callback seja chamado em outros filterscripts.

Ele é sempre chamado primeiro em filterscripts, portanto, retornar 1 impede que outros filterscripts o processem.

## Exemplos

```c
public OnNPCGiveDamage(npcid, damagedid, Float:amount, WEAPON:weaponid, bodypart)
{
    // Notifique apenas os jogadores que estão rastreando este NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0xFF8800FF, "NPC %d dealt %.1f damage to player %d (weapon: %d, bodypart: %d)",
                npcid, amount, damagedid, _:weaponid, bodypart);
        }
    }
    return 1;
}
```
## Notas

- Este callback é chamado antes do dano ser realmente aplicado ao jogador
- Retornar `false` não impedirá que o dano seja aplicado
- O parâmetro `bodypart` utiliza os mesmos valores de `OnPlayerTakeDamage`

## Funções Relacionadas

As funções a seguir podem ser úteis, pois estão relacionadas a esse callback de uma forma ou de outra.

- [NPC_AimAt](../functions/NPC_AimAt): Faça NPC mirar em uma posição
- [NPC_AimAtPlayer](../functions/NPC_AimAtPlayer): Faça NPC mirar em um jogador
- [NPC_Shoot](../functions/NPC_Shoot): Faça NPC disparar
- [NPC_SetWeapon](../functions/NPC_SetWeapon): Defina a arma de NPC

## Callbacks Relacionadas

- [OnNPCTakeDamage](OnNPCTakeDamage): Chamado quando um NPC sofre dano
- [OnPlayerTakeDamage](OnPlayerTakeDamage): Chamado quando um jogador sofre dano
- [OnPlayerGiveDamage](OnPlayerGiveDamage): Chamado quando um jogador causa dano
