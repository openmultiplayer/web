---
title: NPC_StartPlaybackEx
sidebar_label: NPC_StartPlaybackEx
description: "Inicia a reprodução de um NPC usando uma gravação pré-carregada ID com opções estendidas."
tags: ["npc", "playback", "recording"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Inicia a reprodução de um NPC usando uma gravação pré-carregada ID com opções estendidas.

| Nome | Descrição |
| ---------- | ---------------------------------------------- |
| npcid | O ID do NPC |
| recordId | A gravação pré-carregada ID |
| autoUnload | Se deseja descarregar automaticamente após a reprodução |
| startX | Deslocamento X da posição de gravação |
| startY | Deslocamento Y da posição de gravação |
| startZ | Deslocamento Z da posição de gravação |
| rotX | Deslocamento da rotação X |
| rotY | Deslocamento de rotação Y |
| rotZ | Deslocamento da rotação Z |

## Retornos

Retorna `true` se a operação foi bem-sucedida, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/startplaybackex ", true, 17))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new recordId = strval(cmdtext[17]);

        new Float:x, Float:y, Float:z;
        NPC_GetPos(npcid, x, y, z);

        new bool:success = NPC_StartPlaybackEx(npcid, recordId, true, x, y, z, 0.0, 0.0, 0.0);

        if (success)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d started playback with record ID: %d", npcid, recordId);
        else
            SendClientMessage(playerid, 0xFF0000FF, "Failed to start playback for NPC %d with record ID %d", npcid, recordId);

        return 1;
    }
    return 0;
}
```
## Notas

- A gravação deve ser pré-carregada com `NPC_LoadRecord`
- O descarregamento automático economiza memória quando a reprodução é concluída

## Funções Relacionadas

- [NPC_LoadRecord](NPC_LoadRecord): Carregar um arquivo de gravação
- [NPC_StartPlayback](NPC_StartPlayback): inicia a reprodução por nome de arquivo
- [NPC_StopPlayback](NPC_StopPlayback): Parar a reprodução
- [NPC_IsValidRecord](NPC_IsValidRecord): Verifique se o registro é válido

## Callbacks Relacionadas

- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Chamado quando a reprodução termina
