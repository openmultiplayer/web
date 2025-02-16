---
title: OnPlayerClickPlayer
sidebar_label: OnPlayerClickPlayer
description: Bu geri çağırma oyuncu skor tablosunda bir oyuncuya iki kez tıkladığında çağrılır.
tags: ["player"]
---

## Açıklama

Bu geri çağırma oyuncu skor tablosunda bir oyuncuya iki kez tıkladığında çağrılır.

| Parametre              | Açıklama                        |
| --------------- | ------------------------------- |
| playerid        | Tıklayan oyuncunun id'si.       |
| clickedplayerid | Tıklanılan oyuncunun id'si.     |
| source          | Oyuncunun tıklamasının kaynağı. |

## Çalışınca Vereceği Sonuçlar

1 - Bu geri çağırma diğer filterscriptlerde çağrılmasını engeller.

0 - Diğer filterscriptler içinde aranması için pas geçilir.

Her zaman öncelikle filterscriptlerde çağrılır.

## Örnek

```c
public OnPlayerClickPlayer(playerid, clickedplayerid, CLICK_SOURCE:source)
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

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw.md): Oyuncu bir textdrawa tıkladığında çağrılan geri çağırma.
