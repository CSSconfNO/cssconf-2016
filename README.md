# CSSconf Nordic Website

Make sure you have Node.js installed.

```sh
# Check version.
$ node -v
```

If version is lower than v5.3, please upgrade. You can grab the latest stable version from here

https://nodejs.org/en/

or install through your favorite package manager.

## Dependencies

```sh
# Install gulp globally.
$ npm install -g gulp

# Install bower globally.
$ npm install -g bower
````

## Installation

```sh
# Install packages
$ npm install
$ bower install
```

## Developing

```sh
# Start server
$ gulp serve
```

## Deploying
````sh
$ gulp build # Packaging assets and things
$ modulus login
$ modulus project deploy -p cssconf_no
````
