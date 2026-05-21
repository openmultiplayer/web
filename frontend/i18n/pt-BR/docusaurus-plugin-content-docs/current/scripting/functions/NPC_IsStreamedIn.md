---
title: NPC_IsStreamedIn
sidebar_label: NPC_IsStreamedIn
description: "Verifica se um NPC foi transmitido para um jogador específico."
tags: ["npc", "streaming"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um NPC foi transmitido para um jogador específico.

| Nome | Descrição |
| -------- | ----------------------------- |
| npcid | O ID do NPC |
| playerid | O ID do jogador a ser verificado |

## Retornos

Retorna `true` se NPC for transmitido para o jogador, `false` caso contrário.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkstreamedin", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isStreamedIn = NPC_IsStreamedIn(npcid, playerid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is streamed in for you: %s", npcid, isStreamedIn ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- NPCs só são transmitidos quando estão dentro da distância de transmissão do jogador
- A transmissão depende da distância e da correspondência entre o interior e o mundo virtual

## Funções Relacionadas

- [NPC_IsAnyStreamedIn](NPC_IsAnyStreamedIn): Verifique se algum jogador consegue ver NPC
- [NPC_SetPos](NPC_SetPos): Definir posição NPC

## Callbacks Relacionadas

_Nenhum callback específico é acionado por esta função._
