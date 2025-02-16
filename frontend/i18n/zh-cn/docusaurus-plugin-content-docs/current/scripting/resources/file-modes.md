---
title: File Modes
sidebar_label: File Modes
description: The modes to open the file with.
---

:::note

These file modes are used by [fopen](../functions/fopen).

:::

| Mode         | Description                                                                               |
| ------------ | ----------------------------------------------------------------------------------------- |
| io_read      | Reads from the file.                                                                      |
| io_write     | Write in the file, or create the file if it does not exist. Erases all existing contents. |
| io_readwrite | Reads the file or creates it if it doesn't already exist.                                 |
| io_append    | Appends (adds) to file, write-only. If the file does not exist, it is created.            |
