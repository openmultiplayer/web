---
title: "Sunucuyu Kontrol Etme"
sidebar_label: "Sunucuyu Kontrol Etme"
description: Sunucuyu kontrol etmek için kullanışlı komutlar.
---

## Oyun Modu Değiştirme

### Özel/İndirilmiş Oyun Modu Çalıştırma

- Sunucu kurduğunuz dizini açın (örneğin: /Rockstar Games/GTA San Andreas/server).
- İndirilen/derlenmiş .amx dosyasını alın ve sunucuyu kurduğunuz dizindeki gamemodes klasörünün içine atın.
- RCON'u kullanarak açıklandığı gibi moda geçiş yapın (2.1).
- Alternatif olarak, yeni modu yukarıda açıklandığı gibi bir yapılandırmaya ekleyebilirsiniz (2.3).

### Filterscripts Kullanma

Özel bir oyun modu çalıştırmakla aynıdır, fakat farklı olarak:

- .amx uzantılı Filterscriptler, sunucu ana dizininde bulunan `filterscripts` adlı klasörde barındırılır.
- server.cfg yapılandırma dosyasına şöyle eklenir: `filterscripts <scriptadı>`

## Sunucunuza Şifre Koyma

- Sadece arkadaşlarınızın katılmasını istiyorsanız, [server.cfg](server.cfg) - sunucu yapılandırma dosyasına şunu ekleyin:

```
password herneyse
```

- Bu, sunucunuzu 'herneyse' olarak ayarlanmış bir şifre ile korumalı hale getirecektir - istediğiniz şeyi yazarak değiştirebilirsiniz.
- Şifreyi oyun içinden `/rcon password halilcanoz` komutunu kullanarak değiştirebilirsiniz.
- Şifreyi kaldırmak için `/rcon password 0` komutunu kullanmayı veya sunucuyu yeniden başlatmayı tercih edebilirsiniz.

## RCON Kullanma

### Giriş Yapma

Girişi oyun içi `/rcon login sifre` yazarak veya [server.cfg](server.cfg) dosyasında ayarladığınız şifreyi kullanarak oyun dışından RCON modunu kullanarak yapabilirsiniz.

### Oyuncu Yasaklama

##### bans.json

bans.json, yasaklamalar hakkında bilgileri içeren bir dosyadır, yasaklamalar hakkında aşağıdaki bilgileri içerir:

- IP
- Tarih
- Saat
- Ad (Kişinin adı)
- Neden ([BanEx](../scripting/functions/BanEx) sayfasına bakın)

Oyuncu yasaklamak için, basitçe JSON dizisine şu şekilde bir nesne ekleyin:

```json
[
    {"address": "IP_BURAYA", "player": "OYUNCU", "reason": "YASAKLAMA NEDENİ", "time": "2009-05-28T13:37:00+0000"}
]
```

`IP_BURAYA` kısmına, yasaklamak istediğiniz IP'yi ekleyin.

##### Ban() Fonksiyonu

[Ban](../scripting/functions/Ban) fonksiyonu bir oyuncuyu script üzerinden yasaklamak için kullanılabilir. [BanEx](../scripting/functions/BanEx) fonksiyonu, aşağıdaki gibi isteğe bağlı bir neden ekler:

```json
[
    {"address": "13.37.13.37", "player": "Sack", "reason": "OYUNICI YASAKLAMA", "time": "2009-05-28T13:37:00+0000"}
]
```

##### RCON Yasaklama Komutu

RCON yasaklama komutu, oyun içi `/rcon ban OYUNCUID` yazarak veya konsol'a "ban" yazarak kullanılır ve sunucuda belirli bir oyuncuyu yasaklamak için kullanılır.

Basitçe şu şekilde kullanabilirsiniz:

```
# Oyun içi:
/rcon ban OYUNCUID

# Konsol:
ban OYUNCUID
```

##### banip

RCON banip komutu, oyun içi `/rcon banip IP` yazarak veya konsola "banip IP" yazarak kullanılır ve belirli bir IP'yi yasaklamak için kullanılır. Aralıklı yasaklamalar için joker karakterlerini kabul eder.

Basitçe şunu yazın:

```
# Oyun içi:
/rcon banip IP

# Konsol:
banip IP
```

### Yasaklamaları Kaldırma

Birisi oyuncunun yasağını kaldırmanın iki yolu vardır.

- bans.json dosyasından kaldırmak
- Konsoldan veya oyun içinden RCON `unbanip` komutunu kullanmak

#### bans.json

bans.json, open.mp sunucu dizininde bulunabilir ve içinde şu bilgileri içeren IP'ler hakkında bilgi içerir:

- IP
- Tarih
- Saat
- Ad (Kişinin adı)
- Neden (bkz: [BanEx](../scripting/functions/BanEx))

Örnekler:

```json
[
    {"address": "127.8.57.32", "player": "YOK", "reason": "IP BAN", "time": "2009-06-13T13:37:00+0000"},
    {"address": "13.37.13.37", "player": "Martin", "reason": "OYUN İÇİ YASAK", "time": "2009-05-28T13:37:00+0000"}
]
```

Yasaklanan oyunucunun yasağını kaldırmak için, sadece nesneyi kaldırın ve ardından sunucunun bans.json'ı tekrar okumasını sağlamak için RCON `reloadbans` komutunu kullanın.

#### unbanip

RCON unbanip komutu oyun içi `/rcon unbanip IP_BURAYA` yazarak veya konsol'a "unbanip IP_BURAYA" yazarak kullanılabilir. Bir IP'nin yasağını kaldırmak için, sadece `/rcon unbanip IP_BURAYA` komutunu oyun içinden veya konsoldan `unbanip IP_BURAYA` şeklinde yazın.

Örnek:

```json
[
    {"address": "13.37.13.37", "player": "Martin", "reason": "OYUN İÇİ BAN", "time": "2009-05-28T13:37:00+0000"}
]
```

```
# Oyun içi:
/rcon unbanip 13.37.13.37

# Konsol:
unbanip 13.37.13.37
```

Yasağı kaldırmak için, sadece `unbanip` komutunu kullanın.

#### reloadbans

`bans.json`, sunucudan yasaklanan IP adresleri hakkındaki bilgileri içeren bir dosyadır. Bu dosya, sunucu çalıştırıldığında okunur, bu nedenle dosyayı düzenleyerek bir IP'yi veya oyuncuyu yasaklarsanız, sunucunun `bans.json`'ı tekrar okumasını sağlamak için RCON `reloadbans` komutunu yazmalısınız, böylece tekrar sunucuya giremezler.

### RCON Komutları

Oyun içinde (`/rcon cmdlist` yazarak) RCON kullanarak kullanabileceğiniz komutlardır.

Aşağıdaki komutları sadece RCON girişi yapmış yöneticiler kullanabilir:

| Komut                            | Açıklama                                                                                                                                                 |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/rcon cmdlist`                  | Komutları gösterir.                                                                                                                                      |
| `/rcon varlist`                  | Mevcut değişkenleri gösterir.                                                                                                                            |
| `/rcon exit`                     | Sunucuyu kapatır.                                                                                                                                        |
| `/rcon echo [metin]`             | Metni sunucu konsolunda gösterir (Oyun içi oyuncu konsolu değil).                                                                                        |
| `/rcon hostname [isim]`          | hostname metnini değiştirir (_örnek: /rcon hostname benim sunucum_).                                                                                     |
| `/rcon gamemodetext [isim]`      | oyun modu metnini değiştirir (_örnek: /rcon gamemodetext benim oyun modum_).                                                                             |
| `/rcon mapname [isim]`           | harita metnini değiştirir (_örnek: /rcon mapname San Andreas_).                                                                                          |
| `/rcon exec [dosyaadı]`          | Sunucu yapılandırmalarını içeren dosyayı yürütür (_örnek: /rcon exec blah.cfg_).                                                                         |
| `/rcon kick [ID]`                | Belirtilen ID'ye sahip oyuncuyu sunucudan atar (_örnek: /rcon kick 2_).                                                                                  |
| `/rcon ban [ID]`                 | Belirtilen ID'ye sahip oyuncuyu yasaklar (_örnek: /rcon ban 2_).                                                                                         |
| `/rcon changemode [mod]`         | Bu komut, mevcut oyun modunu belirtilen oyun modu ile değiştirecek (_örnek: sftdm oynamak istiyorsanız: /rcon changemode sftdm_).                        |
| `/rcon gmx`                      | [server.cfg](server.cfg) dosyasındaki bir sonraki oyun modunu yükler.                                                                                    |
| `/rcon reloadbans`               | Yasaklı IP adreslerini içeren `bans.json` dosyasını tekrar yükler. Bu, dosyayı düzenleyerek bir IP'yi yasakladıktan sonra kullanılmalıdır.                                     |
| `/rcon reloadlog`                | `server_log.txt` dosyasını tekrar yükler. Otomatik log döndürme için kullanışlıdır. Sadece Linux sunucuda `SIGUSR1` sinyali gönderilerek tetiklenebilir. |
| `/rcon say`                      | Oyuncu konsoluna mesaj gösterir (örnek: `/rcon say merhaba` "Admin: merhaba" olarak görüntülenir).                                                       |
| `/rcon players`                  | Sunucuda bulunan oyuncuları (adları, IP'leri ve ping'leri ile birlikte) gösterir.                                                                        |
| `/rcon banip [IP]`               | Belirtilen IP'yi yasaklar (_örnek: /rcon banip 127.0.0.1_).                                                                                              |
| `/rcon unbanip [IP]`             | Belirtilen IP'nin yasaklamasını kaldırır (_örnek: /rcon unbanip 127.0.0.1_).                                                                             |
| `/rcon gravity`                  | Yer çekimini değiştirir (_örnek: /rcon gravity 0.008_).                                                                                                  |
| `/rcon weather [ID]`             | Hava durumunu değiştirir (_örnek: /rcon weather 1_).                                                                                                     |
| `/rcon loadfs`                   | Belirtilem filterscript'i yükler (_örnek: /rcon loadfs adminfs_).                                                                                        |
| `/rcon weburl [sunucu url]`      | Masterlist/SA-MP istemcisinde görünen sunucu URL'sini değiştirir.                                                                                        |
| `/rcon unloadfs`                 | Belirtilen filterscript'i devre dışı bırakır (_örnek: /rcon unloadfs adminfs_).                                                                          |
| `/rcon reloadfs`                 | Belirtilem filterscript'i tekrar yükler (_örnek: /rcon reloadfs adminfs_).                                                                               |
| `/rcon rcon_password [ŞİFRE]`    | Rcon'un şifresini değiştirir.                                                                                                                            |
| `/rcon password [şifre]`         | Sunucu şifresini ayarlar/sıfırlar.                                                                                                                       |
| `/rcon messageslimit [sayı]`     | İstemcinin sunucuya saniyede gönderdiği mesaj sayısını değiştirir. (varsayılan 500)                                                                      |
| `/rcon ackslimit [sayı]`         | Ack'ların sınırını değiştirir (varsayılan 3000)                                                                                                          |
| `/rcon messageholelimit [sayı]`  | Mesaj deliklerinin sınırını değiştirir (varsayılan 3000).                                                                                                |
| `/rcon playertimeout [limit ms]` | Bir oyuncunun hiç paket göndermediği süreyi milisaniye cinsinden değiştirir (varsayılan 1000).                                                           |
| `/rcon language [dil]`           | Sunucu dilini değiştirir (_örnek: /rcon language Turkish_). Sunucu tarayıcısında gösterilir.                                                             |

Yukarıdaki dört sınırlama/sayı, herhangi bir SA-MP sunucusuna saldıran birkaç çakkalı önlemek için yapılmıştır, bu nedenle sadece sunucunuza göre bunları ayarlayın. Varsayılan değerler, eğer yanlış bir şeyler görürseniz, masum oyuncuların bunun nedeniyle atılmaması için değerleri mümkün olan en kısa sürede arttırın. [Daha fazla bilgi için buraya bakın](https://sampforum.blast.hk/showthread.php?tid=506214&pid=2990193#pid2990193).

### İlgili Callbackler ve Fonksiyonlar

Aşağıdaki callbackler ve fonksiyonlar, bu makaleyle bir şekilde ilişkili olabilir ve bu nedenle ilginizi çekebilir.

#### Callbackler

- [OnRconLoginAttempt](../scripting/callbacks/OnRconLoginAttempt): RCON'a giriş denemesi yapıldığında çağrılır.

#### Fonksiyonlar

- [IsPlayerAdmin](../scripting/functions/IsPlayerAdmin): Bir oyuncunun RCON'a giriş yapılıp yapılmadığını kontrol eder.

- [SendRconCommand](../scripting/functions/SendRconCommand): Bir komutu script üzerinden RCON aracılığıyla gönderir.
