---
title: OnObjectMoved
description: Bu callback obje hareket etmeyi (MoveObject) bıraktıktan sonra çağrılır.
tags: []
---

## Açıklama

Bu callback obje hareket etmeyi (MoveObject) bıraktıktan sonra çağrılır.

| Ad       | Açıklama             |
| -------- | -------------------- |
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

- [MoveObject](../functions/MoveObject): Objeyi hareket ettirme fonksiyonu.
- [MovePlayerObject](../functions/MovePlayerObject): Oyuncu objesini hareket ettirme fonksiyonu.
- [IsObjectMoving](../functions/IsObjectMoving): Objenin hareket edip etmediğini kontrol etme fonksiyonu.
- [StopObject](../functions/StopObject): Hareket eden objeyi durdurur.
- [OnPlayerObjectMoved](OnPlayerObjectMoved): Oyuncu objesi hareket etmeyi bıraktığında çağrılan callback.
