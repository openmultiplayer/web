---
title: filecrc
sidebar_label: filecrc
description: 返回文件的32位CRC值。
tags: ["文件管理"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

<LowercaseNoteZH_CN />

## 描述

返回文件的 32 位 CRC 值。

| 参数             | 说明   |
| ---------------- | ------ |
| const filename[] | 文件名 |

## 返回值

返回文件的 32 位 CRC 值，若文件无法打开则返回 **0**。

## 示例

```c
new crc = filecrc("file.txt");

if (crc)
{
    // 成功
    printf("CRC 值 = %d", crc);
}
else
{
    // 错误
    print("文件 \"file.txt\" 不存在或无法打开。");
}
```

## 注意事项

:::tip

- CRC 值是校验文件在传输过程中是否被修改的有效指标（需事先保存原始文件的 CRC 值）
- 此函数返回的 CRC 值与 ZIP 归档工具（PKZip/WinZip）及 SFV 校验工具使用的标准完全一致

:::

## 相关函数

- [fopen](fopen): 打开文件
- [fclose](fclose): 关闭文件
- [ftemp](ftemp): 创建临时文件流
- [fremove](fremove): 删除文件
- [fwrite](fwrite): 写入文件
- [fputchar](fputchar): 向文件写入字符
- [fgetchar](fgetchar): 从文件读取字符
- [fblockwrite](fblockwrite): 向文件写入数据块
- [fblockread](fblockread): 从文件读取数据块
- [fseek](fseek): 跳转至文件指定位置
- [flength](flength): 获取文件长度
- [fexist](fexist): 检查文件是否存在
- [fmatch](fmatch): 检查文件名模式匹配
- [ftell](ftell): 获取当前文件位置
- [fflush](fflush): 将文件刷入磁盘（确保所有写入完成）
- [fstat](fstat): 返回文件大小和时间戳
- [frename](frename): 重命名文件
- [fcopy](fcopy): 复制文件
- [diskfree](diskfree): 返回磁盘剩余空间
- [fattrib](fattrib): 设置文件属性
- [fcreatedir](fcreatedir): 创建目录
