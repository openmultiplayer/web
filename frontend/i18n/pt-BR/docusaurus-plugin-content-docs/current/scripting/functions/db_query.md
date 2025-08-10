---

title: db\_query
sidebar\_label: db\_query
description: Executa uma consulta SQL numa base de dados SQLite já aberta.
keywords:

* sqlite

---

## descrição

Executa uma consulta SQL numa base de dados SQLite já aberta.

| Nome     | Descrição                            |
| -------- | ------------------------------------ |
| DB\:db   | Handle da base de dados a consultar. |
| query\[] | Consulta SQL a executar.             |

## retorno

Retorna o índice do resultado (começa em 1) se a consulta for bem-sucedida, ou 0 em caso de falha.

## exemplo

```c
// entity_storage.inc

EntityStorage_SpawnAll(DB:connectionHandle)
{
    new DBResult:db_result_set = db_query(connectionHandle, "SELECT * FROM `entities`");

    if (db_result_set)
    {
        // Faz algo com os dados...

        db_free_result(db_result_set);
    }
}
```

```c
// mode.pwn

#include <entity_storage>

static DB:gDBConnectionHandle;

public OnGameModeInit()
{
    gDBConnectionHandle = db_open("example.db");

    if (gDBConnectionHandle)
    {
        print("Conexão com a base de dados \"example.db\" criada com sucesso.");
        EntityStorage_SpawnAll(gDBConnectionHandle);
    }
    else
    {
        print("Falha ao abrir a base de dados \"example.db\".");
    }

    return 1;
}

public OnGameModeExit()
{
    if (db_close(gDBConnectionHandle))
    {
        gDBConnectionHandle = DB:0;
    }
    return 1;
}
```

## notas

## funções relacionadas

* [db\_open](db_open): Abrir uma conexão com uma base de dados SQLite
* [db\_close](db_close): Fechar a conexão com a base de dados
* [db\_free\_result](db_free_result): Libertar a memória do resultado
* [db\_num\_rows](db_num_rows): Obter o número de linhas no resultado
* [db\_next\_row](db_next_row): Passar para a próxima linha
* [db\_num\_fields](db_num_fields): Obter o número de campos no resultado
* [db\_field\_name](db_field_name): Obter o nome do campo por índice
* [db\_get\_field](db_get_field): Obter o conteúdo do campo por índice
* [db\_get\_field\_assoc](db_get_field_assoc): Obter o conteúdo do campo por nome
* [db\_get\_field\_int](db_get_field_int): Obter o conteúdo inteiro por índice
* [db\_get\_field\_assoc\_int](db_get_field_assoc_int): Obter o conteúdo inteiro por nome
* [db\_get\_field\_float](db_get_field_float): Obter o conteúdo float por índice
* [db\_get\_field\_assoc\_float](db_get_field_assoc_float): Obter o conteúdo float por nome
* [db\_get\_mem\_handle](db_get_mem_handle): Obter o handle de memória da base de dados
* [db\_get\_result\_mem\_handle](db_get_result_mem_handle): Obter o handle de memória do resultado da consulta
* [db\_debug\_openfiles](db_debug_openfiles): Obter o número de conexões abertas para debug
* [db\_debug\_openresults](db_debug_openresults): Obter o número de resultados abertos para debug
