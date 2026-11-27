---
title: "fblockwrite | open.mp"
description: "Write data to a file in binary format, while ignoring line brakes and encoding."
canonical: https://open.mp/docs/scripting/functions/fblockwrite
language: en
---

# fblockwrite

## Description

Write data to a file in binary format, while ignoring line brakes and encoding.

| Name | Description |
| --- | --- |
| File:handle | The File handle to use, opened by [fopen](https://open.mp/docs/scripting/functions/fopen). |
| const buffer\[\] | The data to write to the file. |
| size = sizeof (buffer) | The number of cells to write. |

## Returns

This function does not return any specific values.

## Examples

```c
// Define "some_enum"
enum _:some_enum
{
    some_data1,
    some_data2[20],
    Float:some_data3
}

// Declare "some_data"
new some_data[some_enum];

// ...

// Open "file.bin" in "write only" mode
new File:handle = fopen("file.bin", io_write);

// Check, if "file.bin" is open
if (handle)
{
    // Success

    // Write "some_data" into "file.bin"
    fblockwrite(handle, some_data);

    // Close "file.bin"
    fclose(handle);
}
else
{
    // Error
    print("Failed to open \"file.bin\".");
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
-   [fputchar](https://open.mp/docs/scripting/functions/fputchar): Put a character in a file.
-   [fgetchar](https://open.mp/docs/scripting/functions/fgetchar): Get a character from a file.
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
