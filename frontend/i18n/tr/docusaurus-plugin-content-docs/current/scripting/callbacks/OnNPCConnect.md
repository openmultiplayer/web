---
title: OnNPCConnect
sidebar_label: OnNPCConnect
description: Bu geri çağırma, bir NPC sunucuya başarıyla bağlandığında çağrılır.
tags: ["npc"]
---

## Açıklama

Bu geri çağırma, bir NPC sunucuya başarıyla bağlandığında çağrılır.

| Parametre         | Açıklama                                        |
| ------------ | ----------------------------------------------- |
| myplayerid   | NPC'ye verilen playerid                         |

## Örnek

```c
public OnNPCConnect(myplayerid)
{
    printf("Sunucuya başarıyla ID %i ile bağlandım!", myplayerid);
}
```

## Bağlantılı Geri Çağırmalar

Aşağıdaki geri çağırmalar bu geri çağırma ile bir şekilde ilişkili olduğu için yararlı olabilir.

- [OnNPCDisconnect](OnNPCDisconnect): Bu geri çağırma, NPC sunucudan bağlantısı kesildiğinde çağrılır.
- [OnPlayerConnect](OnPlayerConnect): Bir oyuncu sunucuya bağlandığında çağrılır.
- [OnPlayerDisconnect](OnPlayerDisconnect): Bir oyuncu sunucudan ayrıldığında çağrılır.
