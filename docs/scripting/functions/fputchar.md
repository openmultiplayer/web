---
title: "fputchar | open.mp"
description: "Write one character to a file."
canonical: https://open.mp/docs/scripting/functions/fputchar
language: en
---

# fputchar

## Description

Write one character to a file.

| Name | Description |
| --- | --- |
| File:handle | The File handle to use, earlier opened by [fopen](https://open.mp/docs/scripting/functions/fopen). |
| value | The character to write into the file. |
| bool:utf8 | If `true`, write in UTF8 mode, otherwise in extended ASCII. (default: `true`) |

## Returns

This function does not return any specific values.

## Examples

```c
// Open "file.txt" in "write only" mode
new File:handle = fopen("file.txt", io_write);

if (handle)
{
    // Success

    // Write character "e" into "file.txt"
    fputchar(handle, 'e', false);

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

warning

Using an **invalid handle** will crash your server! Get a **valid handle** by using [fopen](https://open.mp/docs/scripting/functions/fopen) or [ftemp](https://open.mp/docs/scripting/functions/ftemp).

## Related Functions

-   [fopen](https://open.mp/docs/scripting/functions/fopen): Open a file.
-   [fclose](https://open.mp/docs/scripting/functions/fclose): Close a file.
-   [ftemp](https://open.mp/docs/scripting/functions/ftemp): Create a temporary file stream.
-   [fremove](https://open.mp/docs/scripting/functions/fremove): Remove a file.
-   [fwrite](https://open.mp/docs/scripting/functions/fwrite): Write to a file.
-   [fread](https://open.mp/docs/scripting/functions/fread): Read a file.
-   [fgetchar](https://open.mp/docs/scripting/functions/fgetchar): Get a character from a file.
-   [fblockwrite](https://open.mp/docs/scripting/functions/fblockwrite): Write blocks of data into a file.
-   [fblockread](https://open.mp/docs/scripting/functions/fblockread): Read blocks of data from a file.
-   [fseek](https://open.mp/docs/scripting/functions/fseek): Jump to a specific character in a file.
-   [flength](https://open.mp/docs/scripting/functions/flength): Get the file length.
-   [fexist](https://open.mp/docs/scripting/functions/fexist): Check, if a file exists.
-   [fmatch](https://open.mp/docs/scripting/functions/fmatch): Check, if patterns with a file name matches.
-   [ftell](https://open.mp/docs/scripting/functions/ftell): Get the current position in the file.
-   [fflush](https://open.mp/docs/scripting/functions/fflush): Flush a file to disk (ensure all writes are complete).
-   [fstat](https://open.mp/docs/scripting/functions/fstat): Return the size and the timestamp of a file.
-   [frename](https://open.mp/docs/scripting/functions/frename): Rename a file.
-   [fcopy](https://open.mp/docs/scripting/functions/fcopy): Copy a file.
-   [filecrc](https://open.mp/docs/scripting/functions/filecrc): Return the 32-bit CRC value of a file.
-   [fattrib](https://open.mp/docs/scripting/functions/fattrib): Set the file attributes.
-   [fcreatedir](https://open.mp/docs/scripting/functions/fcreatedir): Create a directory.
