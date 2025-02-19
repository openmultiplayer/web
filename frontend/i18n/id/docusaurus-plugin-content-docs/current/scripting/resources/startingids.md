---
id: startingids
title: ID Permulaan
description: Semuanya, seperti objek, pemain, atau ID kendaraan menggunakan ID. Beberapa ID dimulai dari 0, ada juga yang dimulai dari 1.
---

Semuanya, seperti objek, pemain, atau ID kendaraan menggunakan ID. Beberapa ID dimulai dari 0, ada juga yang dimulai dari 1.

| Tipe                      | ID Permulaan |
| ------------------------- | ------------ |
| Label Teks 3D             | 0            |
| Aktor                     | 0            |
| File                      | 0            |
| GangZone                  | 0            |
| Objek                     | 1            |
| Pickup                    | 0            |
| Pemain                    | 0            |
| Kelas Pemain              | 0            |
| TextDraw / PlayerTextDraw | 0            |
| Timer                     | 1            |
| Kendaraan                 | 1            |

Yang bisa Anda lihat, kendaraan dan objek dimulai dari 1, bukan 0! Sehingga ketika Anda berencana menggunakan sebuah array untuk menyimpan semua ID, Anda harus menggunakan ID dari CreateObject/CreateVehicle/... dan kurangi 1 untuk mendapatkan ID elemen dari array.
