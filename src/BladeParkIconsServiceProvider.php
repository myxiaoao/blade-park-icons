<?php

namespace Cooper\BladeParkIcons;

use BladeUI\Icons\Factory;
use Illuminate\Support\ServiceProvider;

class BladeParkIconsServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->callAfterResolving(Factory::class, function (Factory $factory) {
            $factory->add('park-icons', [
                'path' => __DIR__ . '/../resources/svg',
                'prefix' => 'park',
            ]);
        });
    }

    public function boot(): void
    {
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__ . '/../resources/svg' => public_path('vendor/blade-park-icons'),
            ], 'blade-park-icons');
        }
    }
}
