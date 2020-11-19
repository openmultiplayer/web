---
id: panelstates
title: Keadaan Panel
description: Information tentang ukuran byte dan bit status panel yang sesuai.
---

:::note

Keadaan ini untuk digunakan dengan [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) dan [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

## Digit ke-sekian menyimpan apa?

- The **digit pertama** menyimpan keadaan panel **kiri-depan** untuk mobil atau **mesin(-kiri)** untuk pesawat.
- The **digit ke-dua** menyimpan keadaan panel **kanan-depan** untuk mobil atau **mesin(-kanan)** untuk pesawat.
- The **digit ke-tiga** menyimpan keadaan panel **kiri-belakang** untuk mobil atau **kemudi (di penyeimbang vertikal)** untuk pesawat.
- The **digit ke-empat** menyimpan keadaan panel **kanan-belakang** untuk mobil atau **elevator (di ekor)** untuk pesawat.
- The **digit ke-lima** menyimpan keadaan panel **kaca depan** untuk mobil atau **kemudi guling (di sayap)** untuk pesawat.
- The **digit ke-enam** menyimpan keadaan panel **bemper depan** untuk mobil.
- The **digit ke-tujuh** menyimpan keadaan panel **bemper belakang** untuk mobil.

Tidak semua kendaraan mendukung panel yang telah disebutkan. Tingkat kerusakan memengaruhi penanganan pesawat cukup banyak dan pesawat akan mengeluarkan asap hitam dari bagian apapun yang telah rusak.

Untuk kebanyakan panel, terdapat 4 keadaan: **tidak rusak (nilai 0)**, **rusak (nilai 1)**, **longgar menggantung (nilai 2)**, dan **terlepas (nilai 3)**. Keadaan usak dan longgar menggantung ini cukup rusak (ketika mengubah dari longgar menggantung ke keadaan rusak, panel akan longgar menggantung dan rusak, bukan hanya rusak, tapi hanya rusak kembali jika kendaraan mengalami _re-stream_, ...). Untuk memperbaiki perilaku aneh ini, atur ulang kerusakan untuk panel tersebut dahulu, kemudian terapkan keadaan yang dibutuhkan. Dengan cara ini, dapat memungkinkan untuk membuat sebuah panel longgar menggantung ketika mengendarai, tapi secara fisik tidak rusak (untuk lebih jelas maksud dari ini, ubahlah dari 0 ke 2, daripada dari 0 ke 1 ke 2).

Kelihatannya Anda hanya bisa membaca nilai dari keadaan kaca depan. Pengaturan ini mengubah nilai di server, tapi tidak mengubah perubahan secara fisik pada kendaraan.

Perhatikan bahwa digit-digit ini dihitung dari belakang, sehingga digit pertama ini digit paling kanan.

## Contoh

Kode berikut menjelaskan bahwa bemper mobil bagian depan dan belakang telah dihilangkan:

`00000011 00110000 00000000 00000000`

Bagaimanapun, SA-MP mengembalikan nilai desimal, sehingga Anda harus mengubahnya dalam bentuk bilangan biner terlebih dahulu untuk mendapatkan hasil seperti di atas. Seperti contoh di atas, SA-MP akan mengembalikan nilai seperti ini:

`53477376`

## Contoh penggunaan

Untuk menghapus bemper mobil bagian depan dan tidak mengubah panel lainnya:

```c
new panels, doors, lights, tires;
GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
UpdateVehicleDamageStatus(vehicleid, (panels | 0b00000000001100000000000000000000), doors, lights, tires); // Bagian '0b' artinya adalah nilai panels dibaca dalam bentuk biner. Sama seperti '0x' menandakan bilangan heksadesimal.
```
