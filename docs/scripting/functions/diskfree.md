---
title: diskfree
description: Returns the free disk space.
tags: ["file management"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

This function has not yet been declared.

:::

<LowercaseNote />

## Description

Returns the free disk space.

| Name                | Description                                                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| const volume[] = "" | The name of the volume on systems that support multiple disks or multiple memory cards.  On single-volume systems, it is optional. |

## Returns

The amount of free space in KiB.

## Examples

```c
new freeSpace = diskfree();

printf("freeSpace = %d KiB", freeSpace);
```

## Notes

::tip

The maximum size that can be supported 2048 GiB (2 terabyte).

:::

## Related Functions

- [fopen](fopen): Open a file.
- [fclose](fclose): Close a file.
- [ftemp](ftemp): Create a temporary file stream.
- [fremove](fremove): Remove a file.
- [fwrite](fwrite): Write to a file.
- [fputchar](fputchar): Put a character in a file.
- [fgetchar](fgetchar): Get a character from a file.
- [fblockwrite](fblockwrite): Write blocks of data into a file.
- [fblockread](fblockread): Read blocks of data from a file.
- [fseek](fseek): Jump to a specific character in a file.
- [flength](flength): Get the file length.
- [fexist](fexist): Check, if a file exists.
- [fmatch](fmatch): Check, if patterns with a file name matches.
