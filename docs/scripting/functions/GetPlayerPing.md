---
title: GetPlayerPing
description: Oyuncunun ping değerini alır.
tags: ["player"]
---

## Açıklama

Oyuncunun ping değerini alır. Ping, sunucudan, istemciye giden verinin geri gelme süresine denir.

| İsim     | Açıklama                                 |
| -------- | ---------------------------------------- |
| playerid | Ping değeri alınacak oyuncuun ID'si.     |

## Geri Döndürülen Değer

Oyuncunun şuanki değeri. (milisaniye cinsinden.)

## Örnekler

```c
// Oyuncunun pingini kontrol edecek olan zamanlayıcı için bir değişken oluşturulur.
// varsayılan değeri -1
new
    gPlayerPingTimer[MAX_PLAYERS] = {-1, ...};

// Maksimum kabul edilebilir pingi belirlemek için salt okunur, başka bir işlem tarafından değiştirilemez bir değer oluşturulur.
const
    MAX_ACCEPTED_PING = 500;

public OnPlayerConnect(playerid)
{
    // Oyuncu giriş yaptığında oyuncunun playerid'si ile zamanlyıcı başlatılır.
    gPlayerPingTimer[playerid] = SetTimerEx("Ping_Timer", 3 * 1000, true, "i", playerid);
}

public OnPlayerDisconnect(playerid, reason)
{
    // Oyuncu çıkış yaptığında zamanlayıcıyı kapatır ve zamanlayıcı değişkenini geçersiz yapar.
    KillTimer(gPlayerPingTimer[playerid]);
    gPlayerPingTimer[playerid] = -1;
}

// Zamanlayıcı için bir function oluşturulur.
forward public Ping_Timer(playerid);
public Ping_Timer(playerid)
{
    // Eğer oyuncunun pingi maksimum kabul edilebilir ping değerinden yüksekse (500) oyuncuyu oyundan atar.
    if (GetPlayerPing(playerid) > MAX_ACCEPTED_PING)
    {
        SendClientMessageToAll()
        Kick(playerid);
    }
    return 1;
}
```

## Not

:::warning

Oyuncu giriş yaptıktan sonra kısa bir süreliğine ping değeri 65535 olarak görünebilir.

:::

## İlişkili Fonksiyonlar

- [GetPlayerIp](GetPlayerIp.md): Oyuncu IP'sini alır.
- [GetPlayerName](GetPlayerName.md): Oyuncu ismini alır.
- [GetPlayerVersion](GetPlayerVersion.md): Oyuncunun istemci versiyonunu alır.
