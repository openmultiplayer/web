---

title: db_num_rows
sidebar_label: db_num_rows
description: Retorna o número de linhas de um resultado obtido com `db_query`.
keywords:
  - sqlite
tags: ["sqlite"]
---

## descrição

Retorna o número de linhas de um resultado obtido com [db_query](db_query).

| Nome               | Descrição                                      |
| ------------------ | ---------------------------------------------- |
| DBResult:dbresult | Resultado retornado por [db_query](db_query). |

## retorno

Número de linhas no resultado.

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

* [db_open](db_open): Abrir conexão com banco SQLite
* [db_close](db_close): Fechar conexão com banco SQLite
* [db_query](db_query): Executar consulta
* [db_free_result](db_free_result): Liberar resultado
* [db_next_row](db_next_row): Avançar para próxima linha
* [db_num_fields](db_num_fields): Número de campos no resultado
* [db_field_name](db_field_name): Nome do campo por índice
* [db_get_field](db_get_field): Conteúdo do campo por índice
* [db_get_field_assoc](db_get_field_assoc): Conteúdo do campo por nome
* [db_get_field_int](db_get_field_int): Conteúdo inteiro por índice
* [db_get_field_assoc_int](db_get_field_assoc_int): Conteúdo inteiro por nome
* [db_get_field_float](db_get_field_float): Conteúdo float por índice
* [db_get_field_assoc_float](db_get_field_assoc_float): Conteúdo float por nome
* [db_get_mem_handle](db_get_mem_handle): Handle de memória do banco
* [db_get_result_mem_handle](db_get_result_mem_handle): Handle de memória do resultado
* [db_debug_openfiles](db_debug_openfiles): Número de conexões abertas
* [db_debug_openresults](db_debug_openresults): Número de resultados abertos
