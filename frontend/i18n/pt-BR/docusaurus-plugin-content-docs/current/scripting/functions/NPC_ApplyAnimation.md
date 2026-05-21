---
title: NPC_ApplyAnimation
sidebar_label: NPC_ApplyAnimation
description: "Aplica uma animação específica a um NPC."
tags: ["npc", "animation"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Aplica uma animação específica a um NPC usando biblioteca e nome de animação.

| Nome | Descrição |
| ---------- | ------------------------------------------ |
| npcid | O ID do NPC |
| animlib[] | O nome da biblioteca de animação |
| animname[] | O nome da animação na biblioteca |
| delta | A velocidade da animação (normalmente 4,1) |
| loop | Se a animação deve repetir |
| lockX | Bloquear movimento no eixo X |
| lockY | Bloquear movimento no eixo Y |
| freeze | Congelar NPC no final da animação |
| time | Tempo em milissegundos para reproduzir a animação |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/applydance", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        NPC_ApplyAnimation(npcid, "DANCING", "dance_loop", 4.1, true, false, false, false, 0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d has been applied animation.", npcid);

        return 1;
    }
    return 0;
}
```
## Notas

- Use o parâmetro `time` para definir a duração da animação
- Os parâmetros de bloqueio impedem o movimento em eixos específicos durante a animação
- Use `NPC_ClearAnimations` para parar todas as animações
- Delta normalmente varia de 1,0 a 10,0 (4,1 é o padrão)

## Funções Relacionadas

- [NPC_SetAnimation](NPC_SetAnimation): Definir animação por ID
- [NPC_ClearAnimations](NPC_ClearAnimations): Limpar todas as animações
- [NPC_ResetAnimation](NPC_ResetAnimation): Redefinir estado de animação
- [NPC_GetAnimation](NPC_GetAnimation): Obtenha dados de animação atuais

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge
