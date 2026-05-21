---
title: fblockread
sidebar_label: fblockread
description: "Esta função permite ler dados de um arquivo, sem codificação e terminadores de linha."
tags: ["file management"]
---


<LowercaseNote />

## Descrição

Esta função permite ler dados de um arquivo, sem codificação e terminadores de linha

| Nome | Descrição |
| ---------------------- | ------------------------------------- |
| File:handle | Identificador de arquivo a ser usado, aberto por fopen() |
| buffer | O buffer para salvar os dados lidos.
| size = sizeof (buffer) | O número de células a serem lidas.          |

## Retornos

O número de células lidas. Zero, se o final do arquivo foi atingido.

## Exemplos

```c
// Defina "some_enum"
enum _:some_enum
{
    some_data1,
    some_data2[20],
    Float:some_data3
}

// Declare a variável "some_data"
new some_data[some_enum];

// ...

// Abra "file.bin" no modo "somente leitura"
new File:handle = fopen("file.bin", io_read);

// Declare a variável "file_len"
new file_len;

// Verifique se "file.bin" está aberto
if (handle)
{
    // Sucesso

    // Obtenha o comprimento do arquivo "file.bin"
    file_len = flength(handle);

    // Se o arquivo for igual ou maior que o array
    if (file_len == (some_enum*4))
    {
        // Sucesso

        // Ler de "file.bin" para "some_data"
        fblockread(handle, some_data);
    }
    else
    {
        // Erro
        print("\"file.bin\" is not compatible with the array.");
    }

    // Feche "file.bin"
    fclose(handle);
}
else
{
    // Erro
    print("Failed to open \"file.bin\".");
}
```
## Notas

:::warning

Usar um identificador inválido irá travar seu servidor! Obtenha um identificador válido usando [fopen](fopen) ou [ftemp](ftemp).

:::

## Funções Relacionadas

- [fopen](fopen): Abra um arquivo.
- [fclose](fclose): Fecha um arquivo.
- [ftemp](ftemp): Crie um fluxo de arquivo temporário.
- [fremove](fremove): Remove um arquivo.
- [fwrite](fwrite): Grava em um arquivo.
- [fread](fread): Leia um arquivo.
- [fputchar](fputchar): Coloca um caractere em um arquivo.
- [fgetchar](fgetchar): Obtenha um caractere de um arquivo.
- [fblockwrite](fblockwrite): Grava blocos de dados em um arquivo.
- [fseek](fseek): Salta para um caractere específico em um arquivo.
- [flength](flength): Obtenha o comprimento do arquivo.
- [fexist](fexist): Verifica se existe um arquivo.
- [fmatch](fmatch): Verifica se os padrões com um nome de arquivo correspondem.
- [ftell](ftell): Obtenha a posição atual no arquivo.
- [fflush](fflush): Descarregue um arquivo no disco (certifique-se de que todas as gravações foram concluídas).
- [fstat](fstat): Retorna o tamanho e o carimbo de data/hora de um arquivo.
- [frename](frename): Renomeia um arquivo.
- [fcopy](fcopy): Copia um arquivo.
- [filecrc](filecrc): Retorna o valor CRC de 32 bits de um arquivo.
- [diskfree](diskfree): Retorna o espaço livre em disco.
- [fattrib](fattrib): Defina os atributos do arquivo.
- [fcreatedir](fcreatedir): Crie um diretório.
