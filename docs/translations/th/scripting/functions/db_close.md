---
title: db_close
description: Closes an SQLite database that was opened with db_open.
tags: [sqlite]
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Closes an SQLite database that was opened with db_open.

| Name  | Description                                                           |
| ----- | --------------------------------------------------------------------- |
| DB:db | The handle of the database connection to close (returned by db_open). |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. May mean that the database handle specified is not open.

## ตัวอย่าง

```c
new DB:db_handle;
// ...
public OnGameModeInit()
{
    // Create a connection to the database
    if ((db_handle = db_open("example.db")) == DB:0)
    {
        // Error
        print("Failed to open a connection to \"example.db\".");
        SendRconCommand("exit");
    }
    else
    {
        // Success
        print("Successfully created a connection to \"example.db\".");
    }
    // ...
    return 1;
}

public OnGameModeExit()
{
    // Close the connection to the database
    db_close(db_handle);
    // ...
    return 1;
}
```

## บันทึก

:::warning

Using an invalid handle will crash your server! Get a valid handle by using db_open. But it's protected against NULL references.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- db_open: Open a connection to an SQLite database
- db_close: Close the connection to an SQLite database
- db_query: Query an SQLite database
- db_free_result: Free result memory from a db_query
- db_num_rows: Get the number of rows in a result
- db_next_row: Move to the next row
- db_num_fields: Get the number of fields in a result
- db_field_name: Returns the name of a field at a particular index
- db_get_field: Get content of field with specified ID from current result row
- db_get_field_assoc: Get content of field with specified name from current result row
- db_get_field_int: Get content of field as an integer with specified ID from current result row
- db_get_field_assoc_int: Get content of field as an integer with specified name from current result row
- db_get_field_float: Get content of field as a float with specified ID from current result row
- db_get_field_assoc_float: Get content of field as a float with specified name from current result row
- db_get_mem_handle: Get memory handle for an SQLite database that was opened with db_open.
- db_get_result_mem_handle: Get memory handle for an SQLite query that was executed with db_query.
- db_debug_openfiles
- db_debug_openresults
