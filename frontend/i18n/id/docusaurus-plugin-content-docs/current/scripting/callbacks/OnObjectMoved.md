---
title: OnObjectMoved
sidebar_label: OnObjectMoved
description: Callback ini akan terpanggil ketika sebuah object berpindah setelah MoveObject (ketika selesai bergerak).
tags: []
---

## Deskripsi

Callback ini akan terpanggil ketika sebuah object berpindah setelah MoveObject (ketika selesai bergerak).

| Nama     | Deskripsi                              |
| -------- | -------------------------------------- |
| objectid | ID dari sebuah object yang dipindahkan |

## Returns

Ini akan selalu terpanggil pertama di filterscripts.

## Contoh

```c
public OnObjectMoved(objectid)
{
    printf("Object %d telah selesai bergerak", objectid);
    return 1;
}
```

## Catatan

:::tip

SetObjectPos tidak akan bekerja ketika menggunakan callback ini. Untuk memperbaiki, buatlah ulang objectnya.

:::

## Fungsi Terkait

- [MoveObject](../functions/MoveObject): Memindahkan Object.
- [MovePlayerObject](../functions/MovePlayerObject): Memindahkan player object.
- [IsObjectMoving](../functions/IsObjectMoving): Mengecek apakah object sedang bergerak.
- [StopObject](../functions/StopObject): Menghentikan object yang bergerak.
- [OnPlayerObjectMoved](OnPlayerObjectMoved): Terpanggil ketika player object berhenti bergerak.
