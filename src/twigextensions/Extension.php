<?php
namespace verbb\fieldmanager\twigextensions;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class Extension extends AbstractExtension
{
    // Public Methods
    // =========================================================================

    public function getName(): string
    {
        return 'Display Name';
    }

    /**
     * @return \Twig\TwigFunction[]
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('displayName', fn($value) => $this->displayName($value)),
        ];
    }

    public function displayName($value)
    {
        if ((is_string($value) && class_exists($value)) || is_object($value)) {
            if (method_exists($value, 'displayName')) {
                return $value::displayName();
            } else {
                $classNameParts = explode('\\', $value::class);
                                          
                return array_pop($classNameParts);
            }
        }

        return '';
    }
}
