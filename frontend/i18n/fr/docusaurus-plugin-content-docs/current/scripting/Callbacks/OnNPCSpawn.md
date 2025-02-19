---
title: OnNPCSpawn
sidebar_label: OnNPCSpawn
description: Ce rappel est appelé lorsqu'un PNJ apparaît.
tags: ["npc"]
---

## Description

Ce rappel est appelé lorsqu'un PNJ apparaît.

## Exemples

```c
public OnNPCSpawn()
{
    print("PNJ apparu");
    SendChat("Bonjour tout le monde. Je suis un bot.");
    return 1;
}
```
