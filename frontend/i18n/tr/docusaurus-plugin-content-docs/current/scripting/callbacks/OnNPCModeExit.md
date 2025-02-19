---
title: OnNPCModeExit
sidebar_label: OnNPCModeExit
description: Bu geri çağırma, bir NPC scripti kaldırıldığında çağrılır.
tags: ["npc"]
---

## Açıklama

Bu geri çağırma, bir NPC scripti kaldırıldığında çağrılır.

## Örnek

```c
public OnNPCModeExit()
{
    print("NPC scripti kaldırıldı");
    return 1;
}
```

## Bağlantılı Geri Çağırmalar

Aşağıdaki geri çağırmalar bu geri çağırma ile bir şekilde ilişkili olduğu için yararlı olabilir.

- [OnNPCModeInit](OnNPCModeInit): Bu geri çağırma, bir NPC scripti yüklendiğinde çağrılır.
