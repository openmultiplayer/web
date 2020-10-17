---
id: OnObjectMoved
title: OnObjectMoved
description: Bu callback obje hareket etmeyi (MoveObject) bıraktıktan sonra çağrılır.
tags: []
---

## Açıklama

Bu callback obje hareket etmeyi (MoveObject) bıraktıktan sonra çağrılır.

| Ad     | Açıklama                         |
| -------- | ----------------------------------- |
| objectid | Hareket eden obje id |

## Çalışınca Vereceği Sonuçlar

Her zaman öncelikle filterscriptler içerisinde çağrılır.

## Örnekler

```c
public OnObjectMoved(objectid)
{
    printf("Obje id %d hareket etmeyi bıraktı.", objectid);
    return 1;
}
```

## Notlar

:::tip

SetObjectPos bu callback içerisinde çalışmaz. Bunu düzeltmek için objeyi yeniden oluşturun.

:::

## Bağlı Fonksiyonlar

- [MoveObject](../functions/MoveObject.md): Objeyi hareket ettirme fonksiyonu.
- [MovePlayerObject](../functions/MovePlayerObject.md): Oyuncu objesini hareket ettirme fonksiyonu.
- [IsObjectMoving](../functions/IsObjectMoving.md): Objenin hareket edip etmediğini kontrol etme fonksiyonu.
- [StopObject](../functions/StopObject.md): Hareket eden objeyi durdurur.
- [OnPlayerObjectMoved](OnPlayerObjectMoved.md): Oyuncu objesi hareket etmeyi bıraktığında çağrılan callback.
