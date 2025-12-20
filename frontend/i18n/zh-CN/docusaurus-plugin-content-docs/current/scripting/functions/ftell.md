---
title: ftell
sidebar_label: ftell
description: 获取当前文件指针位置。
tags: ["文件管理"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

<LowercaseNoteZH_CN />

## 描述

获取文件指针的当前位置。

| 参数        | 说明                                |
| ----------- | ----------------------------------- |
| File:handle | 要操作的文件句柄（由 fopen 返回）。 |

## 返回值

返回相对于文件起始位置的当前偏移量（整数值）。

## 示例

```c
// 以"只读"模式打开"file.txt"
new File:handle = fopen("file.txt", io_read);

// 检查文件是否成功打开
if (handle)
{
    // 操作成功

    printf("当前指针位置: %d", ftell(handle));

    // 关闭文件
    fclose(handle);
}
else
{
    // 操作失败
    print("文件\"file.txt\"不存在或无法访问。");
}
```

## 相关函数

- [fopen](fopen): 打开文件
- [fclose](fclose): 关闭文件
- [ftemp](ftemp): 创建临时文件流
- [fremove](fremove): 删除文件
- [fwrite](fwrite): 写入文件
- [fputchar](fputchar): 写入单个字符
- [fgetchar](fgetchar): 读取单个字符
- [fblockwrite](fblockwrite): 写入数据块
- [fblockread](fblockread): 读取数据块
- [fseek](fseek): 定位文件指针
- [flength](flength): 获取文件长度
- [fexist](fexist): 检查文件是否存在
- [fmatch](fmatch): 匹配文件名模式
- [fflush](fflush): 刷新文件缓冲区
- [fstat](fstat): 获取文件状态信息
- [frename](frename): 重命名文件
- [fcopy](fcopy): 复制文件
- [filecrc](filecrc): 计算 CRC32 校验值
- [diskfree](diskfree): 获取磁盘剩余空间
- [fattrib](fattrib): 设置文件属性
- [fcreatedir](fcreatedir): 创建目录
