
# Caso de Teste Automatizado - Projeto Backend

Este repositório contém a automação de um caso de teste baseado em um requisito funcional do projeto.

---

## Requisito Funcional Testado

**RF002 – Associação de Alunos a Profissionais**  
Este requisito assegura que os alunos possam ser corretamente associados a profissionais responsáveis por seu acompanhamento.

---

## Caso de Teste Automatizado

**Caso de Teste:** Testar a listagem de instituições (etapa anterior à associação aluno-profissional)  
**Objetivo:** Verificar se a aplicação retorna corretamente os dados das instituições cadastradas e trata erros ao buscar uma instituição por um ID inválido.  
**Pré-condição:** A API deve estar acessível e populada com dados válidos.  
**Procedimento de Teste:**  
- Realizar uma chamada para listar todas as instituições (`GET /institutions`);
- Tentar buscar uma instituição com um ID inválido;
  
**Resultado Esperado:**  
- A primeira chamada retorna uma lista de instituições válidas;
- A segunda chamada retorna um erro controlado, indicando instituição não encontrada.

**Resultado Obtido:**  
- Ambos os comportamentos foram corretamente validados pelos testes automatizados (veja `resultados.md` para detalhes).

---

## Tecnologias Utilizadas

- Node.js + Express
- TypeScript
- Jest (para testes automatizados)
- Axios (para requisições HTTP)
- dotenv (para gerenciamento de variáveis de ambiente)
- dotenv-cli (para rodar testes com `.env.test`)

---

## Ferramenta de Teste: Jest

A biblioteca [Jest](https://jestjs.io/) foi utilizada para automatizar o teste do controller. Os testes foram escritos no arquivo:

```
tests/AlunoController.test.ts
```

Para rodar apenas este teste, o comando utilizado foi:

```bash
yarn test tests/AlunoController.test.ts
```

O teste foi executado diretamente no projeto, utilizando a API já hospedada na plataforma Render, sem necessidade de rodar um backend local.

---

## Configuração de Ambiente

Foi criado um arquivo `.env.test` para garantir que a variável `ALUNO_API_URL` estivesse corretamente disponível no momento da execução dos testes:

```ini
ALUNO_API_URL=https://two025-1a-t13-es05-api2.onrender.com/api/v1
ALUNO_API_TOKEN=test-token
```

Esse arquivo foi carregado automaticamente durante a execução dos testes via o seguinte script configurado no `package.json`:

```json
"scripts": {
  "test": "dotenv -e .env.test -- jest"
}
```

---

## Registro de Resultados

Todos os detalhes da execução dos testes estão documentados no arquivo:

```
resultados.md
```

---

## Conclusão

O teste automatizado foi concluído com sucesso, cumprindo os critérios propostos pelo professor:

- Caso de teste bem descrito
- Teste automatizado funcional
- Registro em Markdown com saída real
- Repositório com múltiplos commits
