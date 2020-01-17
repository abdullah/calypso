### [calypso-extractor](https://tr.wikipedia.org/wiki/calypso-extractor_(gemi)) extracts and syncs i18n keys from code base

## Install


`yarn add calypso-extractor`

## Usage

Add following line as script
    
`"calypso-extractor": "calypso-extractor -c calypso-extractor-config.js"`

## Configurations

`calypso-extractor-config.js`

```javascript
module.exports = {
  root: '.',
  languages: {
    base: 'src/i18n/en.json',
    list: [
      'src/i18n/en.json',
      'src/i18n/tr.json',
      'src/i18n/fr.json',
    ]
  }
};
```

- `root`: The project root path.
- `languages`: This option must be set. Collected keys will be extracted as `base` option.

> In memory of [Captain Cousteau](https://tr.wikipedia.org/wiki/Jacques-Yves_Cousteau)