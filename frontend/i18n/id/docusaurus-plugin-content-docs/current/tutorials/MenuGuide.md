---
title: Menu Guide
---

Sebuah tutorial pendek yang menjelaskan bagaimana cara menggunakan sistem menu pada game. Sistem menu ini sangat berbeda dengan SA-MP dialog dan lebih mencerminkan UI tradisional dari gim aslinya.

## Menu di dalam SA-MP

Menu kelihatannya sangat rumit dan susah dibuat scriptnya untuk kebanyakan pengguna, namun sebenarnya tidak. Disini saya akan menunjukkan bagaimana cara membuat menu simpel. Dan nantinya kita akan membuat sebuah teleport menu.

## Langkah pertama menu

Pertama kita harus membuat sebuah menu. Prefix sebelumnya adalah `Menu:` ini adalah variable [tag](../scripting/language/tags) yang benar. Terdapat beberapa tipe dari beberapa penggunaan seperti `Float:` `bool:` `Text3D:` dan lain-lain. Buatlah kodenya diposisi paling atas di kode kalian:

```c
new Menu:teleportmenu;
```

Oke, kita sudah membuat variable untuk menaruh menu. Sekarang kita membuat menu dan menetapkan variable yang sudah dibuat ke menu. Ketik ini pada `OnGameModeInit`:

```c
teleportmenu = CreateMenu("Teleportmenu", 2, 200.0, 100.0, 150.0, 150.0);
```

Sedikit penjelasan tentang argumen [CreateMenu](../scripting/functions/CreateMenu).

**Parameters:**

| Parameter       | Menentukan                                                            |
| --------------- | --------------------------------------------------------------------- |
| title           | Judul menu                                                            |
| columns         | Angka yang menentukan berapa banyak kolom yang digunakan (maksimal 2) |
| Float:x         | Untuk menentukan posisi tinggi dari menu pada layar (kiri ke kanan)   |
| Float:y         | Untuk menentukan lebar dari menu pada layar (atas dan bawah)          |
| Float:col1width | Lebar dari kolom pertama                                              |
| Float:col2width | Lebar dari kolom kedua                                                |

## Menambahkan beberapa menu item

Ok, sekarang kita sudah dapat Menu nya, tapi sekarang kita butuh beberapa item, yang dimana dapat dipilih di dalam menu. Kalian dapat menambahkannya di bawah `CreateMenu` yang sebelumnya kita buat.

```c
AddMenuItem(teleportmenu, 0, "LS");
AddMenuItem(teleportmenu, 0, "LS");
AddMenuItem(teleportmenu, 0, "SF");
AddMenuItem(teleportmenu, 0, "SF");
AddMenuItem(teleportmenu, 0, "LV");
AddMenuItem(teleportmenu, 0, "LV");

AddMenuItem(teleportmenu, 1, "Grove Street");
AddMenuItem(teleportmenu, 1, "Starfish Tower");
AddMenuItem(teleportmenu, 1, "Wheel Arch Angels");
AddMenuItem(teleportmenu, 1, "Jizzys");
AddMenuItem(teleportmenu, 1, "4 Dragons");
AddMenuItem(teleportmenu, 1, "Come-a-Lot");
```

Penjelasan mengenai [AddMenuItem](../scripting/functions/AddMenuItem):

| menuid | menuid dari menu yang dimana item akan ditampilkan |
| ------ | -------------------------------------------------- |
| column | Kolom tempat item akan ditampilkan                 |
| text   | Teks dari item                                     |

## Membuat efek pada item

Oke, sekarang kita sudah membuat menu lengkap dengan terdapat item, apa yang harus terjadi jika kalian memilih item? Dalam contoh kami, kami ingin membuat teleportmenu, jadi seharusnya kita bisa teleport ke posisi yang kita pilih. Ketika player memilih sebuah item pada menu, script akan memanggil callback [OnPlayerSelectedMenuRow](../scripting/callbacks/OnPlayerSelectedMenuRow). Cara yang paling bagus untuk dilakukan adalah menggunakan switch, ini seperti beberapa statement if untuk memastikan jika sebuah variable sangat bernilai untuk value tertentu. Tapi pertama kita hanya ingin membuat efek untuk menu yang kita ingin, jadi kita harus membuat variable yang menampung menu ketika menu dilihat oleh player, ini dilakukan dengan `GetPlayerMenu`:

```c
new Menu:CurrentMenu = GetPlayerMenu(playerid);
```

Sekarang, ketika seseorang memilih sesuatu di dalam menu, menuid mereka akan disimpan pada `CurrentMenu`.

Sekarang kita harus memeriksa apakah menu yang mereka pilih adalah menu yang kita inginkan:

```c
public OnPlayerSelectedMenuRow(playerid, row)
{
    new Menu:CurrentMenu = GetPlayerMenu(playerid);
    if (CurrentMenu == teleportmenu)
    {
        //stuff
    }
    return 1;
}
```

Sekarang diantara braket ini adalah tempat `switch` berada, ini memastikan item apa yang pemain pilih atau `row` bisa digunakan dengan statement `if` untuk memeriksa apa benar itu `row`, tapi `switch` adalah cara yang jauh lebih sederhana untuk menulisnya.

```c
if(CurrentMenu == teleportmenu)
{
    switch(row)
    {
        case 0: //Grove Street
        {
            SetPlayerPos(playerid, 2493.9133, -1682.3986, 13.3382);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Selamat datang di Grove Street");
        }
        case 1: //Starfish Tower
        {
            SetPlayerPos(playerid, 1541.2833, -1362.4741, 329.6457);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Selamat datang di atas Starfish Tower");
        }
        case 2: //Wheel Arch Angels
        {
            SetPlayerPos(playerid, -2705.5503, 206.1621, 4.1797);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Selamat datang di Wheel Arch Angels tuning-shop");
        }
        case 3: //Jizzys
        {
            SetPlayerPos(playerid, -2617.5156, 1390.6353, 7.1105);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Selamat datang di Jizzy's Nightclub!");
        }
        case 4: //4Dragons
        {
            SetPlayerPos(playerid, 2028.5538, 1008.3543, 10.8203);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Selamat datang di Four Dragons Casino");
        }
        case 5: //Come-a-Lot
        {
            SetPlayerPos(playerid, 2169.1838, 1122.5426, 12.6107);
            SetPlayerInterior(playerid, 0);
            SendClientMessage(playerid, 0xFFFFFFFF, "Selamat datang di Come-a-Lot casino!");
        }
    }
}
```

## Langkah terakhir

Sekarang kita membutuhkan perintah untuk menampilkan menu. Ini adalah cara yang paling mudah. Dibandingkan dengan `strcmp` dan `ShowMenuForPlayer`. Ini bisa dilakukan dengan `OnPlayerCommandText`. Atau, jika kalian sudah memiliki command processor, gunakanlah itu sebagai ganti dari `ShowMenuForPlayer`.

```c
if(strcmp(cmdtext, "/teleport", true) == 0)
{
    ShowMenuForPlayer(teleportmenu,playerid);
    return 1;
}
```

Sangat mudah, bukan?

## Kata terakhir

Oke, setelah kalian membaca ini dan memahaminya, cobalah untuk membuat menu kalian sendiri. Seperti yang kalian lihat, ini tidaklah sulit, tapi ini akan membuat pemain di dalam server kamu sangat terkesan. Dan kalian dapat membuatnya lebih keren daripada ini. Ini sangatlah berguna bagi general store dan supermarket untuk membeli sesuatu. Lalu kalian dapat mengurangi uang sebagai efek dan harga yang ditampilkan di kolom lain pada menu. Tapi sekarang, buatlah sesuai kebutuhan kalian.

Kalian dapat menambahkan [TogglePlayerControllable](../scripting/functions/TogglePlayerControllable) dengan `false` setelah `ShowPlayerMenu` dan [TogglePlayerControllable](../scripting/functions/TogglePlayerControllable) dengan `true` pada akhir `OnPlayerSelectedMenuRow`, jadi pemain tidak dapat berpindah ketika memilih sesuatu di dalam menu.

Saya harap kalian dapat mempelajari sesuatu dari tutorial ini. Jika kamu memiliki pertanyaan, silahkan bertanya di forum/discord.
