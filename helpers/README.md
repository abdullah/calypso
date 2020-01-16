## Replacer

#### i18n [key:values]

```javascript
{
  "buttons": {
    "create" : "Create",
    "edit" : "Edit",
  },
  "edit": "Edit",
  "notifcations": {
    "update": {
      "title": "Blabla",
      "message": "foo"
    }
  }
}
```

## Before - After

before `{{ $t('buttons.create') }}` after `{{ $t('Create') }}`  
before `{{ $t('buttons.edit') }}` after `{{ $t('Edit') }}`   
before `{{ $t('edit') }}` after `{{ $t('Edit') }}`   
before `i18n.t('edit')` after `i18n.t('Edit')`   
before `i18n.t('notifcations.update.title')` after `i18n.t('Blabla')`   
before `i18n.t('notifcations.update.message')` after `i18n.t('foo')`   


Replacer, uygulama icinde `.` notasyonu ile uygulanmis butun key'lerin karsiligini yeni key olarak degistirir. Bu islemden sonra extractor otomatik olarak butun i18n key'lerini toplar.