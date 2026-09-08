# Barber Shop Brilliance

CRIAÇÃO DE SITE COMERCIAL — HTML + CSS + JAVASCRIPT

Crie um site comercial profissional, moderno, responsivo e de alta qualidade para o cliente descrito abaixo.

1. INFORMAÇÕES DO CLIENTE

Use estas informações como fonte principal para preencher o conteúdo do site:

Nome da empresa: Barbearia Hora do Corte

Segmento/nicho: BARBEARIA

WhatsApp 13 99662-5020

Endereço: Av. São Francisco de Assis, 3746 - Tupiry, Praia Grande - SP, 11724-425

Horário de funcionamento:

terça-feira

09:00–21:00

quarta-feira

09:00–21:00

quinta-feira

09:00–21:00

sexta-feira

09:00–23:00

sábado

08:30–22:00

domingo

10:30–16:30

segunda-feira

09:00–21:00

Serviços

Corte

Barba e cabelo

Barba

Sombrancelha

Descolori e pintar

Imagens

As imagens do projeto devem ficar exclusivamente dentro da pasta:

assets/

Utilize caminhos relativos simples, por exemplo:

assets/hero.jpg

assets/servico-1.jpg

assets/servico-2.jpg

Não utilize caminhos absolutos.

Não utilize URLs externas para imagens quando não for necessário.

Não altere a localização das imagens.

2. TECNOLOGIAS OBRIGATÓRIAS

O projeto deve utilizar somente:

HTML5

CSS3

JavaScript puro (Vanilla JS)

NÃO utilizar:

React

Vue

Angular

Next.js

Nuxt

Vite

TypeScript

Tailwind

frameworks de CSS

bibliotecas JavaScript desnecessárias

sistemas complexos de componentes

dependências que não sejam necessárias

O objetivo é que o projeto seja simples, leve e fácil de editar.

3. ESTRUTURA OBRIGATÓRIA DO PROJETO

Mantenha o projeto extremamente simples.

Utilize preferencialmente apenas:

index.html

style.css

script.js

e uma única pasta:

assets/

Estrutura:

/

├── index.html

├── style.css

├── script.js

└── assets/

    ├── logo

    ├── imagens

    └── ícones

NÃO crie dezenas de arquivos.

NÃO crie dezenas de pastas.

NÃO crie componentes separados desnecessariamente.

NÃO espalhe as imagens pelo projeto.

Todas as imagens devem permanecer dentro de assets/.

O site precisa funcionar corretamente simplesmente abrindo o arquivo:

index.html

diretamente no navegador.

Não depender de servidor Node.js, npm, build, compilação ou ambiente especial para funcionar.

4. SITE DE UMA ÚNICA PÁGINA

O site deve ser um One Page Website.

Todas as informações devem estar na mesma página.

Criar as seguintes seções:

Navbar

Hero

Sobre a empresa

Serviços

Diferenciais

Galeria/Portfólio

Depoimentos

Localização

CTA para WhatsApp

Footer

A quantidade de seções pode ser adaptada ao nicho, mas o site deve continuar sendo uma única página.

5. NAVBAR

Criar uma navbar moderna e responsiva.

Itens sugeridos:

Início

Sobre

Serviços

Diferenciais

Galeria

Contato

Ao clicar em qualquer item da navbar, a página deve fazer uma transição suave até a respectiva seção.

Utilizar:

scroll-behavior: smooth;

ou JavaScript quando necessário.

Não abrir novas páginas.

Não utilizar links para arquivos HTML diferentes.

6. WHATSAPP

O principal objetivo do site é gerar contatos pelo WhatsApp.

TODOS os botões de ação do site devem direcionar para o WhatsApp do cliente.

Exemplos:

Agendar horário

Solicitar orçamento

Falar conosco

Quero agendar

Entre em contato

Saiba mais

Reservar horário

Solicitar informações

Todos devem abrir uma conversa no WhatsApp.

Utilizar o número fornecido nas informações do cliente.

Formato:

https://wa.me/55XXXXXXXXXXX

Quando apropriado, utilizar uma mensagem automática relacionada ao botão.

Exemplo:

https://wa.me/55XXXXXXXXXXX?text=Olá!%20Gostaria%20de%20agendar%20um%20horário.

Criar mensagens diferentes de acordo com o contexto quando isso melhorar a experiência.

Exemplos:

"Olá! Gostaria de conhecer os serviços."

"Olá! Gostaria de agendar um horário."

"Olá! Gostaria de solicitar um orçamento."

7. BOTÕES

Todo botão principal de conversão deve levar ao WhatsApp.

Evite criar botões que não tenham função.

Não criar botões fictícios.

Não criar páginas de login.

Não criar sistemas de cadastro.

Não criar carrinho.

Não criar checkout.

O objetivo é transformar visitantes em contatos pelo WhatsApp.

8. RESPONSIVIDADE

O site deve ser totalmente responsivo.

Testar visualmente para:

Desktop

Notebook

Tablet

Smartphone

A experiência no celular deve ser prioridade.

A navbar deve possuir menu mobile funcional.

Imagens devem se adaptar corretamente à tela.

Não permitir scroll horizontal.

Textos não podem ultrapassar a largura da tela.

Botões devem possuir tamanho adequado para toque em dispositivos móveis.

9. DESIGN

Criar um design profissional adequado ao nicho informado.

O visual deve parecer um site comercial real, e não um template genérico.

Utilizar:

boa hierarquia visual

espaçamento consistente

tipografia moderna

cards quando fizer sentido

imagens de alta qualidade

animações sutis

efeitos hover

transições suaves

boa utilização de espaço

contraste adequado

excelente experiência mobile

A identidade visual deve ser coerente com o segmento da empresa.

Por exemplo:

BARBEARIA:
visual masculino, sofisticado, moderno e premium.

CLÍNICA DE ESTÉTICA:
visual elegante, clean, sofisticado e relacionado a beleza e bem-estar.

RESTAURANTE:
visual apetitoso, moderno e focado em conversão.

ACADEMIA:
visual energético, moderno e motivacional.

Não aplicar o mesmo design exatamente para todos os nichos.

10. ANIMAÇÕES

Adicionar animações suaves e profissionais.

Exemplos:

fade-in

slide-up

hover nos cards

transições suaves

animação de entrada das seções

Evitar excesso de animações.

O site deve continuar rápido.

Não utilizar animações pesadas que prejudiquem dispositivos móveis.

11. CÓDIGO

Escrever código limpo, organizado e fácil de entender.

Adicionar comentários somente onde realmente ajudam.

Evitar código desnecessariamente complexo.

Utilizar HTML semântico.

Utilizar CSS organizado.

Utilizar JavaScript apenas quando necessário.

Não criar dependências desnecessárias.

12. IMAGENS

IMPORTANTE:

Todas as imagens utilizadas pelo projeto devem possuir caminhos relativos.

Exemplo correto:

assets/hero.jpg

Exemplo incorreto:

/src/assets/hero.jpg

Exemplo incorreto:

C:\Users\...\imagem.jpg

Exemplo incorreto:

caminhos internos específicos do ambiente do Lovable.

O projeto precisa continuar funcionando depois de ser baixado e executado localmente.

Se forem utilizadas imagens temporárias, organize todas elas dentro de:

assets/

13. SEO BÁSICO

Adicionar no index.html:

title

meta description

viewport

meta charset

Open Graph básico

O conteúdo deve ser otimizado naturalmente para o segmento e cidade informados.

Não fazer keyword stuffing.

14. ACESSIBILIDADE

Utilizar:

textos alternativos nas imagens

HTML semântico

contraste adequado

botões acessíveis

navegação funcional pelo teclado

labels quando necessário

15. PERFORMANCE

Priorizar carregamento rápido.

Evitar bibliotecas desnecessárias.

Evitar imagens gigantes.

Utilizar lazy loading nas imagens que não estejam no primeiro viewport.

Manter CSS e JavaScript enxutos.

16. REGRA IMPORTANTE SOBRE ARQUIVOS

NÃO aumente a quantidade de arquivos sem necessidade.

Antes de criar qualquer novo arquivo, pergunte se ele é realmente necessário.

Sempre priorize:

index.html

style.css

script.js

assets/

Não criar estruturas complexas de projeto.

O código deve ser facilmente baixável e executável localmente.

17. RESULTADO ESPERADO

Entregar um site com aparência profissional suficiente para ser apresentado a um cliente e vendido como serviço.

O site deve:

funcionar localmente;

funcionar em desktop;

funcionar em celular;

possuir navegação suave;

ter todas as seções em uma única página;

utilizar HTML, CSS e JavaScript puro;

manter as imagens dentro de assets/;

possuir todos os CTAs direcionando ao WhatsApp;

possuir menu mobile;

possuir animações suaves;

ter carregamento rápido;

possuir código simples e organizado.

Antes de finalizar, verifique todos os caminhos das imagens, links do WhatsApp, links da navbar e funcionamento mobile.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://corte-sharp-web.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a7060874-5b45-4484-9b86-0d3e90854e53).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
