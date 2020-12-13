---
title: OnPlayerDisconnect
description: Bu callback oyuncu sunucudan ayrıldığında çağrılır.
tags: ["player"]
---

## Açıklama

Bu callback oyuncu sunucudan ayrıldığında çağrılır.

| İsim     | Açıklama                           |
| -------- | ---------------------------------- |
| playerid | Sunucudan ayrılan oyuncunun id'si. |
| reason   | Sunucudan ayrılma sebebi.          |

## Çalışınca Vereceği Sonuçlar

0 - Diğer filterscriptlerde çağrılmasını engeller.

1 - Diğer filterscriptlerde aranması için pas geçirilir.

Her zaman öncelikle filterscriptlerde çağrılır.

## Örnekler

```c
public OnPlayerDisconnect(playerid, reason)
{
    new
        szString[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

    new szDisconnectReason[3][] =
    {
        "Zaman Aşımı",
        "Kendi İsteğiyle",
        "Kick/Ban"
    };

    format(szString, sizeof szString, "%s sunucudan ayrıldı. (%s).", playerName, szDisconnectReason[reason]);

    SendClientMessageToAll(0xC4C4C4FF, szString);
    return 1;
}
```

## Notlar

:::tip

Bu callback içerisinde bazı fonksiyonlar doğru bilgiler vermez (GetPlayerIp ve GetPlayerPos gibi)

:::

## Bağlı Fonksiyonlar
