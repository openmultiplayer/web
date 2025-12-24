---

title: db_next_row
sidebar_label: db_next_row
description: Avança para a próxima linha do conjunto de resultados obtido com `db_query`.
tags: ["sqlite"]

---

## descrição

A função avança para a próxima linha do resultado obtido com [db_query](db_query).

| Nome               | Descrição                                      |
| ------------------ | ---------------------------------------------- |
| DBResult:dbresult | Resultado retornado por [db_query](db_query). |

## retorno

Retorna 1 se o handle do resultado for válido e ainda não for a última linha. Retorna 0 caso contrário.

## exemplo

```c
// examples.inc

Examples_ListNames(DB:dbConnectionHandle)
{
    new DBResult:db_result_set = db_query("SELECT `name` FROM `examples`");

    if (db_result_set)
    {
        new result[256];

        do
        {
            db_get_field_assoc(db_result_set, "name", result, sizeof result);
            // Aqui pode fazer algo com 'result'
        }
        while (db_next_row(db_result_set));

        db_free_result(db_result_set);
    }
}
```

```c
// mode.pwn

#include <examples>

static DB:gDBConnectionHandle;

public OnGameModeInit()
{
    gDBConnectionHandle = db_open("example.db");

    if (gDBConnectionHandle)
    {
        print("Conexão com banco \"example.db\" criada com sucesso.");
        Examples_ListNames(gDBConnectionHandle);
    }
    else
    {
        print("Falha ao abrir conexão com banco \"example.db\".");
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

* [db_open](db_open): Abre conexão com banco SQLite
* [db_close](db_close): Fecha conexão com banco SQLite
* [db_query](db_query): Executa consulta no banco
* [db_free_result](db_free_result): Libera memória do resultado
* [db_num_rows](db_num_rows): Obtém número de linhas do resultado
* [db_num_fields](db_num_fields): Obtém número de campos do resultado
* [db_field_name](db_field_name): Retorna nome do campo pelo índice
* [db_get_field](db_get_field): Obtém conteúdo do campo pelo índice
* [db_get_field_assoc](db_get_field_assoc): Obtém conteúdo do campo pelo nome
* [db_get_field_int](db_get_field_int): Obtém conteúdo do campo como inteiro pelo índice
* [db_get_field_assoc_int](db_get_field_assoc_int): Obtém conteúdo do campo como inteiro pelo nome
* [db_get_field_float](db_get_field_float): Obtém conteúdo do campo como float pelo índice
* [db_get_field_assoc_float](db_get_field_assoc_float): Obtém conteúdo do campo como float pelo nome
* [db_get_mem_handle](db_get_mem_handle): Obtém handle de memória do banco aberto com db_open
* [db_get_result_mem_handle](db_get_result_mem_handle): Obtém handle de memória do resultado db_query
* [db_debug_openfiles](db_debug_openfiles): Número de conexões abertas
* [db_debug_openresults](db_debug_openresults): Número de resultados abertos
