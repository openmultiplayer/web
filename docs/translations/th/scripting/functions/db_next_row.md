---
title: db_next_row
description: Moves to the next row of the result allocated from db_query.
tags: ["sqlite"]
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Moves to the next row of the result allocated from db_query.

| Name              | Description             |
| ----------------- | ----------------------- |
| DBResult:dbresult | The result of db_query. |

## ส่งคืน

Returns 1 on success, otherwise 0 if DBResult:dbresult is a NULL reference or the last row is reached.

## ตัวอย่าง

```c
// Callback
public OnPlayerCommandText(playerid, cmdtext[])
{
    // If "cmdtext" equals "/EchoWoetJoinList"
    if (!strcmp(cmdtext, "/EchoWoetJoinList", true, 17))
    {
        // Declare "db_result" and "info"
        new DBResult:db_result, info[2][30];

        // Select the join list of the player "Woet"
        db_result = db_query(db_handle, "SELECT * FROM `join_log` WHERE `name`='Woet'");

        // Do these
        do
        {
            // Store the data of "ip" into "info[0]"
            db_get_field_assoc(db_result, "ip", info[0], sizeof info[]);

            // Store the data of "time" into "info[1]"
            db_get_field_assoc(db_result, "time", info[1], sizeof info[]);

            // Print into the console
            printf("Print join list: Name: Woet IP: %s Date: %s", info[0], info[1]);
        }

        // While next row has been fetched
        while(db_next_row(db_result));

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
