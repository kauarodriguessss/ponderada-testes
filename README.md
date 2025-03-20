# Teste Automatizado - Cadastro de Profissionais

## Requisito Funcional
Este teste foi criado para validar o **RF001 - Cadastro de Profissionais**, garantindo que o sistema permite cadastrar novos profissionais corretamente na base de dados.

### **Objetivo do Teste**
- Enviar uma requisição `POST` para criar um profissional.
- Verificar se a resposta da API retorna o código `201 Created`.
- Fazer uma requisição `GET` para confirmar se o profissional foi cadastrado corretamente no banco de dados.

---

## O que foi desenvolvido no código?
O código foi escrito em **Python** utilizando a biblioteca `requests` para realizar testes automatizados da API de cadastro de profissionais. Ele:

1. **Cria um novo profissional** enviando uma requisição `POST` para a API.
2. **Verifica se o status da resposta é `201 Created`**, indicando sucesso.
3. **Faz uma requisição `GET` para confirmar se o profissional foi registrado no banco de dados**.

Caso o profissional seja encontrado corretamente na segunda requisição, o teste é:

Considerado **aprovado** .

Caso contrário, ele é **reprovado** .

---

## Como testar o código?

### **Pré-requisitos**
- Ter **Python 3.x** instalado na máquina.
- Instalar a biblioteca `requests` (caso não esteja instalada):
  ```sh
  pip install requests
  ```
- Ter um **endpoint de API** funcional para realizar os testes.
- **Atualizar o código** com um **token de autenticação válido** (caso necessário).

### **Executando o teste**
1. **Clone o repositório**:
   ```sh
   git clone https://github.com/seu-usuario/gestorin-testes.git
   ```
2. **Acesse o diretório do projeto**:
   ```sh
   cd gestorin-testes
   ```
3. **Execute o script de teste**:
   ```sh
   python teste_cadastro_profissional.py
   ```
4. **Verifique os resultados no console**:
   - Se o profissional foi cadastrado corretamente.
   - Se houve erro.

---

## Estrutura do Repositório
```
📂 gestorin-testes
│-- 📄 teste_cadastro_profissional.py  # Código do teste automatizado
│-- 📄 README.md  # Instruções de uso
│-- 📄 resultados.md  # Resultados da execução do teste
