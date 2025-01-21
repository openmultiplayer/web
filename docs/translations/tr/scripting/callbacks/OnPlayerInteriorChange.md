---
title: OnPlayerInteriorChange
description: Oyuncu interior değiştirdiğinde çalışır.
tags: ["player"]
---

## Açıklama

Oyuncu interior değiştirdiğinde çalışır. SetPlayerInterior tarafından ya da oyuncu bir interiora girip/çıktığı zaman tetiklenebilir.

| Parametre          | Açıklama                               |
| ------------- | -------------------------------------- |
| playerid      | Interioru değişen oyuncu.              |
| newinteriorid | Oyuncunun şu an bulunduğu interior.    |
| oldinteriorid | Oyuncunun daha önce bulunduğu interior.|

## Çalışınca Vereceği Sonuçlar

Her zaman öncelikle oyun modunda çağrılır.

## Örnek

```c
public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)
{
    new string[42];
    format(string, sizeof(string), "%d interiorundan %d interioruna gittiniz!", oldinteriorid, newinteriorid);
    SendClientMessage(playerid, COLOR_ORANGE, string);
    return 1;
}
```

## Bağlantılı Fonksiyonlar

- [SetPlayerInterior](../functions/SetPlayerInterior): Oyuncunun interiorunu ayarla.
- [GetPlayerInterior](../functions/GetPlayerInterior): Oyuncunun mevcut interior bilgisini öğren.
- [LinkVehicleToInterior](../functions/LinkVehicleToInterior): Aracın görülebileceği interioru değiştirin.
- [OnPlayerStateChange](OnPlayerStateChange): Oyuncunun durumu değiştiğinde çağrılır.
