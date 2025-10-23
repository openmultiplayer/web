---
title: diskfree
sidebar_label: diskfree
description: 返回可用磁盘空间。
tags: ["文件管理"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

:::warning

该函数尚未实现。

:::

<LowercaseNoteZH_CN />

## 描述

返回可用磁盘空间。

| 名称                | 描述                                                   |
| ------------------- | ------------------------------------------------------ |
| const volume[] = "" | 多磁盘系统或存储卡设备的卷名称（单卷系统下此参数可选） |

## 返回值

以 KiB 为单位的可用空间量。

## 示例

```c
new freeSpace = diskfree();

printf("可用空间 = %d KiB", freeSpace);
```

## 注意事项

:::tip

最大支持容量为 2048 GiB (2TB)

:::

## 相关函数

- [fopen](fopen): 打开文件
- [fclose](fclose): 关闭文件
- [ftemp](ftemp): 创建临时文件流
- [fremove](fremove): 删除文件
- [fwrite](fwrite): 写入文件
- [fputchar](fputchar): 写入单个字符到文件
- [fgetchar](fgetchar): 从文件读取单个字符
- [fblockwrite](fblockwrite): 写入数据块到文件
- [fblockread](fblockread): 从文件读取数据块
- [fseek](fseek): 定位文件指针位置
- [flength](flength): 获取文件长度
- [fexist](fexist): 检查文件是否存在
- [fmatch](fmatch): 检查文件名模式匹配
- [ftell](ftell): 获取当前文件指针位置
- [fflush](fflush): 刷新文件缓冲区到磁盘
- [fstat](fstat): 获取文件大小和时间戳
- [frename](frename): 重命名文件
- [fcopy](fcopy): 复制文件
- [filecrc](filecrc): 计算文件 32 位 CRC 校验值
- [fattrib](fattrib): 设置文件属性
- [fcreatedir](fcreatedir): 创建目录
