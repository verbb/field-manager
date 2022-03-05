<?php
namespace verbb\fieldmanager\twigextensions;

use Twig\Extension\AbstractExtension;
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
     * @return TwigFunction[]
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('displayName', fn($value) => $this->displayName($value)),
        ];
    }

    public function displayName($value): ?string
    {
        if ((is_string($value) && class_exists($value)) || is_object($value)) {
            if (method_exists($value, 'displayName')) {
                return $value::displayName();
            }

            if (is_object($value)) {
                $value = $value::class;
            }

            $classNameParts = explode('\\', $value);

            return array_pop($classNameParts);
        }

        return '';
    }
}
