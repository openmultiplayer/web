---
id: dialogstyles
title: Dialog Styles
description: Informasi mengenai Gaya Dialog
---

:::note

- Pada [OnDialogResponse](../callbacks/OnDialogResponse), menekan **button1** menetapkan nilai **response** menjadi 1, sedangkan menekan **button2** menetapkan nilai **response** menjadi **0**.
- Setiap dialog bisa memiliki tombol ke-dua karena sifatnya opsional. Untuk menghilangkannya, cukup dikosongkan saja, seperti pada contoh pertama. Player tidak dapat menekan tombol tersebut, tapi player dapat menekan tombol ESC dan memicu [OnDialogResponse](../callbacks/OnDialogResponse) dengan **response** bernilai **0**.
- [ShowPlayerDialog](../functions/ShowPlayerDialog): Pewarnaan dapan digunakan di setiap string: **caption**, **info**, **button1**, dan **button2**.

:::

- Halaman ini mendeskripsikan perilaku dari [ShowPlayerDialog](../functions/ShowPlayerDialog) dan [OnDialogResponse](../callbacks/OnDialogResponse).
- Untuk melihat batasannya, kunjungi halaman [Batasan](limits).
- Untuk contoh responnya, berikut ini adalah kodenya:

```c
public OnDialogResponse( playerid, dialogid, response, listitem, inputtext[ ] )
{
    printf( "playerid = %d, dialogid = ID_DIALOG_KAMU, response = %d, listitem = %d, inputtext = '%s' (size: %d)", playerid, response, listitem, inputtext, strlen( inputtext ) );
    return 1;
}
```

## Gaya 0: `DIALOG_STYLE_MSGBOX`

Menampilkan:

![](https://assets.open.mp/assets/images/dialogStyles/Dialog_style_msgbox.png)

:::note

- **\t** menambah sebuah TAB (lebih banyak spasi).
- **\n** membuat sebuah baris baru.
- Pewarnaan tidak akan diatur ulang (_reset_) setelah \n \t

:::

```c
ShowPlayerDialog(playerid, ID_DIALOG_KAMU, DIALOG_STYLE_MSGBOX, "Judul", "Info\n\tInfo", "Tombol 1", "");
```

### Keluaran Respon

:::note

- **listitem** selalu bernilai **-1**.
- **inputtext** selalu kosong.

:::

```c
// Menekan tombol
playerid = 0, dialogid = ID_DIALOG_KAMU, response = 1, listitem = -1, inputtext = '' (size: 0)

// Menekan ESC (karena tombol ke-dua tidak tampil)
playerid = 0, dialogid = ID_DIALOG_KAMU, response = 0, listitem = -1, inputtext = '' (size: 0)
```

## Gaya 1: `DIALOG_STYLE_INPUT`

Menampilkan:

![](https://assets.open.mp/assets/images/dialogStyles/Dialog_style_input.png)

:::note

- **\t** menambah sebuah TAB (lebih banyak spasi).
- **\n** membuat sebuah baris baru.
- Pewarnaan tidak akan diatur ulang (_reset_) setelah \n \t

:::

```c
ShowPlayerDialog(playerid, ID_DIALOG_KAMU, DIALOG_STYLE_INPUT, "Judul", "Masukkan informasi berikut:", "Tombol 1", "Tombol 2");
```

### Keluaran respon

:::note

- **listitem** selalu bernilai **-1**.
- **inputtext** adalah teks yang ditulis oleh pengguna, termasuk warna-warnanya.

:::

```c
// menulis "input" and dan menekan tombol kiri
playerid = 0, dialogid = ID_DIALOG_KAMU, response = 1, listitem = -1, inputtext = 'input' (size: 5)

// menulis "input" and dan menekan tombol kanan
playerid = 0, dialogid = ID_DIALOG_KAMU, response = 0, listitem = -1, inputtext = 'input' (size: 5)
```

## Gaya 2: `DIALOG_STYLE_LIST`

Showing:

![](https://assets.open.mp/assets/images/dialogStyles/Dialog_style_list.png)

:::note

- **\t** menambah sebuah TAB (lebih banyak spasi).
- **\n** membuat sebuah baris baru.
- Pewarnaan tidak akan diatur ulang (_reset_) setelah \n \t

:::

```c
ShowPlayerDialog(playerid, ID_DIALOG_KAMU, DIALOG_STYLE_LIST, "Judul", "Item 0\n{FFFF00}Item 1\nItem 2", "Tombol 1", "Tombol 2");
```

### Keluaran Respon

:::note

- **listitem** adalah nomor dari nilai yang dipilih, dimulai dari **0**.
- **inputtext** adalah nilai yang terdapat pada listitem yang dipilih, tanpa warnanya.

:::

```c
// memilih item pada urutan pertama dan menekan tombol kiri
playerid = 0, dialogid = ID_DIALOG_KAMU, response = 1, listitem = 0, inputtext = 'Item 0' (size: 6)

// memilih item pada urutan pertama dan menekan tombol kanan
playerid = 0, dialogid = ID_DIALOG_KAMU, response = 0, listitem = 1, inputtext = 'Item 1' (size: 6)
```

## Gaya 3: `DIALOG_STYLE_PASSWORD`

:::note

- Serupa dengan **DIALOG_STYLE_INPUT**.

:::

Menampilkan:

![](https://assets.open.mp/assets/images/dialogStyles/Dialog_style_password.png)

:::note

- **\t** menambah sebuah TAB (lebih banyak spasi).
- **\n** membuat sebuah baris baru.

:::

```c
ShowPlayerDialog(playerid, ID_DIALOG_KAMU, DIALOG_STYLE_PASSWORD, "Caption", "Enter private information below:", "Button 1", "Button 2");
```

### Keluaran Respon

:::note

- **listitem** nilainya selalu **-1**.
- **inputtext** adalah teks yang ditulis oleh pengguna, termasuk warna-warnanya.

:::

```c
// menulis "input" dan menekan tombol kiri
playerid = 0, dialogid = ID_DIALOG_KAMU, response = 1, listitem = -1, inputtext = 'input' (size: 5)

// menulis "input" dan menekan tombol kanan
playerid = 0, dialogid = ID_DIALOG_KAMU, response = 0, listitem = -1, inputtext = 'input' (size: 5)
```

## Gaya 4: `DIALOG_STYLE_TABLIST`

:::tip

Gaya ini telah ditambahkan di **SA-MP 0.3.7** and tidak akan bekerja di versi sebelumnya!

:::

:::note

- Serupa dengan **DIALOG_STYLE_LIST**.

:::

Menampilkan:

![](https://assets.open.mp/assets/images/dialogStyles/Dialog_style_tablist.png)

:::note

- **\t** menambah sebuah TAB (lebih banyak spasi).
- **\n** membuat sebuah baris baru.
- Pewarnaan akan diatur ulang (_reset_) setelah \n \t

:::

```c
ShowPlayerDialog(playerid, ID_DIALOG_KAMU, DIALOG_STYLE_TABLIST, "Caption",
"Deagle\t$5000\t100\n\
{FF0000}Sawnoff\t{33AA33}$5000\t100\n\
Pistol\t$1000\t50",
"Button 1", "Button 2");
```

:::note

- **inputtext** teks yang berisi nilai dari **listitem** yang dipilih pada kolom pertama, tanpa warna-warnanya.

:::

```c
// memilih item pertama pada daftar dan menekan tombol kiri
playerid = 0, dialogid = ID_DIALOG_KAMU, response = 1, listitem = 0, inputtext = 'Deagle' (size: 6)

// memilih item ke-dua pada daftar dan menekan tombol kanan
playerid = 0, dialogid = ID_DIALOG_KAMU, response = 0, listitem = 1, inputtext = 'Sawnoff' (size: 7)
```

## Gaya 5: `DIALOG_STYLE_TABLIST_HEADERS`

:::tip

Gaya ini telah ditambahkan di **SA-MP 0.3.7** and tidak akan bekerja di versi sebelumnya!

:::

:::note

- Serupa dengan **DIALOG_STYLE_LIST**.

:::

Menampilkan:

![](https://assets.open.mp/assets/images/dialogStyles/Dialog_style_tablist_headers.png)

:::note

- **\t** menambah sebuah TAB (lebih banyak spasi).
- **\n** membuat sebuah baris baru.
- Pewarnaan akan diatur ulang setelah \n and \t. **info** pada baris pertama berisi header.

:::

```c
ShowPlayerDialog(playerid, ID_DIALOG_KAMU, DIALOG_STYLE_TABLIST_HEADERS, "Caption",
"Header 1\tHeader 2\tHeader 3\n\
Item 1 Column 1\tItem 1 Column 2\tItem 1 Column 3\n\
{FF0000}Item 2 Column 1\t{33AA33}Item 2 Column 2\tItem 2 Column 3",
"Button 1", "Button 2");
```

:::note

- **inputtext** berisi teks dari **listitem** yang dipilih pada kolom pertama, tanpa warna-warnanya.

:::

```c
// memilih item pertama dari daftar dan menekan tombol kiri
playerid = 0, dialogid = ID_DIALOG_KAMU, response = 1, listitem = 0, inputtext = 'Item 1 Column 1' (size: 15)

// memilih item ke-dua dari daftar dan menekan tombol kanan
playerid = 0, dialogid = ID_DIALOG_KAMU, response = 0, listitem = 1, inputtext = 'Item 2 Column 1' (size: 15)
```
