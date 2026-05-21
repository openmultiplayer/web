---
title: NPC_IsAnyStreamedIn
sidebar_label: NPC_IsAnyStreamedIn
description: "Verifica se um NPC foi transmitido para algum player."
tags: ["npc", "streaming"]
---


<VersionWarn version='omp v1.5.8.3079' />

## Descrição

Verifica se um NPC foi transmitido para algum player no servidor.

| Nome | Descrição |
| ----- | ----------------- |
| npcid | O ID do NPC |

## Retornos

Retorna `true` se NPC for transmitido para pelo menos um jogador, caso contrário, `false`.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkanystreamedin", true))
    {
        new bool:anyStreamed = NPC_IsAnyStreamedIn(playerid);

        SendClientMessage(playerid, 0x00FF00FF, "Any NPCs streamed in for you: %s", anyStreamed ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```
## Notas

- Um NPC é transmitido quando está dentro do alcance de streaming de um jogador

## Funções Relacionadas

- [NPC_IsStreamedIn](NPC_IsStreamedIn): Verifique se foi transmitido para um jogador específico
- [NPC_SetPos](NPC_SetPos): Definir posição NPC
- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): Definir mundo virtual NPC
- [NPC_SetInterior](NPC_SetInterior): Definir interior NPC

## Callbacks Relacionadas

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Chamado quando NPC surge
