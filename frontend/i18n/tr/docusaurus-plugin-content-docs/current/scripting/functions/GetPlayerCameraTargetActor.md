---
title: GetPlayerCameraTargetActor
sidebar_label: GetPlayerCameraTargetActor
description: Oyuncunun baktığı aktörün (herhangi bir aktörün) ID'sini çekme.
tags: ["player", "camera", "actor"]
---

<VersionWarnTR version='SA-MP 0.3.7' />

## Açıklama

Oyuncunun baktığı aktörün (herhangi bir aktörün) ID'sini çekme.

| Parametre | Açıklama                                         |
| --------  | ------------------------------------------------ |
| playerid  | Herhangi bir aktöre bakan oyuncunun ID'si.       |

## Çalışınca Vereceği Sonuçlar

Oyunncunun baktığı aktörün ID'si.

## Örnekler

```c
new bool:ActorHandsup[MAX_ACTORS];

public OnPlayerConnect(playerid)
{
    EnablePlayerCameraTarget(playerid, 1); // Oyuncu girdiğinde kamera hedefi etkin hale gelir (1:aktif, 0:kapalı).
    return 1;
}

public OnPlayerUpdate(playerid)
{
    // Oyuncunun hangi aktöre baktığını opsiyonel şekilde değişken olarak tanıttık.
    new playerTargetActor = GetPlayerCameraTargetActor(playerid);

    // Oyuncu baktığı şey geçersiz aktör ID'si değilse.
    if (playerTargetActor != INVALID_ACTOR_ID)
    {
        // Oyuncunun elinde olan silahı opsiyonel şekilde değişken olarak tanıttık.
        new playerWeapon = GetPlayerWeapon(playerid);

        // Oyuncunun bastığı tuşları kontrol ediyoruz, böylece nişan alıp almadığını kontrol ediyoruz.
        new KEY:keys, updown, leftright;
        GetPlayerKeys(playerid, keys, updown, leftright);

        // Oyuncunun hedef aldığı aktör eğer ELLERİNİ KALDIRMADIYSA, elindeki silah'ın GTA:SA ID'si 22 üzeri ve 42'den aşağıysa ve AİM tuşuna basıyorsa
        if (!ActorHandsup[playerTargetActor] && playerWeapon >= 22 && playerWeapon <= 42 && keys & KEY_AIM)
        {
            // Aktör ellerini kaldırma animasyonunu uygular.
            ApplyActorAnimation(playerTargetActor, "SHOP", "SHP_HandsUp_Scr",4.1,0,0,0,1,0);

            // Hedef alınan aktör'ün ellerini kaldırma değişkeni true yani aktif/doğru hale gelir.
            ActorHandsup[playerTargetActor] = true;
        }
    }
    return 1;
}
```

## Notlar

:::tip

Bu fonksiyon oyuncunun aktöre bakıp bakmadığı kontrol eder. 
Eğer tam anlamıyla oyuncunun nişan alıp almadığını kontrol etmek için GetPlayerTargetActor fonksiyonunu kullanmanız gerekir.

:::

:::warning

Bu fonksiyon, bant genişliğinden tasarruf etmek için varsayılan olarak devre dışı bırakılmıştır. 
Kullanılmadan önce OnPlayerConnect üzerinden EnablePlayerCameraTarget fonksiyonunu (her) oyuncu için aktif hale getirilmesi gerekiyor.

:::

## Bağlantılı Fonksiyonlar

- [GetPlayerTargetActor](GetPlayerTargetActor): Oyuncunun silah ile hedef aldığı oyuncuyu kontrol eder.
- [GetPlayerCameraTargetPlayer](GetPlayerCameratargetPlayer): Oyuncunun kamerası ile baktığı oyuncuyu kontrol eder.
- [GetPlayerCameraTargetVehicle](GetPlayerCameraTargetVehicle): Oyuncunun kamerası ile baktığı aracı kontrol eder.
- [GetPlayerCameraTargetObject](GetPlayerCameraTargetObject): Oyuncunun kamerası ile baktığı objeyi kontrol eder.
- [GetPlayerCameraFrontVector](GetPlayerCaemraFrontVector): Oyuncu kamerasının ön vektörünü alır.
