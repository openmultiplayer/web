---
title: OnPlayerRequestDownload
description: 当玩家请求自定义模型下载时，这个回调函数被调用。
tags: ["player"]
---

<VersionWarnCN name='回调' version='SA-MP 0.3.DL R1' />

## 描述

当玩家请求自定义模型下载时，这个回调函数被调用。

| 参数名   | 描述                          |
| -------- | ----------------------------- |
| playerid | 请求自定义模型下载的玩家 ID。 |
| type     | 请求的类型(见下文)。          |
| crc      | 自定义模型文件的 CRC 校验和。 |

## 返回值

0 - 拒绝下载请求

1 - 接收下载请求

## 案例

```c
#define DOWNLOAD_REQUEST_EMPTY        (0)
#define DOWNLOAD_REQUEST_MODEL_FILE   (1)
#define DOWNLOAD_REQUEST_TEXTURE_FILE (2)
new baseurl[] = "https://files.sa-mp.com/server";

public OnPlayerRequestDownload(playerid, type, crc)
{
    new fullurl[256+1];
    new dlfilename[64+1];
    new foundfilename=0;

    if (!IsPlayerConnected(playerid)) return 0;

    if (type == DOWNLOAD_REQUEST_TEXTURE_FILE) {
        foundfilename = FindTextureFileNameFromCRC(crc,dlfilename,64);
    }
    else if (type == DOWNLOAD_REQUEST_MODEL_FILE) {
        foundfilename = FindModelFileNameFromCRC(crc,dlfilename,64);
    }

    if (foundfilename) {
        format(fullurl,256,"%s/%s",baseurl,dlfilename);
        RedirectDownload(playerid,fullurl);
    }

    return 0;
}
```

## 相关函数

- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): 当玩家下载完自定义模型时调用。
