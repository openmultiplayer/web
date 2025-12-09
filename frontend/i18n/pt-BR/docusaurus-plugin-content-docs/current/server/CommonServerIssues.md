---
title: Problemas Comuns do Servidor
sidebar_label: Problemas Comuns do Servidor
---

## Servidor trava instantaneamente ao ser iniciado

Na maioria das vezes é um erro no seu arquivo server.cfg ou seu gamemode está faltando. Verifique o arquivo server_log.txt e a razão deve estar localizada no final. Se não estiver, verifique o arquivo crashinfo.txt. A melhor solução para descobrir o que está causando a falha é usar o plugin Crash detect por Zeex/0x5A656578 ([clique para o link](https://github.com/AmyrAhmady/samp-plugin-crashdetect)) que fornecerá mais informações como números de linha, nomes de funções, valores de parâmetros, etc. Se o script for compilado em modo debug (flag -d3) para fazer o compilador colocar informações extras sobre tudo isso no arquivo .amx de saída.

## Servidor não está funcionando - firewall está desativado

Você precisará redirecionar suas portas para permitir que os jogadores entrem no seu servidor. Você pode redirecionar suas portas usando o PF Port Checker. Baixe em: www.portforward.com Se as portas não estiverem redirecionadas, significa que você precisa abri-las no seu roteador. Você pode verificar a lista de roteadores em [http://portforward.com/english/routers/port_forwarding/routerindex.htm](http://portforward.com/english/routers/port_forwarding/routerindex.htm "http://portforward.com/english/routers/port_forwarding/routerindex.htm")

Tem todas as informações sobre como redirecionar portas.

## 'Packet was modified'

O erro comumente mostrado como:

```
[hh:mm:ss] Packet was modified, sent by id: <id>, ip: <ip>:<port>
```

acontece quando um jogador sofre timeout ou está tendo problemas de conexão no momento.

## 'Warning: client exceeded messageslimit'

O erro comumente mostrado como:

```
Warning: client exceeded 'messageslimit' (1) <ip>:<port> (<count>) Limit: x/sec
```

acontece quando o número de mensagens por segundo que um cliente envia ao servidor excede o limite.

## 'Warning: client exceeded ackslimit'

O erro comumente mostrado como:

```
Warning: client exceeded 'ackslimit' <ip>:<port> (<count>) Limit: x/sec
```

acontece quando o limite de acks é excedido.

## 'Warning: client exceeded messageholelimit'

O erro comumente mostrado como:

```
Warning: client exceeded 'messageholelimit' (<type>) <ip>:<port> (<count>) Limit: x
```

acontece quando o limite de lacunas de mensagens é excedido.

## 'Warning: Too many out-of-order messages'

O erro comumente mostrado como:

```
Warning: Too many out-of-order messages from player <ip>:<port> (<count>) Limit: x (messageholelimit)
```

Acontece quando 'mensagens fora de ordem' reutiliza a configuração messageholelimit.

Para mais informações sobre isso, consulte [isto](ControllingServer#RCON_Commands)

## Jogadores constantemente recebendo erro "Unacceptable NickName" mas o nome é válido

Se você tem certeza de que está usando um nome aceitável e o servidor está rodando no Windows, tente alterar a opção de compatibilidade do samp-server.exe para Windows 98 e isso deve ser corrigido após reiniciar o servidor.

Servidores Windows com alto tempo de atividade também podem causar esse problema. Isso foi observado em torno de 50 dias de tempo de atividade do servidor. Para resolver, é necessária uma reinicialização.

## `MSVCR___.dll`/`MSVCP___.dll` não encontrado

Este problema ocorre regularmente em servidores Windows ao tentar carregar um plugin que foi desenvolvido usando uma versão superior do runtime Visual C++ do que a atualmente instalada no seu computador. Para corrigir isso, baixe as bibliotecas de runtime apropriadas do Microsoft Visual C++. Note que o servidor SA-MP é de 32 bits, portanto você também precisará baixar a versão 32 bits (x86) do runtime, independentemente da arquitetura. A versão do runtime que você precisa especificamente é indicada pelos números no nome do arquivo (veja a tabela abaixo), embora não faça mal instalar todos eles. Essas bibliotecas não se empilham, ou em outras palavras: você não terá os runtimes para as versões 2013 e anteriores se instalar apenas a versão 2015.

| Número da versão | Runtime                                       |
| ---------------- | --------------------------------------------- |
| 10.0             | Microsoft Visual C++ 2010 x86 Redistributable |
| 11.0             | Microsoft Visual C++ 2012 x86 Redistributable |
| 12.0             | Microsoft Visual C++ 2013 x86 Redistributable |
| 14.0             | Microsoft Visual C++ 2015 x86 Redistributable |
