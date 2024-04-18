# prepare stage

## vscode plugin
1. ES7+ react/react/react-native snippets
2. path intellisense: autocompletes filenames
3. prettier

## create project

```bash
npx create-react-app .
```

this command run with error because npm has wrong proxy on my mac. Reset those config by `npm config set proxy null` and `npm config set https-proxy` can fix it. 


## Add dependency
- classnames@2.3.2
- dompurify@3.0.3
- emailjs-com@3.2.0
- react-router-dom@6.11.2