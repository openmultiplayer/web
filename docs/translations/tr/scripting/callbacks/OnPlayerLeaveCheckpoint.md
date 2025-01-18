---
title: OnPlayerLeaveCheckpoint
description: Bu fonksiyon, bir oyuncu SetPlayerCheckpoint tarafından kendisi için ayarlanan kontrol noktasından ayrıldığında çağrılır. 
tags: ["player", "checkpoint"]
---

## Açıklama

Bu fonksiyon, bir oyuncu SetPlayerCheckpoint tarafından kendisi için ayarlanan kontrol noktasından ayrıldığında çağrılır. 

| Parametre | Açıklama                                         |
| --------- | ------------------------------------------------ |
| playerid  | Kontrol noktasından ayrılan oyuncunun ID'si.     |

## Çalışınca Vereceği Sonuçlar

Filterscript komutlarında her zaman ilk olarak çağrılır. 

## Örnek

```c
public OnPlayerLeaveCheckpoint(playerid)
{
    printf("%i ID'li oyuncu kontrol noktasından çıkış yaptı!", playerid);
    return 1;
}
```

## Notlar

<TipNPCCallbacks />

## Bağlantılı Fonksiyonlar

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Oyuncu için kontrol noktasını belirleme.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Oyuncu için kontrol noktasını devre dışı bırakma.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Oyuncunun kontrol noktasında olup olmadığını kontrol etme.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Oyuncu için yarış kontrol noktasını belirleme.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Oyuncu için yarış kontrol noktasını devre dışı bırakma.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Oyuncunun yarış kontrol noktasında olup olmadığını kontrol etme.
