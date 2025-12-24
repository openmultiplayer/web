---
title: db_field_name
sidebar_label: db_field_name
description: Retorna o nome do campo no índice especificado.
tags: ["sqlite"]
---

<LowercaseNote />

## Descrição

Retorna o nome de um campo em um índice específico.

| Nome              | Descrição                                                          |
| ----------------- | ------------------------------------------------------------------ |
| DBResult:dbresult | O resultado de onde obter os dados; retornado por [db_query](db_query). |
| field             | O índice do campo para obter o nome.                              |
| result[]          | O resultado.                                                       |
| maxlength         | O comprimento máximo do campo.                                     |

## Retorno

Retorna 1 se o handle do conjunto de resultados é válido, caso contrário 0.

## Exemplos

```c
static DB:gDBConnectionHandle;

public OnGameModeInit()
{
    // ...

    // Cria uma conexão com um banco de dados
    gDBConnectionHandle = db_open("example.db");

    // Se a conexão com o banco de dados existe
    if (gDBConnectionHandle)
    {
        // Seleciona a primeira entrada na tabela "join_log"
        new DBResult:db_result_set = db_query(g_DBConnection, "SELECT * FROM `join_log` LIMIT 1");

        // Se o handle do conjunto de resultados é válido
        if (db_result_set)
        {
            // Obtém o número de campos do conjunto de resultados
            new columns = db_num_fields(db_result_set);

            // Aloca alguma memória para armazenar nomes de campos
            new field_name[32];

            // Itera através de todos os índices de colunas
            for (new column_index; index < column_index; index++)
            {
                // Armazena o nome da coluna indexada i em "field_name"
                db_field_name(db_result_set, index, field_name, sizeof field_name);

                // Imprime "field_name"
                printf("Nome do campo no índice %d: \"%s\"", index, field_name);
            }

            // Libera o conjunto de resultados
            db_free_result(db_result_set);
        }
    }
    else
    {
        // Falhou ao criar uma conexão com o banco de dados
        print("Falhou ao abrir uma conexão com o banco de dados \"example.db\".");
    }
}

public OnGameModeExit()
{
    // Fecha a conexão com o banco de dados se a conexão estiver aberta
    if (db_close(gDBConnectionHandle))
    {
        // Limpeza extra
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## Notas

:::warning

Usar um handle inválido diferente de zero travará seu servidor! Obtenha um handle de conexão de banco de dados válido usando [db_query](db_query).

:::

## Funções Relacionadas

- [db_open](db_open): Abre uma conexão com um banco de dados SQLite
- [db_close](db_close): Fecha a conexão com um banco de dados SQLite
- [db_query](db_query): Consulta um banco de dados SQLite
- [db_free_result](db_free_result): Libera a memória do resultado de uma db_query
- [db_num_rows](db_num_rows): Obtém o número de linhas em um resultado
- [db_next_row](db_next_row): Move para a próxima linha
- [db_num_fields](db_num_fields): Obtém o número de campos em um resultado
- [db_get_field](db_get_field): Obtém o conteúdo do campo com ID especificado da linha de resultado atual
- [db_get_field_assoc](db_get_field_assoc): Obtém o conteúdo do campo com nome especificado da linha de resultado atual
- [db_get_field_int](db_get_field_int): Obtém o conteúdo do campo como um inteiro com ID especificado da linha de resultado atual
- [db_get_field_assoc_int](db_get_field_assoc_int): Obtém o conteúdo do campo como um inteiro com nome especificado da linha de resultado atual
- [db_get_field_float](db_get_field_float): Obtém o conteúdo do campo como um float com ID especificado da linha de resultado atual
- [db_get_field_assoc_float](db_get_field_assoc_float): Obtém o conteúdo do campo como um float com nome especificado da linha de resultado atual
- [db_get_mem_handle](db_get_mem_handle): Obtém o handle de memória para um banco de dados SQLite que foi aberto com db_open.
- [db_get_result_mem_handle](db_get_result_mem_handle): Obtém o handle de memória para uma consulta SQLite que foi executada com db_query.
- [db_debug_openfiles](db_debug_openfiles): A função obtém o número de conexões de banco de dados abertas para fins de depuração.
- [db_debug_openresults](db_debug_openresults): A função obtém o número de resultados de banco de dados abertos.
