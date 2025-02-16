---
title: AllowNickNameCharacter
sidebar_label: AllowNickNameCharacter
description: Bir karakterin takma adlarda kullanılmasına izin verir.
tags: []
---

<VersionWarnTR version='omp v1.1.0.2612' />

## Açıklama

Bir karakterin takma adlarda kullanılmasına izin verir.

| İsim     | Açıklama                             |
| -------- | --------------------------------------- |
| character | İzin verilecek veya izin verilmeyecek karakter.    |
| bool:allow | true - İzin ver, false - İzin verme            |

## Çalışınca Vereceği Sonuçlar

Bu fonksiyon belirli bir değer döndürmez.

## Örnekler

```c
public OnGameModeInit()
{
    AllowNickNameCharacter('*', true); // * karakterine izin ver
    AllowNickNameCharacter('[', false); // [ karakterine izin verme
    AllowNickNameCharacter(']', false); // ] karakterine izin verme

    return 1;
}
```

## Bağlantılı Fonksiyonlar

- [IsValidNickName](IsValidNickName): Bir takma adın geçerli olup olmadığını kontrol eder.
- [SetPlayerName](SetPlayerName): Bir oyuncunun adını ayarlar.
- [GetPlayerName](GetPlayerName): Bir oyuncunun adını alır.
