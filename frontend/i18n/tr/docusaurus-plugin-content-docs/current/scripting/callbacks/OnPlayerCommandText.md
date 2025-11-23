---
title: OnPlayerCommandText
sidebar_label: OnPlayerCommandText
description: Bu geri çağırma oyuncu chat ekranında herhangi bir komut kullandığında çağrılır.
tags: ["player"]
---

## Açıklama

Bu geri çağırma oyuncu chat ekranında herhangi bir komut kullandığında çağrılır. '/' ile başlayan her şey komuttur ve bu fonksiyonu çağırır. (örnek: /yardim)

| Parametre        | Açıklama                                 |
| --------- | ---------------------------------------- |
| playerid  | Komutu kullanan oyuncunun id'si.         |
| cmdtext[] | Kullanılan komut ('/' işareti de dahil). |

## Çalışınca Vereceği Sonuçlar

Her zaman öncelikle filterscriptlerde çalışır ve 1 değerini döndürmek diğer scriptlerin çağrılmasını engeller.

## Örnek

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/yardim", true))
    {
        SendClientMessage(playerid, -1, "SUNUCU: /yardim komutunu kullandınız!");
        return 1;
        // return 1 vermemiz sunucuya bu komutun işlendiğini bildirir.
        // OnPlayerCommandText diğer scriptlerde çağrılmaz.
    }
    return 0;
    // return 0 vermemiz sunucuya bu komutun bu script tarafından işlenmediğini bildirir.
    // 1 değeri dönene kadar OnPlayerCommandText diğer scriptlerde çağrılır.
    // Eğer hiç bir script 1 değerini döndürmezse 'SERVER: Unknown Command' mesajı belirir.
}
```

## Notlar

:::tip

Bu geri çağırma NPC tarafından da çağrılabilir.

:::

## Bağlı Fonksiyonlar

- [SendRconCommand](../functions/SendRconCommand): RCON komutunun gönderilmesini sağlar.
