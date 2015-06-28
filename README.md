# ghostSheet
> Ghost empty theme hooked with grunt, less, an other goodies

## Why?
Because sometimes we just want a fresh start!
Besides that, ghostSheet provides a perfect clean, simple, and up-to-date start for a propper updateable theme. It's built on top of a [grunt](http://gruntjs.com/) structure, which makes it incredibly flexible and scalable.

## Install
Just add the ghostSheet folder to your `/themes` folder, and activate the theme in the admin panel.

## Structure
Inside the ghostSheet theme there are the regular `/assets` and `/partials` folder, plus all the basic and essential files to get you started. These files have a very simple example code, that you are encouraged to change.

On top of this, there are some other additional files and folders to make the actual grunt build, staging and release.
The files inside /js and /css are the ones being procesed by grunt and they are where you must add custom code. The remaining files don't need any build.

#### Staging and Release folders
None of these folders are present in the theme by default, they are a result of different build stages.

- staging: Where the `/assets` files are automaticaly built into, unminified, and the ones you should use during the development stage;
- dist: Where the final release files, built and minified, will be.

## Usage

#### Install dependencies
After adding the theme, command-line to it and do a `npm install`. That will install all the necessary dependencies.
Next, do a `grunt watcher`, to start the watcher.

#### Edit files
If your watcher is running, the edited `.js` and `.less` files will be built into `/staging`. Notice that by default the `default.hbs` file is pointing to those files. When releasing, you must point them to the `/dist` folder instead, like so:

```html
<link rel="stylesheet" type="text/css" href="/dist/css/main.min.css" />
...
...
<script src="/dist/js/ghostSheet.min.js"></script>
```

#### Grunt tasks

- grunt watcher: Will start the watcher;
- grunt staging: Will take care of the whole build of the `/staging` folder (this will be automaticaly done by the watcher, if running);
- grunt release: Will take care of the whole build of the `/dist` folder.

