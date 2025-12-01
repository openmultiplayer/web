---
title: OnPlayerFinishedDownloading
sidebar_label: OnPlayerFinishedDownloading
description: callback ini memanggil jika player sudah selesai mendownload custom models.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3.DL R1' />

## Description

callback ini memanggil jika player sudah selesai mendownload custom models. Untuk informasi lebih lanjut cara menambahkan custom models ke dalam servermu, Kunjungi [release thread](https://sampforum.blast.hk/showthread.php?tid=644105) and [this tutorial](https://sampforum.blast.hk/showthread.php?tid=644123).

| Name         | Description                                                                    |
| ------------ | ------------------------------------------------------------------------------ |
| playerid     | ID dari player yang sudah mendownload custom models.                  		|
| virtualworld | ID dari virtual world jika player selesai mendownload custom models. 		|

## Returns

callback ini tidak menangani returns.

## Examples

```c
public OnPlayerFinishedDownloading(playerid, virtualworld)
{
    SendClientMessage(playerid, 0xFFFFFFFF, "Downloads finished.");
    return 1;
}
```

## Notes

:::tip

Callback ini terpanggil sepanjang waktu jika player berganti virtual world, meskipun tidak ada custom models di world itu.

:::

## Related Callbacks

Callback berikut mungkin berguna, karena terkait dengan callback ini dalam satu atau lain cara

- [OnPlayerConnect](OnPlayerConnect): Callback ini terpanggil jika player terhubung kedalam server.
- [OnPlayerDisconnect](OnPlayerDisconnect): Callback ini terpanggil jika player keluar dari server. 
- [OnIncomingConnection](OnIncomingConnection): Callback ini terpanggil jika player mencoba terhubung kedalam server. 
