# @hersy/boolean

Converts lots of things to boolean.
Forked from <a href="https://www.npmjs.com/package/boolean">The Native Web's official npm package</a>.
Now patched and maintained by Santiago "Hersy" Heilborn.

## Installation

### Set your GITHUB_TOKEN environment variable

To install this (and any other GitHub) packages, you'll first need to set the **GITHUB_TOKEN** environment variable.
To do this you'll first need to create a GitHub Token (classic), you can do so on the "Developer options" section of your GitHub settings page.
For more instructions, read [GitHub's documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

Once set, add your access token to your preferred terminal's user profile file.

On Windows, WindowsPowerShell is recommended, locate or create your user profile file, usually saved on **%USERPROFILE%/Documents/WindowsPowerShell/Microsoft.Powershell_profile.ps1**, and add this line:

```powershell
$Env:GITHUB_TOKEN="<Your Token>"
```

On MacOS, locate or create your default terminal's user profile file.

For **bash** terminals it can be found at **~/.bashrc**
For **zsh** terminals it can be found at **~/.zshrc**

Then add this line:

```bash
export GITHUB_TOKEN="<Your Token>"
```

### Resolve to GitHub Package Registry

Locate or create your NPM configuration file, usually saved on **./.npmrc** , it should contain the following:

```npmrc
registry=https://registry.npmjs.org/ # or https://registry.yarnpkg.com/
@hersy:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### Install the package

Now you can run either:

```bash
npm install --save @hersy/boolean
```

or

```bash
yarn add -D @hersy/boolean
```

And you're all set!

## Quick start

First you need to add a reference to boolean in your application:

```javascript
const { boolean, isBooleanable } = require("@hersy/boolean");
```

If you use TypeScript, use the following code instead:

```typescript
import { boolean, isBooleanable } from "@hersy/boolean";
```

To verify a value for its boolean value, call the `boolean` function and provide the value in question as parameter:

```javascript
console.log(boolean("true")); // => true
```

The `boolean` function considers the following values to be equivalent to `true`:

- `true` (boolean)
- `'true'` (string)
- `'TRUE'` (string)
- `'t'` (string)
- `'T'` (string)
- `'yes'` (string)
- `'YES'` (string)
- `'y'` (string)
- `'Y'` (string)
- `'on'` (string)
- `'ON'` (string)
- `'1'` (string)
- `1` (number)

In addition to the primitive types mentioned above, boolean also supports their object wrappers `Boolean`, `String`, and `Number`.

_Please note that if you provide a `string` or a `String` object, it will be trimmed._

All other values, including `undefined` and `null` are considered to be `false`.

### Figuring out whether a value can be considered to be boolean

From time to time, you may not want to directly convert a value to its boolean equivalent, but explicitly check whether it looks like a boolean. E.g., although `boolean('F')` returns `false`, the string `F` at least looks like a boolean, in contrast to something such as `123` (for which `boolean(123)` would also return `false`).

To figure out whether a value can be considered to be a boolean, use the `isBooleanable` function:

```javascript
console.log(isBooleanable("true")); // => true
```

The `isBooleanable` function considers all of the above mentioned values to be reasonable boolean values, and additionally, also the following ones:

- `false` (boolean)
- `'false'` (string)
- `'FALSE'` (string)
- `'f'` (string)
- `'F'` (string)
- `'no'` (string)
- `'NO'` (string)
- `'n'` (string)
- `'N'` (string)
- `'off'` (string)
- `'OFF'` (string)
- `'0'` (string)
- `0` (number)
