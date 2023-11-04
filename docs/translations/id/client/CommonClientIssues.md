---
title: Masalah Umum
---

## Konten

## Klien

### Saya mendapatkan error "San Andreas cannot be found"

San Andreas Multi-player **bukan** program stand-alone! Program ini menambahkan fungsi multi-player ke San Andreas, dan maka dari itu Anda membutuhkan GTA San Andreas untuk PC - membutuhkan versi **EU/US v1.0**, versi lain, seperti v2.0 atau Steam dan Direct2Drive tidak akan bekerja [Klik di sini untuk mengunduh sebuah patch untuk downgrade GTA:SA Anda ke versi 1.0](https://gamefront.com/games/grand-theft-auto-san-andreas/file/gta-sa-downgrader-patch)

### Saya tidak bisa lihat server apapun di penjelajah SA-MP

Pertama, pastikan Anda telah mengikuti prosedur di [Panduan cepat](https://sampwiki.blast.hk/wiki/Getting_Started). Jika Anda telah mengikut instruksinya dan tidak bisa melihat server apapun, Anda harus mengijinkan akses SA-MP melalui firewall Anda. Sayangnya, dikarenakan besarnya jumlah aplikasi firewall yang tersedia, kami tidak bisa menawarkan bantuan lebih lanjut - kami sarankan untuk mengunjungi situs jaringan manufaktur atau coba melakukan pencarian di Google. Dan juga pastikan Anda telah menggunakan versi SA:MP terbaru.

### Hanya memuat Single Player, bukan memuat SA-MP

:::warning

Anda seharusnya tidak melihat opsi single player (new game, load game, dll.) - SA-MP seharusnya memuat program ini dan tidak menampilkan opsi ini. Jika Anda melihat "new game" single player termuat, bukan San Andreas Multiplayer.

:::

Single player bisa dimuat dengan 2 alasan - Anda memasang SA:MP ke folder yang salah atau Anda memiliki versi San Andreas yang salah. Jika Anda memiliki versi yang salah, ini mudah untuk diperbaiki. Klik [di sini](https://gamefront.com/games/grand-theft-auto-san-andreas/file/gta-sa-downgrader-patch) untuk mengunduh downgrade patch.

Terkadang menu single-player akan muncul, namun SA:MP akan dimuat dengan baik. Untuk memperbaiki ini, Anda cukup memilih item di menu, lalu tekan ESC hingga keluar, kemudian SA:MP akan termuat.

### Saya mendapatkan pesan "Unacceptable NickName" ketika sedang menghubungi server

Pastikan Anda tidak menggunakan karakter yang tidak diperboleh di nama Anda (hanya gunakan 0-9, a-z, \[\], (), \$, @, ., \_, dan =), dan nama Anda panjangnya tidak lebih dari 20 karakter. Ini juga bisa terjadi ketika pemain berada di server dengan nama yang sama dengan Anda (yang di mana dapat terjadi jika Anda masuk kembali ke server lebih awal setelah timeout atau crash). Dan juga server Windows menjalankan SA-MP dengan uptime lebih dari 50 hari bug ini dapat terjadi.

### Menyangkut di "Connecting to ip:port..."

Server bisa jadi sedang offline, atau Anda tidak dapat terhubung ke server, matikan firewall Anda dan periksa kembali. Jika tetap tidak bisa, Anda harus mengatur firewall Anda dengan baik - jelajahi situr jaringannya dan cari tau caranya. Hal ini dapat terjadi di versi lawas SA-MP, unduh versi terbaru dari [halaman unduh SA-MP](https://sa-mp.mp/downloads/).

### Saya memiliki GTA San Andreas yang telah dimodifikasi dan SA:MP tidak mau termuat

Jika tidak termuat, maka hapus modifikasi Anda.

### Ketika menjalankan GTA dengan SA:MP, tidak termuat dengan baik

Hapus file gta_sa.set dari folder userfiles dan pastikan Anda tidak memiliki cheat atau modifikasi.

### Game crash ketika sebuah kendaraan meledak

Jika Anda memiliki 2 monitor, maka ada 3 cara untuk menyelesaikan permasalahan ini:

1. Matikan 2dr monitor Anda ketika memainkan SA-MP. (Mungkin Anda tidak terlalu cerdas jika Anda ingin monitornya menyala.)
2. Atur kualitas Visual FX Anda ke low (ESC > Options > Display Setup > Advanced)
3. Ubah folder GTA San Andreas Anda (contoh: menjadi "GTA San Andreas2") (Cara ini selalu bekerja, bagaimanapun kadang cara ini tidak bekerja lagi, jadi Anda harus mengubahnya menjadi nama yang lain.)

### Mouse saya tidak bekerja setelah keluar dari menu pause

Jika mouse Anda tidak bisa bergerak di dalam game dan bekerja sebagian di menu pause, maka Anda seharusnya mematikan opsi multicore [sa-mp.cfg](../../../client/ClientCommands#file-sa-mpcfg "sa-mp.cfg") (atur menjadi 0). Menekan Escape secara terus-menerus hingga mouse bergerak mungkin bisa dengan cara ini, namun ini bukan solusi yang cerdik.

### File dinput8.dll menghilang

Ini kemungkinan terjadi ketika DirectX tidak terpasang dengan baik, cobalah pasang ulang kembali - jangan lupa untuk menyalakan ulang PC Anda. Jika masalah masih terjadi, buka folder C:\\Windows\\System32 dan salin file dinput.dll ke direktori utama GTA San Andreas Anda. Cara ini akan menyelesaikan masalah Anda.

### Saya tidak bisa melihat nametag pemain

Mohon lebih hati-hati karena beberapa server mungkin mematikan nametag secara keseluruhan. Selain itu, masalah ini sering terjadi di komputer dengan prosesor Intel HD integrated graphics (yang di mana tidak ditujukan untuk gaming). Sayangnya, hingga saat ini, permasalahan utamanya masih belum diketahui dan tidak ada perbaikan secara universal yang tersedia. Perbaikan jangka panjangnya adalah pasang kartu grafis dedikasi di komputer Anda, jika hal ini memungkinkan dan bujet Anda menginjinkannya.
