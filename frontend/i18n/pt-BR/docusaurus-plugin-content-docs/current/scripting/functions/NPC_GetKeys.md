---
title: NPC_GetKeys
sidebar_label: NPC_GetKeys
description: "Obtém os estados-chave atuais de um NPC."
tags: ["npc", "keys"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Obtém os estados-chave atuais de um NPC.

| Nome | Descrição |
| ------------- | --------------------------------------- |
| npcid | O ID do NPC |
| &upAndDown | Variável para armazenar estados-chave para cima/para baixo |
| &leftAndRight | Variável para armazenar estados das teclas esquerda/direita |
| &keys | Variável para armazenar outros estados-chave |

## Retornos

Retorna `true` se as chaves foram recuperadas com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkkeys", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new keys, updown, leftright;
        NPC_GetKeys(npcid, keys, updown, leftright);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d keys: %d, updown: %d, leftright: %d", npcid, keys, updown, leftright);
        return 1;
    }
    return 0;
}
```
## Notas

- Todos os parâmetros exceto npcid são passados por referência e serão modificados
- Os estados-chave são armazenados como sinalizadores de bits
- Use operações bit a bit para verificar chaves individuais
- Isso reflete o estado de entrada atual do NPC

## Funções Relacionadas

- [NPC_SetKeys](NPC_SetKeys): Definir estados-chave NPC
- [NPC_Move](NPC_Move): Faça com que NPC se mova para a posição
- [NPC_StopMove](NPC_StopMove): Parar o movimento NPC

## Callbacks Relacionadas

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Chamado quando NPC termina o movimento
