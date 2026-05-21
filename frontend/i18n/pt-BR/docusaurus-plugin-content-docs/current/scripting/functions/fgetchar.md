---
title: fgetchar
sidebar_label: fgetchar
description: "Lê um único caractere de um arquivo."
tags: ["file management"]
---


<LowercaseNote />

## Descrição

Lê um único caractere de um arquivo.

| Nome | Descrição |
| ----------- | ------------------------------------------------------------------------------------ |
| File:handle | O identificador de arquivo a ser usado; retornado por fopen.                                           |
| valor | Este parâmetro não tem utilidade, basta mantê-lo em “0”.                                         |
| bool:utf8 | Se for `true`, leia um caractere como UTF-8, caso contrário, como ASCII estendido. (padrão: `true`) |

## Retornos

Se for bem-sucedido, ele retornará o valor ASCII ou UTF-8 estendido do caractere na posição atual no arquivo, caso contrário, EOF (fim do arquivo).

## Exemplos

```c
// Abra "file.txt" no modo "somente leitura"
new File:handle = fopen("file.txt", io_read);

// Declare a variável "g_char"
new g_char;

// Verifique se "file.txt" está aberto
if (handle)
{
    // Leia todos os caracteres, ignorando UTF-8.
    while((g_char = fgetchar(handle, 0, false)) != EOF)
    {
        // Imprima o caractere
        printf("[ \"file.txt\" ] 0x%x", g_char);
    }

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
- [fputchar](fputchar): Coloca um caractere em um arquivo.
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
