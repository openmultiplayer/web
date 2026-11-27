---
title: "fopen | open.mp"
description: "Open a file (to read from or write to)."
canonical: https://open.mp/docs/scripting/functions/fopen
language: en
---

# fopen

## Description

Open a file (to read from or write to).

| Name | Description |
| --- | --- |
| const filename\[\] | The path to the file to open (if just a filename is specified, it will open the file with the name specified in the 'scriptfiles' folder). |
| [filemode:mode](https://open.mp/docs/scripting/resources/file-modes) | The mode to open the file with (default: io\_readwrite). |

## Returns

Returns the file handle. This handle is used for reading and writing.

**0** if failed to open file.

## Examples

**io\_read mode:**

```c
// Open "file.txt" in "read only" mode
new File:handle = fopen("file.txt", io_read);

// Initialize "buf"
new buf[128];

// Check, if the file is opened
if (handle)
{
    // Success

    // Read the whole file
    while (fread(handle, buf))
    {
        print(buf);
    }

    // Close the file
    fclose(handle);
}
else
{
    // Error
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
```

  

**io\_write mode:**

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

  

**io\_readwrite mode:**

```c
// Open "file.txt" in "read and write" mode

new File:handle = fopen("file.txt", io_readwrite);

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

  

**io\_append mode:**

```c
// Open "file.txt" in "append only" mode
new File:handle = fopen("file.txt", io_append);

// Check, if file is open
if (handle)
{
    // Success

    // Append "This is a text.\r\n"
    fwrite(handle, "This is a text.\r\n");

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

warning

-   This function can't access files outside the `scriptfiles` folder!
-   If you use `io_read` and the file doesn't exist, it will return a _NULL_ reference. Using **invalid references** on file functions will **crash** your server! (Fixed in open.mp)

## Related Functions

-   [fclose](https://open.mp/docs/scripting/functions/fclose): Close a file.
-   [ftemp](https://open.mp/docs/scripting/functions/ftemp): Create a temporary file stream.
-   [fremove](https://open.mp/docs/scripting/functions/fremove): Remove a file.
-   [fwrite](https://open.mp/docs/scripting/functions/fwrite): Write to a file.
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

## Related Resources

-   [File Modes](https://open.mp/docs/scripting/resources/file-modes)
