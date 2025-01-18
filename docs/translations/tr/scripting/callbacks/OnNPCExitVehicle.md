---
title: OnNPCExitVehicle
description: Bu geri çağırma, bir NPC bir araçtan çıktığında çağrılır.
tags: ["npc"]
---

## Açıklama

Bu geri çağırma, bir NPC bir araçtan çıktığında çağrılır.

## Örnek

```c
public OnNPCExitVehicle()
{
    print("NPC araçtan çıktı");
    return 1;
}
```

## Bağlantılı Geri Çağırmalar

Aşağıdaki geri çağırmalar bu geri çağırma ile bir şekilde ilişkili olduğu için yararlı olabilir.

- [OnNPCEnterVehicle](OnNPCEnterVehicle): Bu geri çağırma, bir NPC bir araca bindiğinde çağrılır.
