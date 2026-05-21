---
title: NPC_StartPlayback
sidebar_label: NPC_StartPlayback
description: "Inicia a reprodução de um arquivo de gravação para um NPC."
tags: ["npc", "recording", "playback"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Inicia a reprodução de um arquivo de gravação para um NPC por nome de arquivo.

| Nome | Descrição |
| ------------ | --------------------------------------------- |
| npcid | O ID do NPC |
| recordName[] | O nome do arquivo da gravação a ser reproduzida |
| autoUnload | Se deve descarregar a gravação quando terminar |
| startX | Iniciando coordenada X |
| startY | Coordenada Y inicial |
| startZ | Coordenada Z inicial |
| rotX | Iniciando rotação X |
| rotY | Iniciando rotação Y |
| rotZ | Iniciando rotação Z |

## Retornos

Retorna `true` se a reprodução foi iniciada com sucesso, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/startplayback ", true, 15))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new recordName[64];
        new len = strlen(cmdtext);
        if (len <= 15)
            return SendClientMessage(playerid, 0xFF0000FF, "Usage: /startplayback [recordname]");

        strmid(recordName, cmdtext, 15, len);

        new Float:x, Float:y, Float:z;
        NPC_GetPos(npcid, x, y, z);

        new bool:success = NPC_StartPlayback(npcid, recordName, true, x, y, z, 0.0, 0.0, 0.0);

        if (success)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d started playback: %s", npcid, recordName);
        else
            SendClientMessage(playerid, 0xFF0000FF, "Failed to start playback for NPC %d", npcid);

        return 1;
    }
    return 0;
}
```
## Notas

- O arquivo de gravação deve existir no diretório `npcmodes\recordings`
- Se autoUnload for true, a gravação será descarregada quando a reprodução terminar
- Use NPC_StartPlaybackEx para melhor controle com gravações pré-carregadas

## Funções Relacionadas

- [NPC_StartPlaybackEx](NPC_StartPlaybackEx): Iniciar a reprodução com gravação ID
- [NPC_StopPlayback](NPC_StopPlayback): Interrompe a reprodução
- [NPC_PausePlayback](NPC_PausePlayback): pausar/retomar a reprodução
- [NPC_LoadRecord](NPC_LoadRecord): Pré-carregar um arquivo de gravação

## Callbacks Relacionadas

- [OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): Chamado quando a reprodução começa
- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Chamado quando a reprodução termina
