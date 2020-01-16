## Add to project

Add following line to package.json. Version should be **latest**

`"i18n-extractor": "git+ssh://git@gitlab.vispera.co/cloud/tools/i18n-extractor.git#<version>",`

## Usage

Add following line as script
    
`"i18n": "i18n-extractor -c i18n-exractor.js"`

## Default Configuration


## Configurations

`i18n-exractor.js`

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
  },
  extra: {
    base: 'src/i18n/en_extra.json',
    list: [
      'src/i18n/en_extra.json',
      'src/i18n/tr_extra.json',
      'src/i18n/fr_extra.json',
    ]
  },
};
```

- `root`: The project root path.
- `languages`: This option must be set. Collected keys will be extracted as `base` option.
- `extra`: If you want to store **extra** pairs for specific language use this option. Extra files are not overrided by extractor. The `extra.base` option is used as reference language.