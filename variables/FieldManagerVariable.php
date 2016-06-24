<?php
namespace Craft;

class FieldManagerVariable {

    public function getUnusedFieldIds() 
    {
        return craft()->fieldManager->getUnusedFieldIds();
    }
}