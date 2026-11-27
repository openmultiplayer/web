---
title: "fwrite | open.mp"
description: "Write text into a file."
canonical: https://open.mp/docs/scripting/functions/fwrite
language: en
---

# fwrite

## Description

Write text into a file.

| Name | Description |
| --- | --- |
| File:handle | The handle of the file to write to (returned by [fopen](https://open.mp/docs/scripting/functions/fopen)). |
| const string\[\] | The string of text to write in to the file. |

## Returns

The length of the written string as an integer.

## Examples

```c
// Open "file.txt" in "write only" mode
new File:handle = fopen("file.txt", io_write);

// Check, if file is open
if (handle)
{
    // Success

    // Write "I just wrote here!" into this file
    fwrite(handle, "I just wrote here!");

    // Close the file
    fclose(handle);
}
else
{
    // Error
    print("Failed to open file \"file.txt\".");
}
```

  

```c
// Open "file.txt" in "read and write" mode
new File:handle = fopen("file.txt");

// Initialize "buf"
new buf[128];

// Check, if file is open
if (handle)
{
    // Success

    // Read the whole file
    while (fread(handle, buf))
    {
        print(buf);
    }

    // Set the file pointer to the first byte
    fseek(handle, _, seek_begin);

    // Write "I just wrote here!" into this file
    fwrite(handle, "I just wrote here!");

    // Close the file
    fclose(handle);
}
else
{
    // Error
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
```

  

```c
// Open "file.txt" in "append only" mode
new File:handle = fopen("file.txt", io_append);

// Check, if file is open
if (handle)
{
    // Success

    // Append "This is a text.\r\n"
    fwrite(handle, "This is a test.\r\n");

    // Close the file
    fclose(handle);
}
else
{
    // Error
    print("Failed to open file \"file.txt\".");
}
```

## Notes

note

This functions writes to the file in [UTF-8](https://en.wikipedia.org/wiki/UTF-8), which does not support some localized language symbols.

warning

Using an **invalid handle** will crash your server! Get a **valid handle** by using [fopen](https://open.mp/docs/scripting/functions/fopen) or [ftemp](https://open.mp/docs/scripting/functions/ftemp).

## Related Functions

-   [fopen](https://open.mp/docs/scripting/functions/fopen): Open a file.
-   [fclose](https://open.mp/docs/scripting/functions/fclose): Close a file.
-   [ftemp](https://open.mp/docs/scripting/functions/ftemp): Create a temporary file stream.
-   [fremove](https://open.mp/docs/scripting/functions/fremove): Remove a file.
-   [fread](https://open.mp/docs/scripting/functions/fread): Read a file.
-   [fputchar](https://open.mp/docs/scripting/functions/fputchar): Put a character in a file.
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
