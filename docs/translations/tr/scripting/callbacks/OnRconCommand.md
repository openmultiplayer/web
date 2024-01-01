---
title: OnRconCommand
description: Bu fonksiyon, RCON oturumu açmış oyuncu RCON komutu kullandığında çağrılır. (/rcon -komut-)
tags: []
---

## Açıklama

Bu fonksiyon, RCON oturumu açmış oyuncu RCON komutu kullandığında çağrılır. (/rcon -komut-)

| Parametre | Açıklama                                                                          |
| --------- | --------------------------------------------------------------------------------- |
| cmd[]     | Yazılan komutu ve aktarılan parametreleri içeren bir dize.|

## Çalışınca Verilen Sonuçlar

Filterscript komut dosyalarında her zaman ilk olarak çağrılır, bu nedenle 1 döndürmek oyun modunun görmesini engeller.

## Örnekler

```c
public OnRconCommand(cmd[])
{
    printf("[RCON]: '/rcon %s' komutu girildi!", cmd);
    return 0;
}

public OnRconCommand(cmd[])
{
    if (!strcmp(cmd, "merhaba", true))
    {
        SendClientMessageToAll(0xFFFFFFAA, "Merhaba Dünya!");
        print("Dünyaya merhaba dedin."); // Bu, sohbette rcon komutunu yazan oyuncuya beyaz olarak görünecektir.
        return 1;
    }
    return 0;
}
```

## Notlar

:::tip


Bir oyuncu bir komut yazdığında "/rcon" "cmd" ye dahil edilmez. Burada "print" işlevini kullanırsanız, hem oyun içinde komutu yazan oyuncuya hem de günlüğe bir mesaj gönderir. Bu fonksiyon, oyuncu RCON yöneticisi olarak oturum açmadığında çağrılmaz.Oyuncu RCON yöneticisi olarak oturum açmadığında ve /rcon login kullandığında, bu fonksiyon çağrılmaz ve onun yerine OnRconLoginAttempt çağrılır. Ancak, oyuncu RCON yöneticisi olarak oturum açtığında, bu komutun kullanılması bu fonksiyonu çağıracaktır.

:::

:::warning

Oyun modunda çalışması için bu fonksiyonu çalışan bir oyun modunun komut dosyasına eklemeniz gerekir!

:::

## Bağlantılı Fonksiyonlar

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Oyuncunun RCON oturumu açıp açmadığını kontrol etme.
- [OnRconLoginAttempt](OnRconLoginAttempt): Bu fonksiyon, oyuncu RCON oturumu açmayı denediğinde çağrılır.
