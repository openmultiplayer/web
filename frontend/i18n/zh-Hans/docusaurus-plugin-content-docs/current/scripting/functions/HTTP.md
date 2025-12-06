---
title: HTTP
sidebar_label: HTTP
description: 发送线程化的HTTP请求
tags: ["http"]
---

## 描述

发送异步 HTTP 请求。

| 参数               | 说明                                                           |
| ------------------ | -------------------------------------------------------------- |
| index              | 用于区分相同回调请求的标识符（通常使用玩家 ID）                |
| HTTP_METHOD:method | 请求[类型](../resources/http-request-methods)（GET/POST/HEAD） |
| const url[]        | 目标 URL（无需包含'http://'前缀）                              |
| const data[]       | 需要随请求发送的 POST 数据                                     |
| const callback[]   | 处理该请求响应的回调函数名称                                   |

## 返回值

成功返回 1，失败返回 0

## 定义

```c
// HTTP请求类型
#define HTTP_GET                               (HTTP_METHOD:1) // 发送常规HTTP请求
#define HTTP_POST                              (HTTP_METHOD:2) // 发送带POST数据的HTTP请求
#define HTTP_HEAD                              (HTTP_METHOD:3) // 发送HTTP请求但忽略响应内容，仅返回状态码

// HTTP错误响应码
// 这些代码是对常规HTTP状态码的补充
#define HTTP_ERROR_BAD_HOST                    (HTTP_ERROR:1)  // 无效主机
#define HTTP_ERROR_NO_SOCKET                   (HTTP_ERROR:2)  // 无法创建套接字
#define HTTP_ERROR_CANT_CONNECT                (HTTP_ERROR:3)  // 连接失败
#define HTTP_ERROR_CANT_WRITE                  (HTTP_ERROR:4)  // 写入失败
#define HTTP_ERROR_CONTENT_TOO_BIG             (HTTP_ERROR:5)  // 响应内容过大
#define HTTP_ERROR_MALFORMED_RESPONSE          (HTTP_ERROR:6)  // 响应格式错误
```

## 示例

```c
forward MyHttpResponse(index, response_code, data[]);

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/hello", cmdtext, true))
    {
        HTTP(playerid, HTTP_GET, "assets.open.mp/hello.txt", "", "MyHttpResponse");
        return 1;
    }
    return 0;
}

public MyHttpResponse(index, response_code, data[])
{
    new buffer[128];

    if (response_code == 200) // 请求成功
    {
        format(buffer, sizeof(buffer), "服务器返回内容: %s", data);
        SendClientMessage(index, 0xFFFFFFFF, buffer);
    }
    else
    {
        format(buffer, sizeof(buffer), "请求失败！状态码: %d", response_code);
        SendClientMessage(index, 0xFF0000FF, buffer);
    }
}
```

## 注意事项

:::tip

除了上述错误代码，本函数也支持标准 HTTP 状态码，例如 404（页面未找到）、500（服务器错误）和 403（禁止访问）

:::

## 相关信息

- [HTTP 请求方法](../resources/http-request-methods)
- [HTTP 错误响应码](../resources/http-error-response-codes)
