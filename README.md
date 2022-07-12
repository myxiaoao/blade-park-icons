# Blade IconPark Icons

<a href="https://github.com/myxiaoao/blade-park-icons/actions?query=workflow%3ATests">
    <img src="https://github.com/myxiaoao/blade-park-icons/workflows/Tests/badge.svg" alt="Tests">
</a>
<a href="https://packagist.org/packages/cooper/blade-park-icons">
    <img src="https://poser.pugx.org/cooper/blade-park-icons/v/stable.svg" alt="Latest Stable Version">
</a>
<a href="https://packagist.org/packages/cooper/blade-park-icons">
    <img src="https://poser.pugx.org/cooper/blade-park-icons/d/total.svg" alt="Total Downloads">
</a>

A package to easily make use of [IconPark Icons](https://github.com/bytedance/IconPark) in your Laravel Blade views.

For a full list of available icons see [the SVG directory](resources/svg) or preview them at [ByteDance IconPark](https://iconpark.oceanengine.com/official).

## Requirements

- PHP 7.4 or higher
- Laravel 8.0 or higher

## Installation

```bash
composer require cooper/blade-park-icons
```

## Usage

Icons can be used a self-closing Blade components which will be compiled to SVG icons:

```blade
<x-park-apple/>
```

You can also pass classes to your icon components:

```blade
<x-park-apple class="text-primary"/>
```

And even use inline styles:

```blade
<x-park-apple style="color: #666"/>
```

### Raw SVG Icons

If you want to use the raw SVG icons as assets, you can publish them using:

```bash
php artisan vendor:publish --tag=blade-park-icons --force
```

Then use them in your views like:

```blade
<img src="{{ asset('vendor/blade-park-icons/apple.svg') }}" width="10" height="10"/>
```

### Blade Icons

Blade Bootstrap Icons uses Blade Icons under the hood. Please refer to [the Blade Icons readme](https://github.com/blade-ui-kit/blade-icons) for additional functionality.

## Maintainers

Blade IconPark Icons is developed and maintained by [ByteDance](https://iconpark.bytedance.com/).

Blade Icons is developed and maintained by [Dries Vints](https://driesvints.com/).

## License

Blade Bootstrap Icons is open-sourced software licensed under [the MIT license](LICENSE.md).
