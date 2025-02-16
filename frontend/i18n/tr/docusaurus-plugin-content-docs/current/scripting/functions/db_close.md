---
title: db_close
sidebar_label: db_close
description: Closes a SQLite database connection that was opened with `db_open`.
keywords:
  - sqlite
---

<LowercaseNoteTR />

## Açıklama

Daha önceden [db_open](db_open) fonksiyonu ile açılmış olan veritabanı bağlantısını kapatır.

| İsim  | Açıklama                                                                          |
| ----- | --------------------------------------------------------------------------------- |
| DB:db | Kapatılacak veritabanı bağlantısı adı. ([db_open](db_open)'dan geri döndürülür.). |

## Çalışınca Vereceği Sonuçlar

1: Fonksiyon başarılı bir şekilde gerçekleştirildi.

0: Fonksiyon gerçekleştirilemedi. Bu, veritabanı bağlantı adı geçersiz anlamına gelebilir.

## Örnekler

```c
static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // Veritabanına bağlantı oluştur.
    gDBConnectionHandle = db_open("example.db");

    // Eğer veritabanına bağlantı başarılıysa.
    if (gDBConnectionHandle)
    {
        // Başarılı bir şekilde veritabanına bağlanıldı.
        print(" Başarılı bir şekilde \"example.db\" veritabanına bağlanıldı.");
    }
    else
    {
        // Veritabanına bağlantı başarısız oldu.
        print("\"example.db\" veritabanına bağlantı başarısız oldu.");
    }

    // ...

    return 1;
}

public OnGameModeExit()
{
    // Eğer bağlantı açıksa, veritabanına olan bağlantıyı kapat.
    if (db_close(gDBConnectionHandle))
    {
        // Ekstra temizlik.
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## Notlar

:::warning

Sıfırdan başka bir geçersiz işlem kullanmak sunucunuzu çökertir! [db_open](db_open) kullanarak geçerli bir veritabanı bağlantı işleyicisi alın.

:::

## Bağlantılı Fonksiyonlar

_Replace me_
