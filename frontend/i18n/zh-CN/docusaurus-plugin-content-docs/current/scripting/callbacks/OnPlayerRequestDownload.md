---
title: OnPlayerRequestDownload
sidebar_label: OnPlayerRequestDownload
description: 当玩家请求下载自定义模型时触发此回调函数
tags: ["玩家"]
---

<VersionWarnZH_CN name='回调' version='SA-MP 0.3.DL R1' />

## 描述

当玩家请求下载自定义模型资源时触发此回调函数

| 参数                  | 说明                                           |
| --------------------- | ---------------------------------------------- |
| playerid              | 发起下载请求的玩家ID                           |
| DOWNLOAD_REQUEST:type | [下载请求类型](../resources/download-requests) |
| crc                   | 自定义模型文件的CRC校验值                      |

## 返回值

0 - 拒绝下载请求

1 - 接受下载请求

## 示例

```c
#define DOWNLOAD_REQUEST_EMPTY        (DOWNLOAD_REQUEST:0)       // 空请求
#define DOWNLOAD_REQUEST_MODEL_FILE   (DOWNLOAD_REQUEST:1)       // 模型文件请求
#define DOWNLOAD_REQUEST_TEXTURE_FILE (DOWNLOAD_REQUEST:2)       // 纹理文件请求

new baseUrl[] = "https://assets.open.mp";  // 资源服务器基础地址

public OnPlayerRequestDownload(playerid, DOWNLOAD_REQUEST:type, crc)
{
    if (!IsPlayerConnected(playerid))
    {
        return 0; // 玩家未连接时拒绝请求
    }

    new fullUrl[256 + 1];  // 完整下载URL
    new dlFileName[64 + 1]; // 待下载文件名
    new foundFileName = 0; // 文件查找标记

    // 根据请求类型处理
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
        // 拼接完整下载地址
        format(fullUrl, sizeof(fullUrl), "%s/%s", baseUrl, dlFileName);
        RedirectDownload(playerid, fullUrl); // 重定向下载
    }

    return 0; // 拒绝默认下载流程
}
```

## 注意事项

:::tip

- 需在服务器配置中启用UsePlayerPedAnims选项
- 可通过CRC校验确保文件完整性
- 使用RedirectDownload函数可自定义下载源

:::

## 相关回调

以下回调函数可能与此回调相关：

- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): 当玩家完成下载时触发

## 相关资源

- [下载请求类型说明](../resources/download-requests)
