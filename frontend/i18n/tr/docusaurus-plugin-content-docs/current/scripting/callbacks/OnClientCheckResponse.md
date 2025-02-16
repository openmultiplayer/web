---
title: OnClientCheckResponse
sidebar_label: OnClientCheckResponse
description: Bir SendClientCheck isteği tamamlandığında bu geri çağırma çağrılır
tags: []
---

## Açıklama

Bir SendClientCheck isteği tamamlandığında bu geri çağırma çağrılır.

| Paramtre      | Açıklama                           |
| ------------- | --------------------------------- |
| playerid      | Kontrol edilen oyuncunun ID'si.    |
| actionid      | Gerçekleştirilen kontrol türü.     |
| memaddr       | İstenen adres.                     |
| retndata      | Kontrolün sonucu.                  |

## Çalışınca Vereceği Sonuçlar

Her zaman ilk olarak filterscriptlerde çağrılır.

## Örnek

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if (actionid == 0x48) // veya 72
    {
        print("UYARI: Oyuncu normal bir bilgisayar kullanmıyor gibi görünüyor!");
        Kick(playerid);
    }
    return 1;
}
```

## Notlar

:::warning

**SA:MP Sunucusu**: Bu geri çağırma yalnızca bir filterscript içindeyken çağrılır.

**Open Multiplayer Sunucusu**: Bu geri çağırma bir oyun modu / filterscript içinde normal şekilde çalışır.

:::

## Bağlantılı Fonksiyonlar

Aşağıdaki fonksiyon bu geri çağırma ile bir şekilde ilişkili olduğu için yararlı olabilir.

- [SendClientCheck](../functions/SendClientCheck): İstemcide bir bellek kontrolü gerçekleştirin.
