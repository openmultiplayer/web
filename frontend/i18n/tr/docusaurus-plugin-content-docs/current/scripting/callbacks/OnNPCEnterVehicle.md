---
title: OnNPCEnterVehicle
sidebar_label: OnNPCEnterVehicle
description: Bu geri çağırma, bir NPC bir araca bindiğinde çağrılır.
tags: ["npc"]
---

## Açıklama

Bu geri çağırma, bir NPC bir araca bindiğinde çağrılır.

| Parametre         | Açıklama                                             |
| ------------ | ---------------------------------------------------- |
| vehicleid    | NPC'nin bindiği aracın ID'si                         |
| seatid       | NPC'nin kullandığı koltuk ID'si                      |

## Örnek

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    printf("OnNPCEnterVehicle ID: %d Koltuk: %d", vehicleid, seatid);
    return 1;
}
```

## Bağlantılı Geri Çağırmalar

Aşağıdaki geri çağırmalar bu geri çağırma ile bir şekilde ilişkili olduğu için yararlı olabilir.

- [OnNPCExitVehicle](OnNPCExitVehicle): Bu geri çağırma, bir NPC bir araçtan çıktığında çağrılır.
