---

title: db\_num\_rows
sidebar\_label: db\_num\_rows
description: Retorna o número de linhas de um resultado obtido com `db_query`.
keywords:

* sqlite

---

## descrição

Retorna o número de linhas de um resultado obtido com [db\_query](db_query).

| Nome               | Descrição                                      |
| ------------------ | ---------------------------------------------- |
| DBResult\:dbresult | Resultado retornado por [db\_query](db_query). |

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

* [db\_open](db_open): Abrir conexão com banco SQLite
* [db\_close](db_close): Fechar conexão com banco SQLite
* [db\_query](db_query): Executar consulta
* [db\_free\_result](db_free_result): Liberar resultado
* [db\_next\_row](db_next_row): Avançar para próxima linha
* [db\_num\_fields](db_num_fields): Número de campos no resultado
* [db\_field\_name](db_field_name): Nome do campo por índice
* [db\_get\_field](db_get_field): Conteúdo do campo por índice
* [db\_get\_field\_assoc](db_get_field_assoc): Conteúdo do campo por nome
* [db\_get\_field\_int](db_get_field_int): Conteúdo inteiro por índice
* [db\_get\_field\_assoc\_int](db_get_field_assoc_int): Conteúdo inteiro por nome
* [db\_get\_field\_float](db_get_field_float): Conteúdo float por índice
* [db\_get\_field\_assoc\_float](db_get_field_assoc_float): Conteúdo float por nome
* [db\_get\_mem\_handle](db_get_mem_handle): Handle de memória do banco
* [db\_get\_result\_mem\_handle](db_get_result_mem_handle): Handle de memória do resultado
* [db\_debug\_openfiles](db_debug_openfiles): Número de conexões abertas
* [db\_debug\_openresults](db_debug_openresults): Número de resultados abertos
