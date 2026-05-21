---
title: NPC_ResetAnimation
sidebar_label: NPC_ResetAnimation
description: "Redefine a animação atual de um NPC para o padrão."
tags: ["npc", "animation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Redefine a animação atual de um NPC para o estado padrão.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/resetanim", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        NPC_ResetAnimation(npcid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d animation has been reset.", npcid);

        return 1;
    }
    return 0;
}
```
## Notas

- Interrompe todas as animações atuais e retorna NPC ao estado inativo
- Equivalente a ligar para NPC_ClearAnimations

## Funções Relacionadas

- [NPC_ApplyAnimation](NPC_ApplyAnimation): Aplicar animação a NPC
- [NPC_ClearAnimations](NPC_ClearAnimations): Limpar todas as animações
- [NPC_SetAnimation](NPC_SetAnimation): Definir animação específica
- [NPC_GetAnimation](NPC_GetAnimation): Obtenha a animação atual

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
