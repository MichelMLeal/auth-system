# Sistema de Autenticação e Permissões com Laravel e React

Este é um projeto de sistema de autenticação robusto construído com Laravel no backend e React com Inertia.js no frontend. Ele inclui um sistema completo de controle de acesso baseado em papéis (roles) e permissões utilizando o pacote `spatie/laravel-permission`.

## ✨ Funcionalidades

-   **Autenticação Completa:** Registro, login, logout, recuperação de senha e confirmação de e-mail.
-   **Painel de Administração:**
    -   Listagem de usuários com paginação.
    -   Criação, edição e exclusão de usuários.
    -   Atribuição dinâmica de papéis (roles) e permissões a cada usuário.
-   **Controle de Acesso (RBAC):**
    -   Rotas e ações protegidas por papéis e permissões.
    -   Papel de `admin` com acesso total (Super Admin via `Gate`).
    -   Papéis `manager` e `user` com permissões pré-definidas.
-   **Ambiente de Desenvolvimento com Docker:** Configurado com Laravel Sail para uma inicialização rápida e consistente.
-   **Testes Automatizados:** Suíte de testes configurada com Pest para garantir a qualidade e a estabilidade do código.

## 🚀 Stack Tecnológica

-   **Backend:** Laravel 12
-   **Frontend:** React com Vite.js
-   **Stack TALL (adaptada):**
    -   **T**ailwind CSS
    -   **A**lpine.js (via dependências do Breeze)
    -   **L**aravel
    -   **L**ivewire (substituído por **Inertia.js** e **React**)
-   **Banco de Dados:** SQLite (configurado por padrão)
-   **Controle de Acesso:** `spatie/laravel-permission`
-   **Ambiente Local:** Laravel Sail (Docker)

## 📋 Pré-requisitos

Antes de começar, garanta que você tenha os seguintes softwares instalados em sua máquina:

-   [Docker](https://www.docker.com/get-started)
-   [Composer](https://getcomposer.org/)
-   [Node.js](https://nodejs.org/en/) (v18 ou superior) e npm

## ⚙️ Instalação e Execução

Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local.

**1. Clonar o Repositório**

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

**2. Configurar o Ambiente**

Copie o arquivo de ambiente de exemplo.

```bash
cp .env.example .env
```

**3. Instalar Dependências**

Instale as dependências do PHP com Composer e do JavaScript com npm.

```bash
composer install
npm install
```

**4. Iniciar o Ambiente Sail**

Inicie os contêineres Docker em background (`-d`).

```bash
./vendor/bin/sail up -d
```

**5. Gerar a Chave da Aplicação**

Este comando é executado dentro do contêiner do Sail.

```bash
./vendor/bin/sail artisan key:generate
```

**6. Rodar as Migrações e Seeders**

As migrações criarão as tabelas no banco de dados (`database/database.sqlite`), e os seeders criarão os papéis e permissões padrão.

```bash
# Rodar migrações
./vendor/bin/sail artisan migrate

# Rodar seeders (importante para criar as roles 'admin', 'manager', 'user')
./vendor/bin/sail artisan db:seed
```

**7. Compilar os Assets do Frontend**

Inicie o servidor de desenvolvimento do Vite para compilar os assets e habilitar o Hot Module Replacement (HMR).

```bash
npm run dev
```

**8. Acessar a Aplicação**

Pronto! A aplicação estará disponível em [http://localhost](http://localhost).

-   Você pode se registrar como um novo usuário (receberá a role `user` por padrão).
-   Para acessar o painel de administração em `/admin/users`, você precisará de um usuário com a role `admin`. Você pode criar um manualmente ou ajustar o `DatabaseSeeder` para criar um usuário admin padrão.

## ✅ Rodando os Testes

Para executar a suíte de testes automatizados com Pest, utilize o comando:

```bash
./vendor/bin/sail artisan test
```