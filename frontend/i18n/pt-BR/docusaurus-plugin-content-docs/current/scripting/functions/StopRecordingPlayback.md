---
title: StopRecordingPlayback
sidebar_label: StopRecordingPlayback
description: Isto interromperá o arquivo .rec atual que está sendo executado pelo NPC, fazendo-o ficar ocioso até que outra ordem seja dada.
tags: []
---

:::warning

Esta função está obsoleta. Veja [NPC_StopPlayback](NPC_StopPlayback).

:::

## Descrição

Isto interromperá o arquivo .rec atual que está sendo executado pelo NPC, fazendo-o ficar ocioso até que outra ordem seja dada.

## Exemplos

```c
public OnNPCExitVehicle(vehicleid, seatid)
{
    StopRecordingPlayback();
}
```

## Funções Relacionadas

- [StartRecordingPlayback](StartRecordingPlayback): Para a reprodução de um arquivo .rec.
