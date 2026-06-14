---
title: NPC_GetAnimation
sidebar_label: NPC_GetAnimation
description: "Obtém os dados de animação atuais de um NPC."
tags: ["npc", "animation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém os dados de animação atuais de um NPC.

| Nome | Descrição |
| ------------ | ----------------------------------------- |
| npcid | O ID do NPC |
| &animationId | Variável para armazenar a animação ID |
| &delta | Variável para armazenar a velocidade da animação |
| &loop | Variável para armazenar se a animação faz loop |
| &lockX | Variável para armazenar o estado de bloqueio do eixo X |
| &lockY | Variável para armazenar o estado de bloqueio do eixo Y |
| &freeze | Variável para armazenar o estado de congelamento no final |
| &time | Variável para armazenar o tempo de animação |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/getanim", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You have no NPC.");

        new animid, time;
        new Float:delta;
        new bool:loop, bool:lockX, bool:lockY, bool:freeze;

        if (!NPC_GetAnimation(npcid, animid, delta, loop, lockX, lockY, freeze, time))
            return SendClientMessage(playerid, 0xFF0000FF, "Failed to get animation data (maybe no active animation).");

        SendClientMessage(playerid, 0xFFFFFFFF, "NPC %d animID: %d | delta: %.2f | loop: %d | lockX: %d | lockY: %d | freeze: %d | time: %d",
            npcid, animid, delta, _:loop, _:lockX, _:lockY, _:freeze, time);

        return 1;
    }
    return 0;
}
```
## Notas

- Isso não retornará dados se usado com [NPC_SetAnimation](NPC_SetAnimation)
- Todos os parâmetros exceto npcid são passados por referência e serão modificados
- Se NPC não tiver animação ativa, AnimationId será 0

## Funções Relacionadas

- [NPC_SetAnimation](NPC_SetAnimation): Definir animação por ID
- [NPC_ApplyAnimation](NPC_ApplyAnimation): Aplicar animação por nome
- [NPC_ClearAnimations](NPC_ClearAnimations): Limpar todas as animações
- [NPC_ResetAnimation](NPC_ResetAnimation): Redefinir estado de animação

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge
