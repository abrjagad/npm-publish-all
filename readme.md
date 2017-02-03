# NPM Publish All

A command line utility to bump the version and publish all the modules inside any folder.

### Use cases

* You may working on mutiple modules and want to publish all of them with automatically bumping the version
* There might be scenario where your jenkins wants to publish all modules

### Install

Install globally to use it in terminal

`npm install -g npm-publish-all`

### Command line Usage

```
npm-publish-all bump
npm-publish-all publish
npm-publish-all both
```

### Help

`npm-publish-all --help`

```
Usage: npm-publish-all bump --bumpType [string]

Commands:
  bump     Bump every modules based on the bumpType
  publish  Publish every modules; takes publishArgs as option
  both     Bump the version and publish every modules

Options:
  --bumpType     Bump types:
                 <newversion>|major|minor|patch|premajor|preminor|prepatch|prerelease|from
                 -git                                          [string] [default: "patch"]
  --exclude      List of modules to exclude, leave space between inputs
                                                                     [array] [default: []]
  --context      Change the context to a sub-directory                            [string]
  --versionArgs  Any extra arguments that `npm version` command take[string] [default: ""]
  --publishArgs  Any extra arguments that `npm publish` command take[string] [default: ""]
  --help         Show help                                                       [boolean]

Examples:
  npm-publish-all bump                           Only Bump version

  npm-publish-all bump --bumpType major          Bump version to major

  npm-publish-all bump --bumpType 2.0.0          Bump version to a number

  npm-publish-all bump --exclude bin             excludes any folders like node_modules

  npm-publish-all bump --versionArgs="--force"   any options that the npm version
                                                 command takes

  npm-publish-all bump --context subDirectory    when you want to run the commands in a
                                                 sub directory

  npm-publish-all publish                        Only publish the module

  npm-publish-all publish --exclude bin

  npm-publish-all publish --publishArgs="--tag   any options that the npm publish
  alpha"                                         command takes

  npm-publish-all publish --context
  subDirectory --exclude bin

  npm-publish-all both                           Bump the version and publish as well

  npm-publish-all both --context subDirectory
  --exclude bin

```

### Output

```
npm-module-stats's version changed to v0.0.7

Published module: + npm-module-stats@0.0.7
```