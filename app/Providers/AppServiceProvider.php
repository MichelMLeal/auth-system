<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        // Registrar policy do User diretamente no AppServiceProvider
        Gate::policy(\App\Models\User::class, \App\Policies\UserPolicy::class);

        // Super Admin: concede todas as permissões para quem tem a role 'admin'
        Gate::before(function ($user, string $ability = null) {
            // Evita conflito com checagens de guard diferentes; ajuste se necessário
            return $user->hasRole('admin') ? true : null;
        });
    }
}
