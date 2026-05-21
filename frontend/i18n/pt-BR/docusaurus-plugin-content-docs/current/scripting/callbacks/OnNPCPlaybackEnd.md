---
title: OnNPCPlaybackEnd
sidebar_label: OnNPCPlaybackEnd
description: "Este callback é chamado quando um NPC termina a reprodução de um arquivo gravado."
tags: ["npc", "playback", "recording"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Este callback é chamado quando um NPC termina a reprodução de um arquivo gravado.

| Nome | Descrição |
| -------- | ------------------------------------------ |
| npcid | O ID do NPC que finalizou a reprodução |
| recordid | O ID do disco que terminou de tocar |

## Exemplos

```c
public OnNPCPlaybackEnd(npcid, recordid)
{
    printf("[NPC] NPC %d finished playback (record: %d)", npcid, recordid);

    // Notifique os jogadores que estão rastreando este NPC
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d finished playback (record ID: %d)", npcid, recordid);
        }
    }
    return 1;
}

```
## Notas

- Este callback é chamado quando a gravação chega ao fim naturalmente
- Também é chamado quando a reprodução é interrompida manualmente usando `NPC_StopPlayback`
- O `recordid` corresponde ao arquivo de registro carregado

## Funções Relacionadas

As funções a seguir podem ser úteis, pois estão relacionadas a esse callback de uma forma ou de outra.

- [NPC_StartPlayback](../functions/NPC_StartPlayback): inicia a reprodução NPC de uma gravação
- [NPC_StopPlayback](../functions/NPC_StopPlayback): Interrompe a reprodução de NPC
- [NPC_PausePlayback](../functions/NPC_PausePlayback): Pausar/retomar a reprodução NPC
- [NPC_IsPlayingPlayback](../functions/NPC_IsPlayingPlayback): Verifique se NPC está reproduzindo uma gravação

## Callbacks Relacionadas

- [OnNPCPlaybackStart](OnNPCPlaybackStart): Chamado quando NPC começa a reproduzir uma gravação
