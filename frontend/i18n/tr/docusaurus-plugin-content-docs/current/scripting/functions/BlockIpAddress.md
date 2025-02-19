---
title: BlockIpAddress
sidebar_label: BlockIpAddress
description: IP adresini sunucu üzerinden bloklama. (with wildcards allowed).
tags: []
---

## Açıklama

IP adresini sunucudan bloklar. Belirtilen oyuncu girmeye çalıştığında sunucudan bloklandığına dair mesaj alır ve giremez. Belirtilen IP'ye sahip birisi eğer sunucu üzerinde aktifse bir kaç saniye içerisinde yasaklanır ve zaman aşımına uğrar, bir süre sonra tekrar girmeye çalıştığında yasaklandığına dair mesaj alır ve sunucuyla bağlantı kuramaz.

| Parametre  | Açıklama                                                                                                   |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| ip_address | Bloklanacak IP adresi.                                                                                     |
| timems     | IP'nin engelleneceği süre (milisaniye cinsinden). 0, belirsiz bir süre için kullanılabilir.                |

## Çalışınca Vereceği Sonuçlar

Bu fonksiyon herhangi bir değer döndürmez. 

## Örnekler

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) // Oyuncu eğer RCON girişi sırasında hatalı RCON parolası girerse...
    {
        BlockIpAddress(ip, 60 * 1000); // Hatalı RCON parolası giren oyuncu 1 dakikalığına bloklanır.
    }
    return 1;
}
```

## Notlar

:::tip

Joker karakterler bu fonksiyonla kullanılabilir, örneğin '6.9 ._._' IP'sinin engellenmesi, ilk iki sekizlinin sırasıyla 6 ve 9 olduğu tüm IP'leri engeller. Yıldız işareti yerine herhangi bir sayı olabilir.

:::

## Bağlantılı Fonksiyonlar

- [UnBlockIpAddress](UnBlockIpAddress): Bloklanmış bir IP'nin bloklanmasını kaldırma.
- [OnIncomingConnection](../callbacks/OnIncomingConnection): Bu fonksiyon, bir oyuncu sunucuya bağlanmaya çalışırken çağrılır.
