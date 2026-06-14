---
title: NPC_SetKeys
sidebar_label: NPC_SetKeys
description: "Define os estados-chave para um NPC."
tags: ["npc", "keys", "input"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Define os estados das teclas para um NPC, simulando o pressionamento de teclas.

| Nome | Descrição |
| ------------ | -------------------------- |
| npcid | O ID do NPC |
| upAndDown | Estado da chave para cima/para baixo |
| leftAndRight | Estado da tecla esquerda/direita |
| keys | A combinação de teclas a ser definida |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setkeys ", true, 9))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new idx = 9;
        new keys = 0, updown = 0, leftright = 0;

        // Analisar chaves
        while (cmdtext[idx] == ' ') idx++;
        if (cmdtext[idx] == '\0')
            return SendClientMessage(playerid, 0xFF0000FF, "Usage: /setkeys [keys] [updown] [leftright]");
        keys = strval(cmdtext[idx]);

        // Pular para o próximo parâmetro
        while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
        while (cmdtext[idx] == ' ') idx++;

        // Analisar updown se existir
        if (cmdtext[idx] != '\0')
        {
            updown = strval(cmdtext[idx]);
            while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
            while (cmdtext[idx] == ' ') idx++;

            // Analisar esquerda-direita se existir
            if (cmdtext[idx] != '\0')
            {
                leftright = strval(cmdtext[idx]);
            }
        }

        NPC_SetKeys(npcid, updown, leftright, keys);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d keys: keys=%d, ud=%d, lr=%d", npcid, keys, updown, leftright);

        return 1;
    }
    return 0;
}
```
## Notas

- As chaves afetam o comportamento do NPC em veículos e a pé
- Use NPC_GetKeys para verificar os estados principais atuais
- Os estados principais persistem até serem alterados ou redefinições de estado NPC

## Funções Relacionadas

- [NPC_GetKeys](NPC_GetKeys): Obtenha os principais estados de NPC
- [NPC_PutInVehicle](NPC_PutInVehicle): Coloque NPC no veículo
- [NPC_Move](NPC_Move): Faça com que NPC se mova para a posição
- [NPC_StopMove](NPC_StopMove): Parar o movimento NPC

## Recursos relacionados

- [Teclas](../resources/keys)

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
