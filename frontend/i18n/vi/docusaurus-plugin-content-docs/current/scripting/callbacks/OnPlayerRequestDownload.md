---
title: OnPlayerRequestDownload
sidebar_label: OnPlayerRequestDownload
description: Callback này được gọi khi một người chơi yêu cầu tải xuống mô hình tùy chỉnh.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3.DL R1' />

## Mô Tả

Callback này được gọi khi một người chơi yêu cầu tải xuống mô hình tùy chỉnh.

| Tên                  | Mô Tả                                                            |
|-----------------------|------------------------------------------------------------------|
| playerid              | ID của người chơi yêu cầu tải xuống mô hình tùy chỉnh.           |
| DOWNLOAD_REQUEST:type | Loại của yêu cầu [type](../resources/download-requests).         |
| crc                   | CRC checksum của tệp mô hình tùy chỉnh.                          |

## Trả Về

0 - Từ chối yêu cầu tải xuống

1 - Chấp nhận yêu cầu tải xuống

## Ví Dụ

```c
#define DOWNLOAD_REQUEST_EMPTY        (DOWNLOAD_REQUEST:0)
#define DOWNLOAD_REQUEST_MODEL_FILE   (DOWNLOAD_REQUEST:1)
#define DOWNLOAD_REQUEST_TEXTURE_FILE (DOWNLOAD_REQUEST:2)

new baseUrl[] = "https://assets.open.mp";

public OnPlayerRequestDownload(playerid, DOWNLOAD_REQUEST:type, crc)
{
    if (!IsPlayerConnected(playerid))
    {
        return 0;
    }

    new fullUrl[256 + 1];
    new dlFileName[64 + 1];
    new foundFileName = 0;

    if (type == DOWNLOAD_REQUEST_TEXTURE_FILE)
    {
        foundFileName = FindTextureFileNameFromCRC(crc, dlFileName, 64);
    }
    else if (type == DOWNLOAD_REQUEST_MODEL_FILE)
    {
        foundFileName = FindModelFileNameFromCRC(crc, dlFileName, 64);
    }

    if (foundFileName)
    {
        format(fullUrl, sizeof(fullUrl), "%s/%s", baseUrl, dlFileName);
        RedirectDownload(playerid, fullUrl);
    }

    return 0;
}
```

## Callbacks Liên Quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): Callback này được gọi khi một người chơi hoàn tất việc tải xuống mô hình tùy chỉnh.

## Tài Nguyên Liên Quan

- [Loại Yêu Cầu Tải Xuống](../resources/download-requests)