---
title: OnPlayerConnect
sidebar_label: OnPlayerConnect
description: Bu geri çağırma oyuncu sunucuya bağlandığında çağrılır.
tags: ["player"]
---

## Açıklama

Bu geri çağırma oyuncu sunucuya bağlandığında çağrılır.

| Parametre       | Açıklama                  |
| -------- | ------------------------- |
| playerid | Bağlanan oyuncunun id'si. |

## Çalışınca Vereceği Sonuçlar

0 - Diğer filterscriptler içerisinde çağrılmasını engeller.

1 - Diğer filterscriptler içinde aranması için pas geçilir.

Her zaman öncelikle filterscriptlerde çağrılır.

## Örnek

```c
public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    format(string, sizeof string, "%s sunucuya bağlandı.", playerName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## Notlar

:::tip

Bu geri çağırma NPC tarafından da çağrılabilir.

:::

## Bağlı Fonksiyonlar
