<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit6fde6fb03bcc37ea4d527c858e565fbe
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit6fde6fb03bcc37ea4d527c858e565fbe::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit6fde6fb03bcc37ea4d527c858e565fbe::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
