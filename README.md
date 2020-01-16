### [Calypso](https://tr.wikipedia.org/wiki/Calypso_(gemi)) extracts and syncs i18n keys from code base

## Add to project

Add following line to package.json. Version should be **latest**

`"calypso": "git+ssh://git@gitlab.vispera.co/cloud/tools/calypso.git#<version>",`

## Usage

Add following line as script
    
`"calypso": "calypso -c calypso-config.js"`

## Configurations

`calypso-config.js`

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