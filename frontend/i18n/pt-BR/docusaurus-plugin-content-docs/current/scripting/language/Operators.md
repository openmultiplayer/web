---
title: "Palavras-chave: operadores"
sidebar_label: "Palavras-chave: operadores"
---

## `char`

Retorna quantas células (de 4 bytes) são necessárias para armazenar determinado número de caracteres em uma string compactada.

```c
4 char  // 1
3 char  // 1 (não existe ¾ de célula)
256 char // 64 (256 ÷ 4)
```

Utilize principalmente em declarações de arrays:

```c
new
    buffer[40 char]; // 10 células
```

Consulte o `pawn-lang.pdf` para saber mais sobre strings compactadas.

## `defined`

Verifica se um símbolo existe, geralmente dentro de `#if`:

```c
new
    someVar = 5;
#if defined someVar
    printf("%d", someVar);
#else
    #error The variable 'someVar' isn't defined
#endif
```

Uso típico: habilitar trechos de código dependendo de um `#define`.

```c
#define FILTERSCRIPT

#if defined FILTERSCRIPT

public OnFilterScriptInit()
{
    return 1;
}

#else

public OnGameModeInit()
{
    return 1;
}

#endif
```

## `sizeof`

Retorna o tamanho de um array em **elementos**:

```c
new
    someVar[10];
printf("%d", sizeof (someVar)); // 10
```

Para arrays multidimensionais:

```c
new
    someVar[2][10];
printf("%d %d", sizeof (someVar), sizeof (someVar[])); // 2 10
```

## `state`

Relacionado ao sistema de autômatos da linguagem Pawn; não é abordado aqui.

## `tagof`

Retorna o identificador numérico da tag de uma variável:

```c
new
    someVar,
    Float:someFloat;
printf("%d %d", tagof (someVar), tagof (someFloat));
```

Os valores exibidos correspondem aos códigos internos das tags. Para verificar se uma variável possui determinada tag:

```c
new Float:fValue = 6.9;

if (tagof (fValue) == tagof (Float:))
{
    print("float");
}
else
{
    print("not a float");
}
```
