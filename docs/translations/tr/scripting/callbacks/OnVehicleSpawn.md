---
title: OnVehicleSpawn
description: Bu callback bir araç respawn edildiğinde çağrılır.
tags: ["vehicle"]
---

:::warning

Bu callback **sadece** araç **re**spawn edildiğinde çağrılır! CreateVehicle ve AddStaticVehicle(Ex) bu callbacki **tetiklemeyecektir**.

:::

## Açıklama

Bu callback bir araç respawn edildiğinde çağrılır.

| İsim      | Açıklama                            |
| --------- | ----------------------------------- |
| vehicleid | Spawnlanan aracın ID'si.            |

## Çalışınca Vereceği Sonuçlar

0 - Diğer filterscriptslerin bu callbacki çağırmasını önler.

1 - Bu callbackin sonraki filterscriptslerde pas geçileceğini gösterir.

Her zaman ilk filterscriptslerde çağrılır.

## Örnekler

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
