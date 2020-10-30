---
title: db_free_result
description: Frees result memory allocated from db_query.
tags: ["sqlite"]
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Frees result memory allocated from db_query.

| Name              | Description        |
| ----------------- | ------------------ |
| DBResult:dbresult | The result to free |

## ส่งคืน

If DBResult:dbhandle is a valid handle, it returns 1, otherwise 0 if DBResult:dbhandle is a NULL reference.

## ตัวอย่าง

```c
// Example function
GetNameBySpawnID(spawn_id)
{
    // Declare "p_name"
    new p_name[MAX_PLAYER_NAME+1];

    // Declare "query" and "db_result"
    static query[60], DBResult:db_result;

    // Formats "query"
    format(query, sizeof query, "SELECT `PlayerName` FROM `spawn_log` WHERE `ID`=%d", spawn_id);

    // Selects the player name by using "spawn_id"
    db_result = db_query(db_handle, query);

    // If there is any valid entry
    if (db_num_rows(db_result))
    {
        // Store data from "PlayerName" into "p_name"
        db_get_field(db_result, 0, p_name, sizeof p_name);
    }

    // Frees the result
    db_free_result(db_result);

    // Returns "p_name"
    return p_name;
}
```

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
