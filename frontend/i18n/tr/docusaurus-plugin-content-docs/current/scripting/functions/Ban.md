---
title: Ban
sidebar_label: Ban
description: Sunucuda olan birini yasaklama.
tags: ["administration"]
---

## Açıklama

Sunucuda aktif olan birisini yasaklayın. Yasaklanan kişi bir daha sunucuya giremez. Yasaklanan kişi IP tabanlı yasaklanır ve sunucu dizininde bulunan samp.ban dosyasına yasaklama kaydı oluşturulur. Özel bir neden göstemrek için BanEx kullanılabilir. IP yasaklamalarını kaldırmak/eklemek için RCON gişirinizden sonra banip ve unbanip komutlar kullanılabilir. 

| Parametre | Açıklama                      |
| --------- | ----------------------------- |
| playerid  | Yasaklanacak oyuncunun ID'si. |

## Çalışınca Vereceği Sonuçlar

Bu fonksiyon herhangi bir değer döndürmez.

## Örnekler

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // Komutu kullanan kişi yasaklanır.
        Ban(playerid);
        return 1;
    }
}
// Oyuncuyu yasaklamadan önce bir mesaj (örn. yasaklanma açıklaması) göndermek için
// bir zamanlayıcı (timer) oluşturmanız gerekir. Bu zamanlayıcının bir kaç milisaniye olması yeterlidir,
// ancak alt taraftaki örnekte güvenli olması açısından tam bir saniye kullanılmıştır.

forward DelayedBan(playerid);
public DelayedBan(playerid)
{
    Ban(playerid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // Bu komutu kullanan oyuncu yasaklanır.

        // Yasaklandığına dair mesajı gönderiyoruz.
        SendClientMessage(playerid, 0xFF0000FF, "Yasaklandınız!");

        // Ardından oyuncu bir zamanlayıcı içerisine giriyor ve sunucudan yasaklanıyor.
        SetTimerEx("DelayedBan", 1000, false, "d", playerid);
        return 1;
    }
    return 0;
}
```

## Notlar

:::warning

Ban() fonksiyonu kullanılmadan önce giden mesaj (örn. SendClientMessage) veya başka bir fonksiyon oyuncuya ulaşmayacaktır. Mesajın veya bir başka fonksiyonun oyuncuya ulaşması için zamanlayıcı (timer) kullanılmalıdır.

:::

## Bağlantılı Fonksiyonlar

- [BanEx](BanEx): Oyuncuyu özel bir nedenle yasaklama.
- [Kick](Kick): Oyuncuyu sunucudan atma (kick).
