---
title: "open.mp client on linux"
description: Guia de como executar o cliente open.mp no Linux.
---

# Guia de como executar o cliente open.mp no Linux

:::warning

Você NÃO obterá uma interface gráfica funcional, isso deve ser executado em um prefixo do Wine via argumentos de linha de comando.

:::
### Testado em:

 - Lutris: wine-ge 8-26 com prefixo 32 bits
 - Bottles: soda-9.0-1

### How to:

1. Certifique-se de ter um prefixo do Wine criado com o GTA San Andreas instalado.  
2. Baixe o [launcher do open.mp](https://github.com/openmultiplayer/launcher/releases/latest) e instale dentro do prefixo do Wine.  
3. Baixe o [cliente SA-MP](https://github.com/KrustyKoyle/files.sa-mp.com-Archive) e instale no mesmo prefixo do Wine.  
4. Baixe o [omp-client.dll](https://assets.open.mp/omp-client.dll) e copie para a pasta `AppData\Local\mp.open.launcher\omp\` do usuário principal no seu prefixo.

Por fim, você pode executar o launcher do open.mp através da CLI do prefixo do Wine ou criar um script .bat para facilitar.

### Exemplo de comando para executar:
```
Z:\caminho\para\omp-launcher.exe -h servidor.ip -p porta -n user.name -g Z:\home\usuário\caminho\para\gta-san-andreas\install\
```

> Você pode executar omp-launcher.exe com a flag --help para obter mais informações sobre as opções disponíveis, caso o exemplo acima não seja suficiente.


## Troubleshooting

| Problema                                      | Suposta solução                                                                        |
| --------------------------------------------- |:--------------------------------------------------------------------------------------:|
| O jogo trava ao pausar                        | Falta alguma fonte, resolva instalando todas as fontes através do winetricks.          |
| Não exibe o prompt de login em um servidor    | Tente alternar a opção "Preferir bibliotecas do sistema" no Lutris.                    |
| Aparece uma caixa preta e o jogo não carrega  | Podem estar faltando parâmetros de lançamento na linha de comando. Revise o comando. |