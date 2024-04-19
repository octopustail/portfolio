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

## cautions
- in `index.js` <React.strictMode> may cause some incompatibility. let's check whether it will in the future.
- I turned up reportWebVitals.
- I kept App.test.js for writing test in the future.

## migrate to TS
1. follow this guide: https://create-react-app.dev/docs/adding-typescript/
2. add tsconfig.json file manually.
3. change React component `.js` into 'tsx'
3. fix all the problems

# start coding
## support img in ts
declare `.png` and other images types.  See Mohammad Ayoub Khan's answer#solution4
https://stackoverflow.com/questions/52759220/importing-images-in-typescript-react-cannot-find-module



# todo
1. use css in js instead of plain css.
2. add some motion