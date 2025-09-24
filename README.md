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

## 📄 Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.


## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
