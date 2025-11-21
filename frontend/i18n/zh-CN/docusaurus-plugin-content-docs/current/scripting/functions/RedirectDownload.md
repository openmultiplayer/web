---
title: RedirectDownload
sidebar_label: RedirectDownload
description: 将玩家自定义的AddCharModel或AddSimpleModel模型下载请求重定向到指定的HTTP网页。
tags: ["自定义模型", "自定义皮肤", "简单模型"]
---

<VersionWarnZH_CN version='SA-MP 0.3.DL R1' />

## 描述

将玩家通过 AddCharModel 或 AddSimpleModel 请求的自定义模型下载重定向到指定的 HTTP 网页。

## 参数

| 参数名      | 说明                        |
| ----------- | --------------------------- |
| playerid    | 请求下载自定义模型的玩家 ID |
| const url[] | 要重定向下载的 URL 链接     |

## 返回值

**1:** 函数执行成功。

**0:** 函数执行失败。

## 示例用法（来自 dl_redirect 滤镜脚本）

```c
new baseurl[] = "https://assets.open.mp";

public OnPlayerRequestDownload(playerid, type, crc)
{
    if (!IsPlayerConnected(playerid))
    {
        return 0;
    }

    new
        fullURL[256],
        fileName[64],
        foundFileName = 0;

    if (type == DOWNLOAD_REQUEST_TEXTURE_FILE)
    {
        foundFileName = FindTextureFileNameFromCRC(crc, fileName, sizeof fileName);
    }
    else if (type == DOWNLOAD_REQUEST_MODEL_FILE)
    {
        foundFileName = FindModelFileNameFromCRC(crc, fileName, sizeof fileName);
    }

    if (foundFileName)
    {
        format(fullURL, sizeof fullURL, "%s/%s", baseurl, fileName);
        RedirectDownload(playerid, fullURL);
    }

    return 0;
}
```

## 相关函数

- [AddCharModel](AddCharModel): 添加一个新的自定义角色模型供下载
- [AddSimpleModel](AddSimpleModel): 添加一个新的自定义简单物体模型供下载
- [AddSimpleModelTimed](AddSimpleModelTimed): 添加一个带时限的自定义简单物体模型供下载

## 相关回调函数

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): 当玩家完成自定义模型下载时调用
