---
title: OnNPCTakeDamage
sidebar_label: OnNPCTakeDamage
description: "Este callback é chamado quando um NPC sofre dano."
tags: ["npc", "damage"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Este callback é chamado quando um NPC sofre dano de um jogador ou de outro NPC.

| Nome | Descrição |
| --------------- | ---------------------------------------------------- |
| npcid | O ID do NPC que sofreu danos |
| issuerid | O ID do jogador/NPC que causou o dano |
| Float:amount | A quantidade de dano sofrido |
| WEAPON:weaponid | A arma ID usada para causar o dano |
| bodypart | A [parte do corpo](../resources/bodyparts) que foi atingida |

## Retornos

1 - Callback não será chamado em outros filterscripts.

0 - Permite que esse callback seja chamado em outros filterscripts.

Ele é sempre chamado primeiro em filterscripts, portanto, retornar 1 impede que outros filterscripts o processem.

## Exemplos

```c
public OnNPCTakeDamage(npcid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    // Notifique apenas os jogadores que estão rastreando este NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            if (issuerid == INVALID_PLAYER_ID)
            {
                SendClientMessage(playerid, 0xFF8800FF, "NPC %d took %.1f damage (weapon: %d, bodypart: %d)",
                    npcid, amount, _:weaponid, bodypart);
            }
            else
            {
                SendClientMessage(playerid, 0xFF8800FF, "NPC %d took %.1f damage from player %d (weapon: %d, bodypart: %d)",
                    npcid, amount, issuerid, _:weaponid, bodypart);
            }
        }
    }
    return 1;
}
```
## Notas

- Este callback é chamado antes que o dano seja realmente aplicado ao NPC
- Retornar `false` não impedirá que o dano seja aplicado
- O parâmetro `issuerid` será `INVALID_PLAYER_ID` se o dano não for causado pelo jogador
- As partes do corpo usam as mesmas constantes que `OnPlayerTakeDamage`

## Funções Relacionadas

As funções a seguir podem ser úteis, pois estão relacionadas a esse callback de uma forma ou de outra.

- [NPC_GetHealth](../functions/NPC_GetHealth): Obtenha a saúde atual de NPC
- [NPC_SetHealth](../functions/NPC_SetHealth): Define a saúde de NPC
- [NPC_GetArmour](../functions/NPC_GetArmour): Obtenha a armadura de NPC
- [NPC_SetArmour](../functions/NPC_SetArmour): Definir armadura de NPC

## Callbacks Relacionadas

- [OnNPCGiveDamage](OnNPCGiveDamage): Chamado quando um NPC causa dano a um jogador
- [OnNPCDeath](OnNPCDeath): Chamado quando um NPC morre
- [OnPlayerTakeDamage](OnPlayerTakeDamage): Chamado quando um jogador sofre dano
