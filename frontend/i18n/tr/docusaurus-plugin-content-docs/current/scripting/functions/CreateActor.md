---
title: CreateActor
sidebar_label: CreateActor
description: Statik aktör oluşturma.
tags: []
---

<VersionWarnTR version='SA-MP 0.3.7' />

## Açıklama

Statik 'aktör' oluşturun. Aktörler NPC'lere benzer, ancak işlevleri sınırlıdır. Aktörler oyuncu slotlarını doldurmazlar.

| Parametre | Açıklama                                           |
| --------  | -------------------------------------------------- |
| modelid   | Aktöre ait olacak model (Skin) ID'si.              |
| x         | Aktörün oluşturulacağı X koordinatı.               |
| y         | Aktörün oluşturulacağı Y koordinatı.               |
| z         | Aktörün oluşturulacağı Z koordinatı.               |
| Rotation  | Aktöre ait olan açı.                               |

## Çalışınca Vereceği Sonuçlar

1: Aktör başarıyla oluşturuldu. (ID 0'dan başlar).

0: Aktör oluşturulamadı. (Eğer aktör limitine (1000) ulaşılırsa)

## Örnekler

```c
new gActorCJ;

public OnGameModeInit()
{
    // Aktörümüzü harita üzerinde Blueberry Acress Bölgesi üzerinde oluşturuyoruz.
    gActorCJ = CreateActor(0, 0.0, 0.0, 3.0, 0.0);
}

public OnGameModeExit()
{
    // Sevgili CJ'i sildik. (CJ)
    DestroyActor(gActorCJ);
}
```

## Notlar

:::tip

Aktörler, kasiyerler ve barmenler gibi sadece bir yerde duracak şekilde tasarlanmıştır. ApplyActorAnimation kullanarak (döngü veya bir kez) animasyonlar gerçekleştirebilir.

:::

:::warning

Aktörler NPC'lerden tamamen farklıdır. Sunucunun slotlarını KULLANMAZLAR ve NPC'ler gibi KULLANILMAZLAR. 
Aktörler 1000 (MAX_ACTORS) ile sınırlıdır. Araçlar ile itilebilirler, ayrıca konumlarına geri koymak içinde timer kullanılabilir.
0.3.7 R2 sürümü ve sonraki sürümlerde aktörler dokunulmaz (hasar almaz) olarak ayarlanabilir.

:::

## Bağlantılı Fonksiyonlar

- [DestroyActor](DestroyActor): Oluşturduğunuz aktörü silme.
- [SetActorPos](SetActorPos): Aktörün harita üzerindeki pozisyonunu düzenleme.
- [GetActorPos](GetActorPos): Aktörün harita üzerindeki pozisyonunu kontrol etme.
- [SetActorFacingAngle](SetActorFacingAngle): Aktörün açısını düzenleme.
- [GetActorFacingAngle](GetActorFacingAngle): Aktörün açısını kontrol etme.
- [SetActorVirtualWorld](SetActorVirtualWorld): Aktörün sanal dünya değerini düzenleme.
- [GetActorVirtualWorld](GetActorVirtualWorld): Aktörün sanal dünya değerini kontrol etme.
- [ApplyActorAnimation](ApplyActorAnimation): Aktöre animasyon uygulatma.
- [ClearActorAnimations](ClearActorAnimations): Aktörün animasyonunu durdurma. 
- [GetPlayerCameraTargetActor](GetPlayerCameraTargetActor): Bir oyuncunun baktığı aktör ID'sini çekme.
- [IsActorStreamedIn](IsActorStreamedIn): Oyuncu için aktörün olup olmadığını kontrol etme.
- [SetActorHealth](SetActorHealth): Aktörün can değerini düzenleme.
- [GetActorHealth](GetActorHealth): Aktörün candeğerini kontrol etme.
- [SetActorInvulnerable](SetActorInvulnerable): Aktörün dokunulmazlığını düzenleme.
- [IsActorInvulnerable](IsActorInvulnerable): Aktörün dokunulmazlığını kontrol etme.
- [IsValidActor](IsValidActor): Aktörün oluşturulup oluşturulmadığını kontrol etme.
- [GetActorPoolSize](GetActorPoolSize): Sunucuda oluşturulan en son aktörü kontrol etme.
- [GetPlayerTargetActor](GetPlayerTargetActor): Oyuncunun hedef aldığı (silahla) aktörün ID'sini kontrol etme.
- [OnActorStreamIn](../callbacks/OnActorStreamIn): Bu callback, bir aktör başka bir oyuncunun akış alanına girdiğinde tetiklenir.
- [OnActorStreamOut](../callbacks/OnActorStreamOut): Bu callback, bir aktör oyuncunun akış alanından ayrıldığında tetiklenir.
- [OnPlayerGiveDamageActor](../callbacks/OnPlayerGiveDamageActor): Bu callback, bir oyuncu bir NPC'ye hasar verdiğinde çağırılır.
