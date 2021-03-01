---
title: OnRconLoginAttempt
description: Bu fonksiyon, bir oyuncu RCON olarak oturum açmaya çalıştığında giriş denemesi başarısız olsa bile çağrılır.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Açıklama

Bu fonksiyon, bir oyuncu RCON olarak oturum açmaya çalıştığında giriş denemesi başarısız olsa bile çağrılır.

| Parametre  | Açıklama                                                  |
| ---------- | --------------------------------------------------------  |
| ip[]       | RCON oturumu açmaya çalışan IP adresi.                    |
| password[] | Oturum açmaya çalışırken girilen parola.                  |
| success    | Giriş sonucu. Parola yanlışsa 0, doğruysa 1 olarak döner. |

## Çalışınca Vereceği Sonuçlar

Filterscript komutlarında her zaman ilk olarak çağrılır.

## Örnekler

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) //Eğer parola yanlışsa.
    {
        printf("%s IP ADRESİNE SAHİP OYUNCU RCON OTURUMU AÇMAYI DENEDİ FAKAT BAŞARISIZ OLDU, GİRMEYE ÇALIŞTIĞI PAROLA: %s",ip, password);
        new pip[16];
        for(new i = GetPlayerPoolSize(); i != -1; --i) //Tüm oyuncular arasında döngü oluşturun.
        {
            GetPlayerIp(i, pip, sizeof(pip));
            if (!strcmp(ip, pip, true)) //Bir oyuncunun IP'si, oturum açma sırasında başarısız olan IP ise...
            {
                SendClientMessage(i, 0xFFFFFFFF, "Wrong Password. Bye!"); //Mesaj gönder.
                Kick(i); //Oyuncu kicklendi.
            }
        }
    }
    return 1;
}
```

## Notlar

:::tip

Bu fonksiyon yalnızca /rcon login komutu oyun içinde kullanıldığında çağrılır. Fonksiyon, yalnızca oyuncu henüz oturum açmamışsa çağrılır. Oyuncu oturum açtığında, bunun yerine OnRconCommand çağrılır.

:::

## Bağlantılı Fonksiyonlar

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Oyuncunun RCON oturumu açıp açmadığını kontrol etme.
- [SendRconCommand](../functions/SendRconCommand): Komut dosyası aracılığıyla bir RCON komutu gönderme.
