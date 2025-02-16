---
title: OnNPCDisconnect
sidebar_label: OnNPCDisconnect
description: Bu geri çağırma, NPC sunucudan bağlantısı kesildiğinde çağrılır.
tags: ["npc"]
---

## Açıklama

Bu geri çağırma, NPC sunucudan bağlantısı kesildiğinde çağrılır.

| Parametre         | Açıklama                                             |
| ------------ | ---------------------------------------------------- |
| reason[]     | Botun sunucudan neden bağlantısının kesildiği        |

## Örnek

```c
public OnNPCDisconnect(reason[])
{
    printf("Sunucudan bağlantı kesildi. %s", reason);
}
```

## Bağlantılı Geri Çağırmalar

Aşağıdaki geri çağırmalar bu geri çağırma ile bir şekilde ilişkili olduğu için yararlı olabilir.

- [OnNPCConnect](OnNPCConnect): Bu geri çağırma, NPC sunucuya başarıyla bağlandığında çağrılır.
- [OnPlayerDisconnect](OnPlayerDisconnect): Bir oyuncu sunucudan ayrıldığında çağrılır.
- [OnPlayerConnect](OnPlayerConnect): Bir oyuncu sunucuya bağlandığında çağrılır.
