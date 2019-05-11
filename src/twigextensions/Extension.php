<?php
namespace verbb\fieldmanager\twigextensions;

use Twig_Extension;
use Twig_SimpleFunction;

class Extension extends Twig_Extension
{
    // Public Methods
    // =========================================================================

    public function getName(): string
    {
        return 'Display Name';
    }

    public function getFunctions(): array
    {
        return [
            new Twig_SimpleFunction('displayName', [$this, 'displayName']),
        ];
    }

    public function displayName($value)
    {
        if (class_exists($value)) {
            return $value::displayName();
        }

        return '';
    }
}
