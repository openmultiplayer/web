---
title: Kick
description: Oyuncuyu sunucudan atma.
tags: ["administration"]
---

## Description

Oyuncuyu sunucudan atma. Oynamaya devam etmek istiyorsa oyundan çıkıp tekrar girmesi gerekmekte.

| Parametre | Açıklama                                     |
| --------- | -------------------------------------------- |
| playerid  | Sunucudan atılacak kişinin ID'si.            |

## Çalışınca Vereceği Sonuçlar

Bu fonksiyon, fonksiyonun yürütülmesi başarısız olsa bile her zaman 1 döndürür. (belirtilen ID oyunda olmasa bile).

## Notlar

:::warning

Kick() fonksiyonu kullanılmadan önce giden mesaj (örn. SendClientMessage) veya başka bir fonksiyon oyuncuya ulaşmayacaktır. Mesajın veya bir başka fonksiyonun oyuncuya ulaşması için zamanlayıcı (timer) kullanılmalıdır.

:::

## Örnekler

```c
// Oyuncuyu sunucudan atmadan önce bir mesaj (örn. sunucudan atılma açıklaması) göndermek için
// bir zamanlayıcı (timer) oluşturmanız gerekir. Bu zamanlayıcının bir kaç milisaniye olması yeterlidir,
// ancak alt taraftaki örnekte güvenli olması açısından tam bir saniye kullanılmıştır.

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/kickme", true) == 0)
    {
        // Komutu kim kullanırsa sunucudan atılır.

        // Öncelikle komutu kullanan oyuncuya mesaj gönderiyoruz.
        SendClientMessage(playerid, 0xFF0000FF, "Sunucudan atıldınız!");

        // Oyuncu zamanlayıcıyla bir saniye sonra kicklenecek.
        SetTimerEx("DelayedKick", 1000, false, "i", playerid);
        return 1;
    }
    return 0;
}

forward DelayedKick(playerid);
public DelayedKick(playerid)
{
    Kick(playerid);
    return 1;
}
```

## Bağlantılı Fonksiyonlar

- [Ban](Ban): Oyuncuyu sunucudan yasaklama.
- [BanEx](BanEx): Oyuncuyu sunucudan özel bir nedenle yasaklama.
