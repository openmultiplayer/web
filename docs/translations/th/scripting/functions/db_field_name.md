---
title: db_field_name
description: Returns the name of a field at a particular index.
tags: ["sqlite"]
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Returns the name of a field at a particular index.

| Name              | Description                                            |
| ----------------- | ------------------------------------------------------ |
| DBResult:dbresult | The result to get the data from; returned by db_query. |
| field             | The index of the field to get the name of.             |
| result[]          | The result.                                            |
| maxlength         | The max length of the field.                           |

## ส่งคืน

Returns 1, if the function was successful, otherwise 0 if DBResult:dbresult is a NULL reference or the column index not available.

## ตัวอย่าง

```c
// Callback
public OnPlayerCommandText(playerid, cmdtext[])
{
    // If "cmdtext" equals "/getfieldnames"
    if (!strcmp(cmdtext, "/getfieldnames", true, 14))
    {
        // Declare "db_result", "i", and "columns"
        new DBResult:db_result = db_query(db_handle, "SELECT * FROM `join_log`"), i, columns = db_num_fields(db_result), info[30];

        // Iterate from 0 to "columns-1"
        for(; i < columns; i++)
        {
            // Store the name of the i indexed column name into "info"
            db_field_name(db_result, i, info, sizeof info);

            // Print "info"
            printf("Field name: %s", info);
        }

        // Frees the result
        db_free_result(db_result);

        // Returns 1
        return 1;
    }

    // Returns 0
    return 0;
}
```

## บันทึก

:::warning

Using an invalid handle will crash your server! Get a valid handle by using db_query. But it's protected against NULL references.

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
