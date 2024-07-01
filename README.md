# Be Front-End Test

## Sobre o Projeto
Este projeto faz parte de um desafio para um processo seletivo e consiste em uma página responsiva que exibe uma tabela com informações dos funcionários, incluindo nome, cargo, data de admissão, telefone e imagem. A página possui um campo de pesquisa que permite filtrar os funcionários em tempo real enquanto o usuário digita, sem a necessidade de realizar novas requisições.

## Tecnologias Utilizadas

- Node.js
- npm
- TypeScript
- Next.js
- React
- Tailwind CSS
- Tailwind Styled Components
- json-server (para simular uma API)

## Instruções para Rodar a Aplicação
### Requisitos
- Git
- Node.js
- npm

### Passos para Rodar a Aplicação
1. Clonar o Projeto:

```bash
git clone git@github.com:MattBastos/be-front-end-test.git
```

2. Instalar as Dependências: Após clonar o repositório, na raiz do projeto, execute o comando abaixo para instalar as dependências necessárias:

```bash
npm install
```

3. Rodar o Frontend: Para iniciar o servidor de desenvolvimento do frontend na porta 3000, execute o comando abaixo na raiz do projeto:

```bash
npm run dev
```
- URL: http://localhost:3000

4. Rodar o Backend: Para iniciar o servidor do json-server e simular a API, navegue até o diretório src/data e execute o comando abaixo:

```bash
npx json-server --watch db.json --port 3001
```

### Requisições

#### GET /employees
Este endpoint retorna a lista de todos os funcionários.

- URL: http://localhost:3001/employees
- Método HTTP: GET
- Resposta de Sucesso:
  
```
  [
    {
      "id": 1,
      "name": "João",
      "job": "Back-end",
      "admission_date": "2019-12-02T00:00:00.000Z",
      "phone": "5551234567890",
      "image": "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
    },
    {
      "id": 2,
      "name": "Roberto",
      "job": "Front-end",
      "admission_date": "2020-03-12T00:00:00.000Z",
      "phone": "5550321654789",
      "image": "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png"
    },
    // Outros funcionários...
  ]
```

Caso ocorra algum erro na requisição, uma mensagem será exibida no topo da página. Em caso de sucesso, os dados dos funcionários serão exibidos na tabela.

## Funções Utilitárias
As funções utilitárias formatDate e formatPhoneNumber são usadas para formatar datas e números de telefone. Elas estão localizadas no diretório src/utils.

### formatDate
Esta função formata uma string ISO de data para o formato dd/mm/yyyy.

- Assinatura
```
export const formatDate = (isoString: string | undefined) => string;
```

- Parâmetro
  - isoString (string | undefined): A string ISO que representa a data. Pode ser undefined.

- Retorno
  - Uma string formatada como dd/mm/yyyy. Retorna uma string vazia se isoString for undefined.

- Exemplo de Uso
```
import { formatDate } from './utils';

const formattedDate = formatDate('2019-12-02T00:00:00.000Z');
console.log(formattedDate); // Saída: 02/12/2019
```

### formatPhoneNumber
Esta função formata um número de telefone em um padrão internacional com código do país, DDD e número.

- Assinatura
```
export const formatPhoneNumber = (phoneNumber: string) => string;
```

- Parâmetros
  - phoneNumber (string): A string que representa o número de telefone.

- Retorno
  - Uma string formatada como +55 (55) 55555-5555.

- Exemplo de Uso
```
import { formatPhoneNumber } from './utils';

const formattedPhone = formatPhoneNumber('5551234567890');
console.log(formattedPhone); // Saída: +55 (51) 23456-7890
```

## Conclusão
Este projeto é uma aplicação simples e eficaz para exibir informações de funcionários, utilizando um conjunto moderno de tecnologias como Node.js, React, Next.js, TypeScript, Tailwind CSS e json-server. Ele demonstra a integração entre frontend e backend, além de oferecer uma experiência de usuário responsiva e dinâmica.
