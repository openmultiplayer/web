---
title: OnPlayerRequestSpawn
description: Fonksiyon, Bir oyuncu SHIFT'e basarak veya 'Spawn' düğmesine tıklayarak sınıf seçimi yoluyla doğmaya çalıştığında çağrılır.
tags: ["player"]
---

## Açıklama

Fonksiyon, Bir oyuncu SHIFT'e basarak veya 'Spawn' düğmesine tıklayarak sınıf seçimi yoluyla doğmaya çalıştığında çağrılır.

| Parametre | Açıklama                                      |
| --------- | --------------------------------------------- |
| playerid  | Doğmak isteyen oyuncunun ID'si.               |

## Çalışınca Vereceği Sonuçlar

Filterscript komut dosyalarında her zaman ilk olarak çağrılır, bu nedenle 0 döndürmek diğer komut dosyalarının da görmesini engeller.

## Örnekler

```c
public OnPlayerRequestSpawn(playerid)
{
    if (!IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, -1, "Doğamazsınız.");
        return 0;
    }
    return 1;
}
```

## Notlar

<TipNPCCallbacks />

:::tip

Oyuncuların belirli sınıflarla ortaya çıkmasını önlemek için son görüntülenen sınıf, OnPlayerRequestClass içinde bir değişkene kaydedilmelidir.

:::

## Bağlantılı Fonksiyonlar
