# Fajny React

## Install Fajny React in your project

Open your React app in a terminal and run:

```shell
npm i fajny-react
```

## Customise Fajny React

### Override Fajny variables

Create a CSS file in your `src` folder, and add this:

```css
:root {
    ...all your overrides
}
```

Find all the variables on Fajny documentation website.

### Fonts

By default Fajny CSS uses Lato for fonts. You can change this by adding a Google Fonts link at the beginning of your CSS file, and edit the `:root`: 

```css
:root {
    --font-family-body: "Your new font"
}
```

### Colors

Same as before, override Fajny variables in your new CSS file. You can find a nice color palette generator here: https://coolors.co/.