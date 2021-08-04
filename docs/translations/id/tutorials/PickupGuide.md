---
title: Pickup Guide
---

Tutorial singkat yang menjelaskan cara menggunakan pickups.

## Pengdeklarasian pickupid

Hal pertama kali yang harus dikerjakan saat membuat pickups adalah membuat sebuah tempat untuk menyimpan ID nya. Hal ini dapat dibuat didalam sebuah variabel global supaya nilainya dapat di tetapkan pada saat anda membuat pickup dan membaca nilai pickup, memanggil callback dengan nilai ID pickup tersebut. Untuk contohnya kita akan menggunakan contoh dengan nama "gMyPickup".

```c
new gMyPickup;
```

## Membuat pickup

Ada dua cara untuk membuat pickup. [CreatePickup](../scripting/functions/CreatePickup) dan [AddStaticPickup](../scripting/functions/AddStaticPickup). AddStaticPickup tidak me-return nilai ID nya saat nilainya dibuat, tidak dapat dihancurkan dan dapat digunakan dibawah OnGameModeInit, jadi untuk contoh kali ini kita akan menggunakan [CreatePickup](../scripting/functions/CreatePickup).

**Syntax untuk [CreatePickup](../scripting/functions/CreatePickup) adalah:**

**Parameters:**

| model        | Model yang anda suka gunakan untuk pickup.                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------ |
| type         | Tipe pickup spawn, lihat lebih lanjut dibawah halaman ini.                                             |
| Float:X      | Koordinat titik X munculnya pickup.                                                                    |
| Float:Y      | Koordinat titik Y munculnya pickup.                                                                    |
| Float:Z      | Koordinat titik Z munculnya pickup.                                                                    |
| Virtualworld | Virtual world ID pickupnya. Jika nilainya -1 maka akan menampilkan pickupnya di seluruh virtual world. |

Untuk contohnya kita akan membuat cash pickup di Grove Street.

Sekarang kita perlu untuk memilih model apa yang akan muncul di world, ada banyak model yang bisa dipilih, beberapa dilist di dalam external website [ini](https://dev.prineside.com/en/gtasa_samp_model_id), disini kita memilih model number 1274 dimana model tersebut adalah tanda dollar.

Pada akhirnya kita perlu sebuah [Type](../scripting/resources/pickuptypes) untuk pickupnya, pada halaman yang sama dengan pickup models ada list pickup types yang menggambarkan apa yang dilakukan oleh berbagai model. Kita mau supaya pickup ini menghilang saat di ambil pickupnya, jadi anda tidak bisa mengambilnya berkali-kali, tapi untuk memunculkannya setelah beberapa menit supaya bisa anda ambil kembali, type 2 bisa melakukan ini.

Pickups pada umumnya dibuat saat skrip berjalan, di [OnGameModeInit](../scripting/callbacks/OnGameModeInit) atau [OnFilterScriptInit](../scripting/callbacks/OnFilterScriptInit) tergantung pada tipe skripnya, namun semuanya dapat berjalan di function apa saja (untuk contohnya anda bisa membuat skrip weapon drop pada saat OnPlayerDeath untuk membuat weapon pickups).

jadi ini adalah code untuk membuat pickup kita, dan menyimpan ID nya di 'gMyPickup':

```c
gMyPickup = CreatePickup(1274, 2, 2491.7900, -1668.1653, 13.3438, -1);
```

### Memilih apa yang dilakukannya

Saat anda mengambil pickup, [OnPlayerPickUpPickup](../scripting/callbacks/OnPlayerPickUpPickup) dipanggil, memberikan playerid (player yang mengambil pickup) dan pickupid (ID pickup yang diambil).

Beberapa tipe pickup bekerja secara otomatis, jadi tidak perlu untuk melakukan apa apa didalam OnPlayerPickUpPickup. Cek laman [Pickup Types](../scripting/resources/pickuptypes) untuk info lebih lanjut.

Saat player mengambil pickup yang baru, kita mau memberi mereka $100, hal pertama untuk melakukannya adalah kita harus cek apakah dia pernah mengambil pickup dollar kita dan bukan pickup yang lain. Setelah kita selesai dengan hal tersebut, kita bisa berikan mereka $100:

```c
public OnPlayerPickUpPickup(playerid, pickupid)
{
    // Cek apakah pickup ID yang di diambil adalah gMyPickup
    if(pickupid == gMyPickup)
    {
        // Kirim Pesan kepada player
        SendClientMessage(playerid, 0xFFFFFFFF, "You received $100!");
        // Berikan player uangnya
        GivePlayerMoney(playerid, 100);
    }
    // jika anda ingin menambah pickup lainnya, lakukan saja ini:
    else if (pickupid == (some other pickup))
    {
        // Pickup lainnya, lakukan hal lainnya
    }
    return 1;
}
```

Selamat, anda sekarang sudah mengerti cara membuat dan menghandle pickups!

## Baca lebih lanjut

Anda dapat menggunakan plugin [Streamer](https://github.com/samp-incognito/samp-streamer-plugin) untuk membuat unlimited pickups dengan [CreateDynamicPickup](<https://github.com/samp-incognito/samp-streamer-plugin/wiki/Natives-(Pickups)>)
