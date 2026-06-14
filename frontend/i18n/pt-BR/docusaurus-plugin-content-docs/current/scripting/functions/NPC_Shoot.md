---
title: NPC_Shoot
sidebar_label: NPC_Shoot
description: "Faz um NPC disparar um tiro de arma."
tags: ["npc", "weapon", "shoot", "combat"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Faz um NPC disparar um tiro de arma.

| Nome | Descrição |
| ------------------- | --------------------------------------------------------- |
| npcid | O ID do NPC |
| weapon | A arma ID para usar para atirar |
| hitId | O ID da entidade alvo sendo baleada |
| hitType | O tipo de entidade atingida (jogador, NPC, veículo, etc.) |
| endPointX | Coordenada X do ponto final do marcador |
| endPointY | Coordenada Y do ponto final do marcador |
| endPointZ | Coordenada Z do ponto final do marcador |
| offsetX | Deslocamento X do ponto de acerto |
| offsetY | Deslocamento Y do ponto de acerto |
| offsetZ | Deslocamento Z do ponto de acerto |
| isHit | Se o tiro realmente atinge o alvo |
| checkInBetweenFlags | Sinalizadores de verificação de entidade (padrão: NPC_ENTITY_CHECK_ALL) |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcshoot", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        new weapon = NPC_GetWeapon(npcid);
        NPC_Shoot(npcid, WEAPON:weapon, playerid, 1, x, y, z, 0.0, 0.0, 0.0, true, NPC_ENTITY_CHECK_ALL);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d fired a shot at you.", npcid);
        return 1;
    }
    return 0;
}
```
## Notas

- O NPC deve ter uma arma definida com `NPC_SetWeapon` antes de disparar
- Use `isHit = false` para tiros de advertência ou fogo de supressão
- O parâmetro `checkInBetweenFlags` determina quais entidades bloqueiam o disparo

## Funções Relacionadas

- [NPC_SetWeapon](NPC_SetWeapon): Definir arma NPC
- [NPC_GetWeapon](NPC_GetWeapon): Obtenha a arma atual NPC
- [NPC_IsShooting](NPC_IsShooting): Verifique se NPC está filmando no momento
- [NPC_AimAt](NPC_AimAt): Faça NPC mirar na posição

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara arma
- [OnNPCGiveDamage](../callbacks/OnNPCGiveDamage): Chamado quando NPC causa dano a outra entidade
