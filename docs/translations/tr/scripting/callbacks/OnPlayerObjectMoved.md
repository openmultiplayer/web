---
title: OnPlayerObjectMoved
description: Fonksiyon, bir oyuncu objesi MovePlayerObject'den sonra hareket ettirildiğinde (hareket etmeyi durdurduğunda) çağrılır. 
tags: ["player"]
---

## Açıklama

Fonksiyon, bir oyuncu objesi MovePlayerObject'den sonra hareket ettirildiğinde (hareket etmeyi durdurduğunda) çağrılır. 

| Parametre | Açıklama                                   |
| --------- | ------------------------------------------ |
| playerid  | Objenin atandığı oyuncunun ID'si.          |
| objectid  | Hareket ettirilen oyuncu objesinin ID'si.  |

## Çalışınca Vereceği Sonuçlar

Filterscript komutlarında her zaman ilk olarak çağrılır. 

## Örnek

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    printf("Oyuncu objesi haraket ettirildi: object id: %d oyuncu id: %d", objectid, playerid);
    return 1;
}
```

## Notlar

:::tip

Bu fonksiyon, NPC için de çağrılabilir. 

:::

## Bağlantılı Fonksiyonlar

- [MovePlayerObject](../functions/MovePlayerObject): Oyuncu objesi hareket ettirme.
- [IsPlayerObjectMoving](../functions/IsPlayerObjectMoving): Oyuncu objesinin hareket edip etmediğini kontrol etme.
- [StopPlayerObject](../functions/StopPlayerObject): Hareket eden oyuncu objesini durdurma.
- [CreatePlayerObject](../functions/CreatePlayerObject): Oyuncu objesi oluşturma.
- [DestroyPlayerObject](../functions/DestroyPlayerObject): Oyuncu objesi silme.
