---
title: NPC_SetAnimation
sidebar_label: NPC_SetAnimation
description: "Define uma animação para um NPC pela animação ID."
tags: ["npc", "animation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define uma animação para um NPC usando a animação ID.

| Nome | Descrição |
| ----------- | ------------------------------------------------- |
| npcid | O ID do NPC |
| animationid | A animação ID a ser definida |
| delta | Velocidade de animação (normalmente 4,1) |
| loop | Se a animação deve repetir |
| lockX | Bloquear movimento no eixo X durante a animação |
| lockY | Bloquear movimento no eixo Y durante a animação |
| freeze | Congelar o NPC após a animação |
| time | Duração da animação em milissegundos (0 = infinito) |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setdance", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        NPC_SetAnimation(npcid, 405, 4.1, true, false, false, false, 0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d has been set to animate.", npcid);

        SetTimerEx("ClearNPCAnimations", 25000, false, "ii", playerid, npcid);

        return 1;
    }
    return 0;
}

forward ClearNPCAnimations(playerid, npcid);
public ClearNPCAnimations(playerid, npcid)
{

    NPC_ClearAnimations(npcid);
    SendClientMessage(playerid, 0x00FF00FF, "NPC %d animations were cleared.", npcid);
}
```
## Notas

- A animação IDs corresponde aos índices de animação GTA San Andreas
- Use `NPC_ApplyAnimation` para animações por biblioteca e nome

## Funções Relacionadas

- [NPC_ApplyAnimation](NPC_ApplyAnimation): Aplicar animação por nome
- [NPC_ClearAnimations](NPC_ClearAnimations): Limpar todas as animações
- [NPC_ResetAnimation](NPC_ResetAnimation): Redefinir para postura padrão

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge
