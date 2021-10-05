# PRESENTA BarCode Block

This block render a BarCode in a PRESENTA Library project using [JsBarcode Library](https://github.com/lindell/JsBarcode/)

## Installation

Please read the installation istructions for official plugins [here](https://lib.presenta.cc/extend/#install-an-official-plugin) using this unique identifier: `block-starter`

## Usage

To configure this block use this setting:

```js
{
    type: 'barcode',
    content: 'Hello World'
}
```

You can add the JsBarcode options alongside the main options in the config object.


## Development

Run the watcher:

    npm start

and the local webserver

    npm run test

