---
title: Redirecionamento de Portas
sidebar_label: Redirecionamento de Portas
description: Tutorial de redirecionamento de portas do servidor.
---

**Bem-vindo ao tutorial de Redirecionamento de Portas (Port Forward)!**

Então, você chegou ao tutorial de Redirecionamento de Portas, feito por Leopard.

Tudo que você precisa é um samp-server ou omp-server e um roteador. Se você não tem um roteador, então não precisa fazer redirecionamento de portas!

## O Início

Ok, aqui está o início, comece encontrando seu **gateway**. Assuma que você tem o Vista. Clique em iniciar, clique no campo de pesquisa e escreva **cmd**. Então uma caixa preta aparece. Insira o seguinte: **ipconfig**. Aguarde o texto carregar, então procure por ele. Continue procurando até encontrar _**gateway**_, e não feche a caixa preta!

Quando você encontrar, abra seu navegador web favorito. Quando estiver carregado, vá até a barra de endereço e digite o valor do _**gateway**_ (exemplo: 192.168.0.1/192.168.1.1). Pressione enter.

## Configuração do Roteador

Muito bem, você chegou à página de configuração do roteador. O que nos resta fazer agora é o redirecionamento de portas.

Então... há uma categoria nessa página que recebe um dos seguintes nomes:

- Virtual Server
- Port Forwarding
- Port Control
- Application Sharing
- Qualquer coisa com `port` no nome.

Se você encontrou, clique nele. Depois, clique no botão 'Adicionar novo', 'Nova Porta' ou algum outro botão que abrirá uma nova porta.

Insira os seguintes detalhes:

```
Porta: SUA_PORTA (padrão: 7777)
Tipo de Porta: UDP
Habilitado: Sim
**IP: Continue no 3º Passo**
```

Agora você precisa saber o endereço IP do seu computador.

## Obtendo o IP, Continuando

Agora, maximize a caixa preta e procure pelo texto novamente, até ver _IPv4_. Deve estar em um formato assim: **192.168.0.100**. Copie-o, e pronto! Continue com as informações na página do roteador. Por exemplo, meu IP é 192.168.0.100

```
Porta: SUA_PORTA (padrão: 7777)
Tipo de Porta: UDP
Habilitado: Sim
IP: 192.168.0.100
```

E pressione **salvar**. Então está feito. E! Não se esqueça de **redirecionar a porta no Firewall do Windows**. Aqui está um pequeno tutorial:

Vá ao menu iniciar, digite "firewall" no campo de pesquisa e selecione o "Firewall do Windows". Abra-o e clique em _Alterar preferências_. Uma nova janela aparece. Clique na aba _Exceções_, clique em _Adicionar porta.._ e preencha estas informações:

```
Nome: Servidor SA-MP (nomeie como quiser)
Número da Porta: SUA_PORTA (padrão: 7777)
Protocolo: UDP
```

Então está feito! Clique em ok e feche. Inicie o servidor e veja se está funcionando. Se estiver, vá ao seu Cliente SA-MP e insira: localhost:SUA_PORTA(padrão: 7777). Se o ping mudar, então seu servidor está funcionando completamente. Agora você só precisa ir para:

[WhatIsMyIP.COM](https://www.whatismyip.com).

## O Final

Uma vez lá, pegue o IP que está na sua tela. Vá novamente ao seu Cliente SA-MP, adicione esse IP aos seus favoritos e adicione SUA_PORTA (padrão: 7777) no final. Se estiver funcionando,

**PARABÉNS**! _Você fez o redirecionamento de portas_!
