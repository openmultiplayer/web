---
title: File Seek Whence
description: File seek whence definitions. (fseek)
---

:::note

These definitions are used by [fseek](../functions/fseek).

:::

| Definition   | Description                                                                                                           |
| ------------ | --------------------------------------------------------------------------------------------------------------------- |
| seek_start   | Set the file position relative to the start of the file (the position parameter must be positive).                    |
| seek_current | Set the file position relative to the current file position: the position parameter is added to the current position. |
| seek_end     | Set the file position relative to the end of the file (parameter position must be zero or negative).                  |
