---
title: OnNPCSpawn
description: Bu geri çağırma, bir NPC doğduğunda çağrılır.
tags: ["npc"]
---

## Açıklama

Bu geri çağırma, bir NPC doğduğunda çağrılır.

## Örnek

```c
public OnNPCSpawn()
{
    print("NPC doğdu");
    SendChat("Merhaba Dünya. Ben bir botum.");
    return 1;
}
```
