---
title: ftell
sidebar_label: ftell
description: "Obtenha a posição atual no arquivo."
tags: ["file management"]
---


<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## Descrição

Obtenha a posição atual no arquivo.

| Nome | Descrição |
| ----------- | -------------------------------------------- |
| File:handle | O identificador do arquivo. (retornado por fopen). |

## Retornos

A posição atual, relativa ao início do arquivo.

## Exemplos

```c
// Abra "file.txt" no modo "somente leitura"
new File:handle = fopen("file.txt", io_read);

// Verifique se o arquivo está aberto
if (handle)
{
    // Sucesso

    printf("Current position: %d", ftell(handle));

    // Feche o arquivo
    fclose(handle);
}
else
{
    // Erro
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
```
## Funções Relacionadas

- [fopen](fopen): Abra um arquivo.
- [fclose](fclose): Fecha um arquivo.
- [ftemp](ftemp): Crie um fluxo de arquivo temporário.
- [fremove](fremove): Remove um arquivo.
- [fwrite](fwrite): Grava em um arquivo.
- [fputchar](fputchar): Coloca um caractere em um arquivo.
- [fgetchar](fgetchar): Obtenha um caractere de um arquivo.
- [fblockwrite](fblockwrite): Grava blocos de dados em um arquivo.
- [fblockread](fblockread): Lê blocos de dados de um arquivo.
- [fseek](fseek): Salta para um caractere específico em um arquivo.
- [flength](flength): Obtenha o comprimento do arquivo.
- [fexist](fexist): Verifica se existe um arquivo.
- [fmatch](fmatch): Verifica se os padrões com um nome de arquivo correspondem.
- [fflush](fflush): Descarregue um arquivo no disco (certifique-se de que todas as gravações foram concluídas).
- [fstat](fstat): Retorna o tamanho e o carimbo de data/hora de um arquivo.
- [frename](frename): Renomeia um arquivo.
- [fcopy](fcopy): Copia um arquivo.
- [filecrc](filecrc): Retorna o valor CRC de 32 bits de um arquivo.
- [diskfree](diskfree): Retorna o espaço livre em disco.
- [fattrib](fattrib): Defina os atributos do arquivo.
- [fcreatedir](fcreatedir): Crie um diretório.
