---
title: "fgetchar | open.mp"
description: "Reads a single character from a file."
canonical: https://open.mp/docs/scripting/functions/fgetchar
language: en
---

# fgetchar

## Description

Reads a single character from a file.

| Name | Description |
| --- | --- |
| File:handle | The file handle to use; returned by [fopen](https://open.mp/docs/scripting/functions/fopen). |
| value | This parameter has no use, just keep it "0". |
| bool:utf8 | If `true`, read a character as UTF-8, otherwise as extended ASCII. (default: `true`) |

## Returns

If succeed, it returns the extended ASCII or UTF-8 value of the character at the current position in the file, otherwise EOF (end of file).

## Examples

```c
// Open "file.txt" in "read only" mode
new File:handle = fopen("file.txt", io_read);

// Declare "g_char"
new g_char;

// Check, if "file.txt" is open
if (handle)
{
    // Read all characters, while ignoring UTF-8.
    while ((g_char = fgetchar(handle, 0, false)) != EOF)
    {
        // Print the character
        printf("[ \"file.txt\" ] 0x%x", g_char);
    }

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
-   [fputchar](https://open.mp/docs/scripting/functions/fputchar): Put a character in a file.
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
