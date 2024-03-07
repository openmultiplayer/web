---
title: OnPlayerSpawn
description: Bu fonksiyon, oyuncu doğduğunda çağrılır.
tags: ["player"]
---

## Açıklama

Bu fonksiyon, oyuncu doğduğunda çağrılır.(ör. SpawnPlayer'i çalıştırdıktan sonra)

| Parametre | Açıklama                           |
| --------- | ---------------------------------- |
| playerid  | Doğan oyuncunun ID'si.             |

## Çalışınca Vereceği Sonuçlar

0 - Diğer filterscript komutlarının bu çağrıyı almasını önleyecektir.

1 - Bu geri çağrının sonraki filterscript komutuna aktarılacağını belirtir.

Filterscript komutlarında her zaman ilk olarak çağırılır.

## Örnekler

```c
public OnPlayerSpawn(playerid)
{
    new PlayerName[MAX_PLAYER_NAME],
    string[40];
    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));
    format(string, sizeof(string), "%s adlı kişi başarıyla doğdu.", PlayerName);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notlar

:::tip

Oyuncu spawn olduktan sonra bazen \$100 oyuncunun üzerinden alabilir.

:::

## Bağlantılı Fonksiyonlar

- [SpawnPlayer](../functions/SpawnPlayer): Oyuncuyu doğmaya zorlama.
- [AddPlayerClass](../functions/AddPlayerClass): Bir sınıf ekleme.
- [SetSpawnInfo](../functions/SetSpawnInfo): Oyuncunun doğma bilgilerini düzenleyin.
