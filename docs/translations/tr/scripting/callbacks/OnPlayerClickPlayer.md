---
title: OnPlayerClickPlayer
description: Bu callback oyuncu skor tablosunda bir oyuncuya iki kez tıkladığında çağrılır.
tags: ["player"]
---

## Açıklama

Bu callback oyuncu skor tablosunda bir oyuncuya iki kez tıkladığında çağrılır.

| Ad              | Açıklama                        |
| --------------- | ------------------------------- |
| playerid        | Tıklayan oyuncunun id'si.       |
| clickedplayerid | Tıklanılan oyuncunun id'si.     |
| source          | Oyuncunun tıklamasının kaynağı. |

## Çalışınca Vereceği Sonuçlar

1 - Bu callbackin diğer filterscriptlerde çağrılmasını engeller.

0 - Diğer filterscriptler içinde aranması için pas geçilir.

Her zaman öncelikle filterscriptlerde çağrılır.

## Örnekler

```c
public OnPlayerClickPlayer(playerid, clickedplayerid, source)
{
    new mesaj[32];
    format(mesaj, sizeof(mesaj), "%d id'li oyuncuya tıkladınız.", clickedplayerid);
    SendClientMessage(playerid, 0xFFFFFFFF, mesaj);
    return 1;
}
```

## Notlar

:::tip

Şuanlık sadece bir 'source' var (0 - CLICK_SOURCE_SCOREBOARD). İlerde daha fazla kaynak eklenebilir.

:::

## Bağlı Fonksiyonlar

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw.md): Oyuncu bir textdrawa tıkladığında çağrılan callback.
