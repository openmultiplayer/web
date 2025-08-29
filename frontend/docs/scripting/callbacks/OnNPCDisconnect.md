---
title: OnNPCDisconnect
sidebar_label: OnNPCDisconnect
description: This callback is called when the NPC gets disconnected from the server.
tags: ["npc"]
---

## Description

Callback ini dipanggil ketika NPC telah terputus dari server

| Name     | Description                                             |
| -------- | ------------------------------------------------------- |
| reason[] | Alasan kenapa NPC disconnect |

## Examples

```c
public OnNPCDisconnect(reason[])
{
    printf("[NPC] telah disconnect dengan alasan: %s", reason);
}
```

## Fungsi terakait
Callback berikut ini mungkin berguna karena saling terkait dengan callback ini

- [OnNPCConnect](OnNPCConnect): Callback ini di panggil ketika NPC berhasil terhubung ke server.
- [OnPlayerDisconnect](OnPlayerDisconnect): Callback ini di panggil ketika player meninggalkan server.
- [OnPlayerConnect](OnPlayerConnect):Callback ini dipanggil ketika player terhubung ke server.
