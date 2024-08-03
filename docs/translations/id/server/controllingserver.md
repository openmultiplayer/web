---
id: controllingaserver
title: "Mengendalikan Server"
descripion: Perintah yang berguna untuk mengendalikan server.
---

## Mengganti gamemode

### Menjalankan sebuah gamemode kustom/ter-download

- Buka direktori server yang telah Anda pasang. (contoh: /Rockstar Games/GTA San Andreas/server)
- Ambil file .amx yang telah ter-download/ter-compile dan letakkan di folder gamemodes di mana server yang telah Anda pasang.
- Gunakan RCON untuk mengganti mode seperti yang telah dideskripsikan (2.1)
- Selain itu, Anda dapat menambah mode baru ke rotasi baru, telah dideskripsikan juga (2.3)

### Menggunakan Filterscript

Sama seperti menjalankan gamemode kustom, kecuali:

- Letakkan file .amx di folder `filterscripts`
- Tambahkan di file server.cfg: `filterscripts <scriptname>`

## Memberi kata sandi untuk server Anda

- Jika Anda ingin memberi kata sandi yang di mana hanya teman-teman Anda yang bisa bergabung, tambahkan ini di [server.cfg](server.cfg):

```
password terserah
```

- Ini akan membuat server Anda terproteksi oleh kata sandi yang telah ditetapkan dengan 'terserah' - gantilah dengan kata sandi yang Anda inginkan.
- Anda dapat mengubah kata sandi dari dalam game dengan menggunakan `/rcon password passwordbarunya`.
- Anda dapat menghapus kata sandi dengan `/rcon password 0` atau dengan menyalakan ulang server.

## Menggunakan RCON

### Masuk

Anda bisa masuk ketika di dalam game dengan mengetik `/rcon login password` atau dari luar game dengan menggunakan moe RCON di [Kendali Konsol Jarak Jauh](remoteconsole).

Kata sandinya sama dengan yang Anda tetap di file [server.cfg](server.cfg)

### Menambah Pelarangan

##### samp.ban

samp.ban adalah file yang digunakan untuk menyimpan pelarangan, termasuk informasi tentang pelarangan:

- IP
- Tanggal
- Waktu
- Nama (Nama dari orang atau alasan, lihat [BanEx](../../functions/BanEx))
- Jenis pelarangan

Untuk menambah sebuah pelarangan, tambahkan sebuah baris seperti ini:

```
ALAMAT_IP_DI_SINI [28/05/09 | 13:37:00] PEMAIN - ALASAN PELARANGAN
```

Di mana `ALAMAT_IP_DI_SINI`, adalah alamat IP yang ingin Anda larang.

##### Fungsi Ban()

Fungsi [Ban](../../functions/Ban) dapat digunakan untuk melarang pemain dari sisi skrip. Fungsi [BanEx](../../functions/BanEx) akan menambah alasan opsional seperti ini:

```
13.37.13.37 [28/05/09 | 13:37:00] Cheater - INGAME BAN
```

##### Perintah pelarangan dari RCON

Perintah `ban` RCON, dieksekusi dengan mengetik `/rcon ban` di dalam game atau mengetik "ban" di konsol, adalah digunakan untuk melarang pemain tertentu yang ada di server. Untuk melarang sebuah alamat IP, lihat bagian selanjutnya.

Dengan mengetik:

```
# Di dalam game:
/rcon ban PLAYERID

# Konsol:
ban PLAYERID
```

##### banip

Perintah `banip` RCON, dieksekusi dengan mengetik `/rcon banip` di dalam game atau mengetik "banip" di konsol, adalah digunakan untuk melarang alamat IP tertentu. Untuk melarang seorang pemain di server Anda, lihat bagian sebelumnya. Peritnah ini menerima wildcard untuk rangeban (pelarangan dengan rentang tertentu).

Dengan mengetik:

```
# Di dalam game:
/rcon banip IP

# Konsol:
banip IP
```

### Menghapus Pelarangan

Ketika seseorang telah dilarang, ada dua cara untuk menghapusnya.

- Hapus dari samp.ban
- Menggunakan perintah RCON `unbanip`

#### samp.ban

samp.ban dapat ditemukan di direktori server SA-MP Anda, terdapat baris yang berisi informasi di setiap pelarangannya:

- IP
- Date
- Time
- Nama (Nama dari orang atau alasan, lihat [BanEx](../../functions/BanEx))
- Jenis pelarangan (INGAME, IP BAN, dll.)

Examples:

```
127.8.57.32 [13/06/09 | 69:69:69] NONE - IP BAN
13.37.13.37 [28/05/09 | 13:37:00] Kyeman - INGAME BAN
```

Untuk menghapus larangannya, cukup harus baris tersebut, kemudian eksekusi perintah RCON `reloadbans` untuk membuat server membaca ulang samp.ban.

#### unbanip

Perintah RCON unbanip dapat digunakan di dalam game atau dari konsol server (kotak hitam). Untuk menghapus larangan alamat IP, cukup mengetik `/rcon unbanip ALAMAT_IP` di dalam game atau `unbanip ALAMAT_IP` di dalam konsol.

Contoh:

```
13.37.13.37 [28/05/09 | 13:37:00] Kyeman - INGAME BAN
```

```
# Di dalam game:
/rcon unbanip 13.37.13.37

# Konsol:
unbanip 13.37.13.37
```

Untuk menghapus larangannya, cukup gunakan perintah `unbanip`, kemudian eksekusi perintah RCON `reloadbans` untuk membuat server membaca ulang samp.ban.

#### reloadbans

`samp.ban` adalah sebuah file yang menyimpan informasi alamat IP yang saat ini telah dilarang dari server. File ini dibaca ketika server dinyalakan, jadi ketika Anda menghapus larangan IP atau pemain, Anda HARUS mengetika perintah RCON `reloadbans` untuk membuat server membaca ulang `samp.ban` dan memperbolehkan mereka untuk bergabung ke server.

### Perintah RCON

Ketika cmdlist untuk perintah (atau, varlist untuk variabel) yang menggunakan RCON di dalam game (`/rcon cmdlist`).

Berikut adalah fungsi yang bisa Anda bisa gunakan sebagai admin:

| Perintah                          | Deskripsi                                                                                                                                    |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `/rcon cmdlist`                   | Menampilkan sebuah daftar berisi perintah-perintah.                                                                                          |
| `/rcon varlist`                   | Menampilkan sebuah daftar berisi variabel-variabel saat ini.                                                                                 |
| `/rcon exit`                      | Menutup server.                                                                                                                              |
| `/rcon echo [text]`               | Memunculkan `[text]` di konsol server (BUKAN di dalam game konsol pemain).                                                                   |
| `/rcon hostname [name]`           | Mengganti teks hostname (_contoh: /rcon hostname my server_).                                                                                |
| `/rcon gamemodetext [name]`       | Mengganti teks gamemode (_contoh: /rcon gamemodetext my gamemode_).                                                                          |
| `/rcon mapname [name]`            | Mengganti teks nama peta (_contoh: /rcon mapname San Andreas_).                                                                              |
| `/rcon exec [filename]`           | Mengeksekusi file yang mengandung server.cfg (_contoh: /rcon exec blah.cfg_).                                                                |
| `/rcon kick [ID]`                 | Menendang pemain berdasarkan ID pemain (_contoh: /rcon kick 2_).                                                                             |
| `/rcon ban [ID]`                  | Melarang pemain berdasarkan ID pemain (_contoh: /rcon ban 2_).                                                                               |
| `/rcon changemode [mode]`         | Perintah ini akan mengganti gamemode saat ini ke gamemode yang diinginkan (_contoh: jika Anda ingin bermain sftdm: /rcon changemode sftdm_). |
| `/rcon gmx`                       | Memuat gamemode selanjutnya di [server.cfg](server.cfg).                                                                                     |
| `/rcon reloadbans`                | Memuat ulang samp.ban yang di mana alamat IP yang telah dilarang disimpan. Seharusnya digunakan setelah menghapus pelarangannya.             |
| `/rcon reloadlog`                 | Memuat ulang server_log.txt. Tidak menampak efek apapun.                                                                                     |
| `/rcon say`                       | Memunculkan sebuah pesan ke pemain di konsol klien. (contoh: `/rcon say hello` akan muncul `Admin: hello`).                                  |
| `/rcon players`                   | Memunculkan pemain yang ada di server (nama, alamat IP, dan ping).                                                                           |
| `/rcon banip [IP]`                | Melarang berdasarkan alamat IP (_contoh: /rcon banip 127.0.0.1_).                                                                            |
| `/rcon unbanip [IP]`              | Menghapus larangan berdasarkan alamat IP (_contoh: /rcon unbanip 127.0.0.1_).                                                                |
| `/rcon gravity`                   | Mengganti gravitasi (_contoh: /rcon gravity 0.008_).                                                                                         |
| `/rcon weather [ID]`              | Mengganti cuaca (_contoh: /rcon weather 1_).                                                                                                 |
| `/rcon loadfs`                    | Memuat filterscript (_contoh: /rcon loadfs adminfs_).                                                                                        |
| `/rcon weburl [server url]`       | Mengganti URL server di masterlists/klien SA-MP.                                                                                             |
| `/rcon unloadfs`                  | Menghentikan filterscript (_contoh: /rcon unloadfs adminfs_).                                                                                |
| `/rcon reloadfs`                  | Memuat ulang filterscript (_contoh: /rcon reloadfs adminfs_).                                                                                |
| `/rcon rcon\_password [PASSWORD]` | Mengganti password RCON                                                                                                                      |
| `/rcon password [password]`       | Mengatur/menghapus kata sandi server                                                                                                         |
| `/rcon messageslimit [count]`     | Mengubah jumlah pesan yang dikirim klien ke server per detik. (nilai awal 500)                                      |
| `/rcon ackslimit [count]`         | Mengubah batasan acks (nilai awal 3000)                  |
| `/rcon messageholelimit [count]`  | Mengubah batasan lubang pesan (nilai awal 3000)                                    |
| `/rcon playertimeout [limit m/s]` | Mengubah waktu dalam milisekon hingga pemain dianggap timeout ketika tidak mengirim paket apapun. (nilai awal 1000) |
| `/rcon language [language]`       | Mengubah bahasa server (_contoh: /rcon language English_). Muncul di penjelajah server.                             |

Jumlah/pembatasan di atas dibuat untuk menghindari beberapa alat yang bisa menyerang server SA-MP dengan membuatnya freeze atau crash. Jadi, cukup atur sesuai dengan server Anda. Nilai awal hanyalah nilai awal, jika Anda mengalami sesuatu yang tidak beres, cukup tambahkan nilainya secepat mungkin, jadi pemain yang tidak bersalah tidak akan ditendang. [Baca lebih lanjut](http://web-old.archive.org/web/20190426141744/https://forum.sa-mp.com/showpost.php?p=2990193&postcount=47)

### Callback dan Fungsi Terkait

Berikut adalah callback dan fungsi yang mungkin berguna, karena mereka terkait dengan artikel ini atau sebaliknya.

#### Callback

- [OnRconLoginAttempt](../../callbacks/OnRconLoginAttempt): Terpanggil ketika ada yang berusaha untuk masuk ke RCON.

#### Fungsi

- [IsPlayerAdmin](../../functions/IsPlayerAdmin): Memeriksa apakah pemain sudah masuk ke RCON.

- [SendRconCommand](../../functions/SendRconCommand): Mengirim perintah RCON melalui skrip.
