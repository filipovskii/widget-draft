# Widget Draft

## List widget draft


### Code style

Use [Airbnb JavaScript Style Guide][codestyle].

### Install

Install [livereload chrome plugin][livereload].

```bash
# Inside project folder
npm install -g gulp bower
npm install && bower install
```


### Run

```bash
# Watch files and refresh browser on change
gulp watch

# or simply serve current version of files
gulp serve
```


### Test

```bash
# Watch files and launch tests on change
gulp watch-test

# or just launch tests
gulp test
```


### Build

Build project: minify js, css and images, concat files etc. Result will be
available in `dist` directory.

```bash
gulp build
```


### Docs

Build docs and put them into `dist/docs`

```bash
gulp docs
```

### JSHint

[JSHint][jshint] runs automatically on every task.

[livereload]: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en
[codestyle]: https://github.com/airbnb/javascript
[jshint]: http://www.jshint.com/