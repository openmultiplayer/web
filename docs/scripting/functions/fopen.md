---
title: fopen
description: Open a file (to read from or write to).
tags: ["file management"]
---

<LowercaseNote />

## Description

Open a file (to read from or write to).

| Name                                     | Description                                                                                                                                |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| const filename[]                         | The path to the file to open (if just a filename is specified, it will open the file with the name specified in the 'scriptfiles' folder). |
| [filemode:mode](../resources/file-modes) | The mode to open the file with (default: io_readwrite).                                                                                    |

## Returns

Returns the file handle. This handle is used for reading and writing.

0 if failed to open file.

## Examples

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
    while(fread(handle, buf))=
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

<br />

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

<br />

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
    while(fread(handle, buf))
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

<br />

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

:::warning

If you use `io_read` and the file doesn't exist, it will return a NULL reference. Using invalid references on file functions will crash your server!

:::

## Related Functions

- [fclose](fclose): Close a file.
- [ftemp](ftemp): Create a temporary file stream.
- [fremove](fremove): Remove a file.
- [fwrite](fwrite): Write to a file.
- [fread](fread): Read a file.
- [fputchar](fputchar): Put a character in a file.
- [fgetchar](fgetchar): Get a character from a file.
- [fblockwrite](fblockwrite): Write blocks of data into a file.
- [fblockread](fblockread): Read blocks of data from a file.
- [fseek](fseek): Jump to a specific character in a file.
- [flength](flength): Get the file length.
- [fexist](fexist): Check, if a file exists.
- [fmatch](fmatch): Check, if patterns with a file name matches.
- [ftell](ftell): Get the current position in the file.
- [fflush](fflush): Flush a file to disk (ensure all writes are complete).
- [fstat](fstat): Return the size and the timestamp of a file.
- [frename](frename): Rename a file.
- [fcopy](fcopy): Copy a file.
- [filecrc](filecrc): Return the 32-bit CRC value of a file.
- [diskfree](diskfree): Returns the free disk space.
- [fattrib](fattrib): Set the file attributes.
- [fcreatedir](fcreatedir): Create a directory.

## Related Resources

- [File Modes](../resources/file-modes)
