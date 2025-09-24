<?php

/*
|--------------------------------------------------------------------------
| Test Case
|--------------------------------------------------------------------------
|
| The closure you provide here will be used as the base test case for
| all Pest tests. You should use this closure to provide a common
| set of functions that can be used across all your tests.
|
*/

uses(Tests\TestCase::class)->in('Feature', 'Unit');

/*
|--------------------------------------------------------------------------
| Expectations
|--------------------------------------------------------------------------
|
| When you're writing tests, you often need to check that values meet
| certain conditions. Pest provides a powerful set of expectations
| to make assertions easier.
|
| https://pestphp.com/docs/expectations
|
*/

expect()->extend('toBeOne', function () {
    return $this->toBe(1);
});

/*
|--------------------------------------------------------------------------
| Functions
|--------------------------------------------------------------------------
|
| While Pest is very powerful out-of-the-box, you may have some testing
| helpers that you use frequently. You can add them here to make them
| available globally.
|
| https://pestphp.com/docs/helpers
|
*/

function something()
{
    // ..
}
