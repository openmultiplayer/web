---
title: CreatePickup
description: Fungsi ini melakukan hal yang sama persis seperti AddStaticPickup, kecuali ia mengembalikan ID pengambilan yang dapat digunakan untuk menghancurkannya setelah itu dan dilacak menggunakan OnPlayerPickUpPickup.
tags: []
---

## Deskripsi

Fungsi ini melakukan sama persis dengan AddStaticPickup, kecuali ia mengembalikan ID pengembalian yang dapat digunakan untuk menghancurkannya setelah itu dilacak menggunakan OnPlayerPickUpPickup.

| Nama         | Deskripsi                                                                       |
| ------------ | --------------------------------------------------------------------------------- |
| model        | [Model](../resources/pickupids) dari pickup                                         |
| type         | [Tipe](../resources/pickuptypes) pickup. Menentukan bagaimana pickup merespon saat diambil. |
| Float:X      | Membuat pickup di kordinat X.                                         |
| Float:Y      | Membuat pickup di kordinat Y.                                         |
| Float:Z      | Membuat pickup di kordinat Y                                         |
| virtualworld | Virtual World dari pickup. Gunakan -1 untuk membuat pickup di seluruh Virtual World |

## Returns

ID pickup yang dibuat, -1 saat gagal (batas maksimum pengambilan).

## Contoh

```c
new pickup; // Membuat variable untuk menyimpan pickup ID

public OnGameModeInit()
{
    pickup = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);
    // Membuat pickup armor dan menyimpan di ID 'pickup'
    return 1;
}

// Later..
DestroyPickup(pickup); // Contoh penggunaan dari pickup ID.
pickup = 0; // Variable pickup perlu diatur ulang untuk menghindari konflik kedepannya.
```

## Catatan

:::tip

Satu-satunya pickup yang dapat diambil dari dalam kendaraan adalah 14 (kecuali pickup khusus seperti suap). Pickups ditunjukan, dan dapat diambil oleh semua pemain. Ada kemungkinan jika DestroyPickup() digunakan saat pickup diambil, lebih dari satu pemain dapat mengambil pickup, karena lag. Ini dapat dielakan melalui penggunaan variabel. Jenis pickup tertentu datang dengan 'respons otomatis', misalnya menggunakan model M4 di pickup akan secara otomatis memberikan pemain senjata dan beberapa amunisi. Untuk pickup yang sepenuhnya scripted, tipe 1 harus digunakan.

:::

:::peringatan

Bug yang diketahui: Pickups yang mempunyai X atau Y kurang dari -4096.0 atau lebih besar dari  4096.0 tidak akan muncul dan tidak akan memicu OnPlayerPickUpPickup salah satu.

:::

## Fungsi Terkait

- [AddStaticPickup](AddStaticPickup): Menambahkan Static Pickup.
- [DestroyPickup](DestroyPickup): Menghancurkan Pickup.
- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): Memanggil ketika pemain mengambil pickup.