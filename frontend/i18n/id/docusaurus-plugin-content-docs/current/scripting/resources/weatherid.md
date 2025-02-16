---
title: ID Cuaca
sidebar_label: ID Cuaca
description: Informasi tentang ID cuaca
---

Informasi ini untuk digunakan dengan [SetWeather](../functions/SetWeather) dan [SetPlayerWeather](../functions/SetPlayerWeather).

```c
0 = EXTRASUNNY_LA
1 = SUNNY_LA
2 = EXTRASUNNY_SMOG_LA
3 = SUNNY_SMOG_LA
4 = CLOUDY_LA
5 = SUNNY_SF
6 = EXTRASUNNY_SF
7 = CLOUDY_SF
8 = RAINY_SF
9 = FOGGY_SF
10 = SUNNY_VEGAS
11 = EXTRASUNNY_VEGAS (gelombang panas)
12 = CLOUDY_VEGAS
13 = EXTRASUNNY_COUNTRYSIDE
14 = SUNNY_COUNTRYSIDE
15 = CLOUDY_COUNTRYSIDE
16 = RAINY_COUNTRYSIDE
17 = EXTRASUNNY_DESERT
18 = SUNNY_DESERT
19 = SANDSTORM_DESERT
20 = UNDERWATER (kehijauan, berkabut)
```

Ada 21 jenis ID cuaca (0-20), bagaimanapun _game_ tidak ada pemeriksaan rentang ID cuaca dan demikian Anda bisa menggunakan ID cuaca hingga 255. Nilai lebih tinggi dari 255 atau di bawah 0 akan berubah menjadi sisa hasil pembagian dari 256 (sebagai contoh, ID cuaca 300 sama dengan ID 44, jareba 300 % 256 = 44). ID cuaca 0-22 bekerja dengan baik, tapi ID lainnya menghasilkan efek yang aneh, seperti langit merah muda dan tekstur berkilat di waktu tertentu.

:::note

- Beberapa cuaca muncul sangat berbeda di waktu tertentu. Anda bisa melihatnya di [sini](http://hotmist.ddo.jp/id/weather.html) seperti apa perbedaan jenis cuaca di waktu yang berbeda.
- [Galeri cuaca GTA San Andreas](https://dev.prineside.com/en/gtasa_weather_id/) menjelaskan siatuasinya dengan ID cuaca lebih baik daripada apapun. Anda bisa menggunakannya jika Anda ingin melihat cuaca di waktu-waktu tertentu dan lihat juga permasalah cuaca yang menyebabkan efek aneh.

:::
