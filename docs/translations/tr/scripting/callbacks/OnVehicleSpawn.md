---
title: OnVehicleSpawn
description: Bu geri çağırma bir araç respawn edildiğinde çağrılır.
tags: ["vehicle"]
---

:::warning

Bu geri çağırma **sadece** araç **re**spawn edildiğinde çağrılır! CreateVehicle ve AddStaticVehicle(Ex) bu geri çağırmayı **tetiklemeyecektir**.

:::

## Açıklama

Bu geri çağırma bir araç respawn edildiğinde çağrılır.

| Parametre      | Açıklama                            |
| --------- | ----------------------------------- |
| vehicleid | Spawnlanan aracın ID'si.            |

## Çalışınca Vereceği Sonuçlar

0 - Diğer filterscriptslerin bu geri çağırmayı çağırmasını önler.

1 - Bu geri çağırmanın sonraki filterscriptslerde pas geçileceğini gösterir.

Her zaman ilk filterscriptslerde çağrılır.

## Örnek

```c
public OnVehicleSpawn(vehicleid)
{
    printf("Araç %i spawnlandı!",vehicleid);
    return 1;
}
```

## Bağlantılı Fonksiyonlar

- [SetVehicleToRespawn](../functions/SetVehicleToRespawn): Aracı respawn eder.
- [CreateVehicle](../functions/CreateVehicle): Araç oluşturur.
