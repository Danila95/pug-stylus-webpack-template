# pug-stylus-webpack-template

 - Это  шаблон для сборщика проектов webpack 4.5.0
 - It is template for projects webpack 4.5.0 (for getting start learn webpack)

<div>
<a href="https://webpack.js.org"><img width="200" heigth="200" src="https://webpack.js.org/assets/icon-square-big.svg"></a>
<a href="http://stylus-lang.com/"><img src="http://stylus-lang.com/img/stylus-logo.svg" height="150"></a>
<a href="https://pugjs.org/api/getting-started.html"><img src="https://cdn.rawgit.com/pugjs/pug-logo/eec436cee8fd9d1726d7839cbe99d1f694692c0c/SVG/pug-final-logo-_-colour-128.svg" height="200"></a>
<a href="https://babeljs.io/"><img src="https://cdn.worldvectorlogo.com/logos/babel-10.svg" height="200"></a>
</div>

## Как пользоваться

после клонирования моего шаблона на ваш компьютер не забудьте в консоле прописать команду (в зависимости, каким пакетным менеджером вы пользуетесь):
 - npm: `npm install`
 - yarn: `yarn install`

## Getting Started
enter command `npm install` or `yarn install` (if you use yarn) to install dependencies.

## Commands

- `npm run dev` for development.
- `npm run build`, build static files in `prod` directory.
- `npm run watch`, start webpack-dev-server.

## Проблема с плагином "file-loader" / Problem with the plugin "file-loader"
Единственное, что я не смог сделать, так это граммотно настроить плагин "file-loader". Он копирует изображения на один уровень с папками "dev" и "prod". Поэтому я задействовал еще один плагин "copy-webpack-plugin", который копирует папку с изображениями "img" из "dev" в "prod". Как я с ним не бился я не смог настроить его так, как мне надо было. Если кто-нибудь знает как решить эту проблему, пожалуйста, напишите мне на мыло Danila00000@Gmail.com. Буду премного благодарен. Вот на этом форуме я подробно описываю проблему. http://www.cyberforum.ru/nodejs/thread2331890.html

P.S.
Точно такая же ситуация и с папкой "fonts" 

## Источники которые я использовал при создании этого шаблона

 - https://www.youtube.com/watch?v=MRlBKfGktwI
 - https://habr.com/post/347812/
 - https://www.youtube.com/watch?v=cQakPE9LqKg
 - https://tyapk.ru/blog/post/how-to-update-npm-packages
 - https://habr.com/company/mailru/blog/340922/
 - https://habr.com/post/309306/
 - https://loftblog.ru/material/1-vvedenie-v-webpack-2/
 - https://habr.com/post/350886/
 
  npm-check-updates - это утилита, которая автоматически настраивает package.json, которая подтягивает последнии версии всех зависимостей
 - https://www.npmjs.org/package/npm-check-updates
 
 `npm install -g npm-check-updates`
 
 `npm-check-updates -u`
 
 `npm outdated`
