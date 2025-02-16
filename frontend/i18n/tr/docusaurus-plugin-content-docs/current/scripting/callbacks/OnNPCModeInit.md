---
title: OnNPCModeInit
description: Bu geri çağırma, bir NPC scripti yüklendiğinde çağrılır.
tags: ["npc"]
---

## Açıklama

Bu geri çağırma, bir NPC scripti yüklendiğinde çağrılır.

## Örnek

```c
public OnNPCModeInit()
{
    print("NPC scripti yüklendi.");
    return 1;
}
```

## Bağlantılı Geri Çağırmalar

Aşağıdaki geri çağırmalar bu geri çağırma ile bir şekilde ilişkili olduğu için yararlı olabilir.

- [OnNPCModeExit](OnNPCModeExit): Bu geri çağırma, bir NPC scripti kaldırıldığında çağrılır.
