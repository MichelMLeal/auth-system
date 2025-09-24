<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{

    public function boot(): void
    {
        RateLimiter::for('login', fn($request) => Limit::perMinute(5)->by($request->ip()));
    }
}