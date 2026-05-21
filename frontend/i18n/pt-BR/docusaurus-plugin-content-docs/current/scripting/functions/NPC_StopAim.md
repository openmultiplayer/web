---
title: NPC_StopAim
sidebar_label: NPC_StopAim
description: "Impede que um NPC mire."
tags: ["npc", "weapon", "aiming"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Impede que um NPC mire em qualquer alvo.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/friendly", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        NPC_StopAim(npcid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d stopped aiming.", npcid);
        return 1;
    }
    return 0;
}
```
## Notas

- Isso interrompe a mira e o disparo se o NPC estivesse fazendo as duas coisas
- O NPC retornará à sua posição normal após parar a mira
- Não tem efeito se o NPC não estiver apontando

## Funções Relacionadas

- [NPC_AimAt](NPC_AimAt): Faça NPC mirar na posição
- [NPC_AimAtPlayer](NPC_AimAtPlayer): Faça NPC mirar no jogador
- [NPC_IsAiming](NPC_IsAiming): Verifique se NPC está mirando
- [NPC_Shoot](NPC_Shoot): Faça NPC disparar

## Callbacks Relacionadas

- [OnNPCWeaponShot](../callbacks/OnNPCWeaponShot): Chamado quando NPC dispara arma
