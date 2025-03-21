# Resultados dos Testes Automatizados

## Requisito Funcional Testado
**RF002 – Associação de Alunos a Profissionais**  
**CT002 – Testar a associação de um aluno a um profissional**  
O teste verifica se o sistema consegue retornar corretamente uma instituição válida e tratar erros ao tentar buscar uma instituição com ID inválido. Isso está relacionado ao fluxo de associação aluno–profissional, que depende da obtenção correta de dados institucionais.

---

## Descrição do Teste

O teste foi criado no arquivo `AlunoController.test.ts`, utilizando a biblioteca **Jest**. Ele testa dois comportamentos principais da `AlunoController`:

1. **Consulta bem-sucedida das instituições cadastradas.**
2. **Tratamento de erro ao buscar uma instituição por um ID inválido.**

---

## Estrutura Técnica

- Linguagem: **TypeScript**
- Ferramenta de Teste: **Jest**
- Pasta de testes: `tests/`
- Arquivo principal: `AlunoController.test.ts`
- Dependência externa: API hospedada em [`https://two025-1a-t13-es05-api2.onrender.com/api/v1`](https://two025-1a-t13-es05-api2.onrender.com/api/v1)
- Configuração de variáveis: `.env.test` com a chave `ALUNO_API_URL`

---

## Print do terminal
![image](https://github.com/user-attachments/assets/9c04cb73-1af5-44a8-b8f5-0bf7cf9516ee)

---

## Ambiente de Testes

Foi criado um arquivo `.env.test` com a seguinte variável:

```env
ALUNO_API_URL=https://two025-1a-t13-es05-api2.onrender.com/api/v1

