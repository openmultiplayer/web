---
title: BanEx
sidebar_label: BanEx
description: Oyuncuyu özel bir nedenle yasaklama.
tags: ["administration"]
---

## Açıklama

Oyuncuyu özel bir nedenle yasaklama.

| Parametre | Açıklama                      |
| --------- | ----------------------------- |
| playerid  | Yasaklanacak oyuncunun ID'si. |
| reason    | Yasaklamanın özel nedeni.     |

## Çalışınca Vereceği Sonuçlar

Bu fonksiyon özel bir değer döndürmez.

## Örnekler

```c
public OnPlayerCommandText( playerid, cmdtext[] )
{
    if (!strcmp(cmdtext, "/banme", true))
    {
        // Komutu kullanan oyuncu yasaklanır ve özel bir nedeni ("İstek") olarak yazar.
        BanEx(playerid, "İstek");
        return 1;
    }
}
// Oyuncuyu yasaklamadan önce bir mesaj (örn. yasaklanma açıklaması) göndermek için
// bir zamanlayıcı (timer) oluşturmanız gerekir. Bu zamanlayıcının bir kaç milisaniye olması yeterlidir,
// ancak alt taraftaki örnekte güvenli olması açısından tam bir saniye kullanılmıştır.

forward BanExPublic(playerid, reason[]);

public BanExPublic(playerid, reason[])
{
    BanEx(playerid, reason);
}

stock BanExWithMessage(playerid, color, message[], reason[])
{
    //reason - Yasaklama için özel neden.
    SendClientMessage(playerid, color, message);
    SetTimerEx("BanExPublic", 1000, false, "ds", playerid, reason);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        //Komutu kim kullanırsa yasaklanır.
        BanExWithMessage(playerid, 0xFF0000FF, "Yasaklandınız!", "İstek");
        return 1;
    }
    return 0;
}
```

## Notlar

:::warning

BanEx() fonksiyonu kullanılmadan önce giden mesaj (örn. SendClientMessage) veya başka bir fonksiyon oyuncuya ulaşmayacaktır. Mesajın veya bir başka fonksiyonun oyuncuya ulaşması için zamanlayıcı (timer) kullanılmalıdır.

:::

## Bağlantılı Fonksiyonlar

- [Ban](Ban): Bir oyuncuyu yasaklama.
- [Kick](Kick): Oyuncuyu sunucudan atma (kick).
