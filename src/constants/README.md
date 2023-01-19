Here you can put any constant variables that are used throughout the application. It’s a good practice to capitalize your constants to distinguish them from other variables and localized constants in your app.

Below are some examples of defining and using constants:

Define constants separately

// in constants/appConstants.ts
export const APP_NAME = 'Super app'
export const WIDGETS_LABEL = 'Widgets'

// Somewhere in your app
import { APP_NAME, WIDGETS_LABEL } from '@/constants/appConstants'
console.log(APP_NAME)

// You can also grab all named exports from the file
import \* as APP_CONSTANTS from '@/constants/appConstants'
console.log(APP_CONSTANTS.WIDGETS_LABEL)
