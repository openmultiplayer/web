---
title: fseek
description: Change the current position in the file.
tags: ["file management"]
---

<LowercaseNote />

## Description

Change the current position in the file. You can either seek forward or backward through the file.

| Name                                                | Description                                                                 |
| --------------------------------------------------- | --------------------------------------------------------------------------- |
| File:handle                                         | The file handle to use. Returned by fopen.                                  |
| position                                            | The new position in the file, relative to the parameter whence (see below). |
| [seek_whence:whence](../resources/file-seek-whence) | The starting position to which parameter position relates.                  |

## Returns

The new position; relative to the start of the file.

## Examples

```c
// Open "file.txt" in "read only" mode
new File:handle = fopen("file.txt", io_read);

// If "file.txt" is open
if (handle)
{
    // Success

    // Jump to the 1st byte of "file.txt", and print its position
    printf("Begin of file position: %d", fseek(handle, 0, seek_start));

    // Jump to the last byte of "file.txt", and print its position
    printf("End of file position: %d", fseek(handle, 0, seek_end));

    // Jump to the same byte of "file.txt", and print its position
    printf("Currrent file position: %d", fseek(handle, 0, seek_current));

    // Close "file.txt"
    fclose(handle);
}
else
{
    // Error
    print("Failed to open \"file.txt\".");
}
```

## Notes

:::warning

Using an invalid handle will crash your server! Get a valid handle by using [fopen](fopen) or [ftemp](ftemp).

:::

## Related Functions

- [fopen](fopen): Open a file.
- [fclose](fclose): Close a file.
- [ftemp](ftemp): Create a temporary file stream.
- [fremove](fremove): Remove a file.
- [fwrite](fwrite): Write to a file.
- [fread](fread): Read a file.
- [fputchar](fputchar): Put a character in a file.
- [fgetchar](fgetchar): Get a character from a file.
- [fblockwrite](fblockwrite): Write blocks of data into a file.
- [fblockread](fblockread): Read blocks of data from a file.
- [flength](flength): Get the file length.
- [fexist](fexist): Check, if a file exists.
- [fmatch](fmatch): Check, if patterns with a file name matches.

## Related Resources

- [File Seek Whence](../resources/file-seek-whence)
