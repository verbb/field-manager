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
        if ((is_string($value) && class_exists($value)) || is_object($value)) {
            if (method_exists($value, 'displayName')) {
                return $value::displayName();
            } else {
                $classNameParts = explode('\\', get_class($value));

                return array_pop($classNameParts);
            }
        }

        return '';
    }
}
