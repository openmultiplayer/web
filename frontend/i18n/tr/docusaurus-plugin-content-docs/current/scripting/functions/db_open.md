---
title: db_open
description: The function is used to open a connection to a SQLite database file, which is inside the `/scriptfiles` folder.
keywords:
  - sqlite
---

<LowercaseNoteTR />

## Açıklama

Bu fonksiyon, /scriptfiles klasörü içerisinde bir SQLite veritabanı açmak için kullanılır.

| İsim   | Açıklama                 |
| ------ | ------------------------ |
| name[] | Veritabanının dosya adı. |

## Çalışınca Vereceği Sonuçlar

Veritabanı dosyasının dizinini döndürür. (1'den başlar.)

## Örnekler

```c
static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // example.db isimli veritabanı dosyasına bağlantı oluşturur.
    gDBConnectionHandle = db_open("example.db");

    // Eğer bağlantı sağlanmışsa.
    if (gDBConnectionHandle)
    {
        // Veritabanı bağlantısı sağlandı bilgisi gönderir.
        print("Successfully created a connection to database \"example.db\".");
    }
    else
    {
        // Eğer bağlantı sağlama başarısız olmuşsa, bağlantı sağlanamadı bilgi
        print("Failed to open a connection to database \"example.db\".");
    }

    // ...

    return 1;
}

public OnGameModeExit()
{
    // ğer bağlantı sağlanmış durumdaysa, kapanırken bağlantıyı keser.
    if (db_close(gDBConnectionHandle))
    {
        // Ekstra temizlik
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## Notlar

:::warning

Eğer /scriptsfolder içerisinde SQLite veritabanı dosyası yoksa bunu kendisi oluşturacaktır, sunucu kapanırken veritabanı bağlantısını [db_close](db_close)! fonksiyonu ile kesin.

:::
