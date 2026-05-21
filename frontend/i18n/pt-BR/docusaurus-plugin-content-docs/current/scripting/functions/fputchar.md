---
title: fputchar
sidebar_label: fputchar
description: "Escreva um caractere em um arquivo."
tags: ["file management"]
---


<LowercaseNote />

## Descrição

Escreva um caractere em um arquivo.

| Nome | Descrição |
| ----------- | ----------------------------------------------------------------------------- |
| File:handle | O identificador de arquivo a ser usado, aberto anteriormente por fopen().                            |
| valor | O caractere a ser gravado no arquivo.                                         |
| bool:utf8 | Se for `true`, escreva no modo UTF8, caso contrário, em ASCII estendido. (padrão: `true`) |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
// Abra "file.txt" no modo "somente escrita"
new File:handle = fopen("file.txt", io_write);

if (handle)
{
    // Sucesso

    // Escreva o caractere "e" em "file.txt"
    fputchar(handle, 'e', false);

    // Feche "file.txt"
    fclose(handle);
}
else
{
    // Erro
    print("Failed to open \"file.txt\".");
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
- [fgetchar](fgetchar): Obtenha um caractere de um arquivo.
- [fblockwrite](fblockwrite): Grava blocos de dados em um arquivo.
- [fblockread](fblockread): Lê blocos de dados de um arquivo.
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
