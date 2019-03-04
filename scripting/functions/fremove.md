---
title: fremove
description: Delete a file.
tags: []
---

# fremove

<TagLinks />

## Description

Delete a file.

| Name   | Description                                               |
| ------ | --------------------------------------------------------- |
| name[] | The path of the file to delete. (NOTE: NOT a file handle) |

## Returns

1: The function executed successfully.

0: The function failed to execute. The file doesn't exist, or you don't have permission to delete it.

## Examples

```c
fremove("Example.txt");
```

## Notes

::: tip

Files that are currently open (fopen) must be closed first (fclose) to be deleted.

:::

::: warning

The file path must be valid.

:::

## Related Functions

- fopen: Open a file.
- fclose: Close a file.
- ftemp: Create a temporary file stream.
- fremove: Remove a file.
- fwrite: Write to a file.
- fread: Read a file.
- fputchar: Put a character in a file.
- fgetchar: Get a character from a file.
- fblockwrite: Write blocks of data into a file.
- fblockread: Read blocks of data from a file.
- fseek: Jump to a specific character in a file.
- flength: Get the file length.
- fexist: Check, if a file exists.
- fmatch: Check, if patterns with a file name matches.
