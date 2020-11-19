---
id: tirestates
title: Keadaan Ban
description: Information tentang ukuran byte dan bit status ban yang sesuai.
---

:::note

Keadaan ini untuk digunakan dengan [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) dan [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

:::note

Kendaraan yang memiliki ban lebih dari 4 (contoh: truk) hanya memiliki 4 keadaan ban.

:::

## Digit ke-sekian menyimpan apa?

Kerusakan semua ban akan disimpan dalam 1 digit (4 bit) untuk kendaraan roda 4 dan 2 bit huntuk kendaraan 2. Setiap bit menyimpan keadaan ban yang di mana **pecah (nilai 1)** dan **tidak pecah (nilai 0)**.

- **bit pertama** menyimpan keadaan ban **kanan-belakang** untuk kendaraan roda 4 atau ban **belakang** untuk kendaraan roda 2.
- **bit ke-dua** menyimpan keadaan ban **kanan-depan** untuk kendaraan roda 4 atau ban **depan** untuk kendaraan roda 2.
- **bit ke-tiga** menyimpan keadaan ban **kiri-belakang** untuk kendaraan roda 4.
- **bit ke-empat** menyimpan keadaan ban **kiri-depan** untuk kendaraan roda 4.

Perhatikan bahwa bit-bit ini dihitung dari belakang, sehingga bit pertama ini bit paling kanan.

## Contoh

Kode berikut menjelaskan bahwa kendaraan roda 4 untuk dua ban pecah dan lainnya tidak:

`0101`

Bagaimanapun, SA-MP mengembalikan nilai desimal, sehingga Anda harus mengubahnya dalam bentuk bilangan biner terlebih dahulu untuk mendapatkan hasil seperti di atas. Seperti contoh di atas, SA-MP akan mengembalikan nilai seperti ini:

`5`

## Info tabel

Berikut adalah representasi visual dari keadaan ban. Kendaraan dilihat dari perspektif atas-bawah, dengan nilai atas sebagai bagian depan kendaraan dan nilai bawah sebagai bagian belakang kendaraan.

**Legenda:**

```
o - inflated tire
x - popped tire
```

### Kendaraan roda 4

4 bit untuk kendaraan 4: (Kr-D)(Kr-B)(Kn-D)(Kn-B) (Kiri-Depan, Kiri-Belakang, Kanan-Depan, dan Kanan-Belakang).

0: (0000)

```c
    o-o
    | |
    o-o
```

1: (0001)

```c
    o-o
    | |
    o-x
```

2: (0010)

```c
    o-x
    | |
    o-o
```

3: (0011)

```c
    o-x
    | |
    o-x
```

4: (0100)

```c
    o-o
    | |
    x-o
```

5: (0101)

```c
    o-o
    | |
    x-x
```

6: (0110)

```c
    o-x
    | |
    x-o
```

7: (0111)

```c
    o-x
    | |
    x-x
```

8: (1000)

```c
    x-o
    | |
    o-o
```

9: (1001)

```c
    x-o
    | |
    o-x
```

10: (1010)

```c
    x-x
    | |
    o-o
```

11: (1011)

```c
    x-x
    | |
    o-x
```

12: (1100)

```c
    x-o
    | |
    x-o
```

13: (1101)

```c
    x-o
    | |
    x-x
```

14: (1110)

```c
    x-x
    | |
    x-o
```

15: (1111)

```c
    x-x
    | |
    x-x
```

Setelah nilai 15 terulang, maka 16 dianggap 0, 17 itu 1, dan seterusnya.

### Kendaraan roda 2 (sepeda, motor)

2 bit untuk kendaraan roda dua: (D)(B) (Depan dan Belakang).

0: (00)

```c
    o
    |
    o
```

1: (01)

```c
    o
    |
    x
```

2: (10)

```c
    x
    |
    o
```

3: (11)

```c
    x
    |
    x
```

Setelah nilai 3 terulang, maka 4 itu 0, 5 itu 1, dan seterusnya.

## Contoh penggunaan

Untuk memecahkan 2 ban dari kendaraan roda 4 tanpa mengubah ban depannya:

```c
new panels, doors, lights, tires;
GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, (tires | 0b0101)); // Bagian '0b' artinya adalah nilai panels dibaca dalam bentuk biner. Sama seperti '0x' menandakan bilangan heksadesimal.
```
