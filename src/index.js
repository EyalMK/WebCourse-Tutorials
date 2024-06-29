import { model } from "./model.js"
import { AppRenderer } from "./appRenderer.js"

const appClasses = "max-w-[1000px] w-full mx-auto relative";
const menuClasses = "bg-blue-700 dark:bg-blue-500 text-white p-4 flex justify-between dark:bg-gray-500"
const contentClasses = "w-full bg-blue-100 p-2 dark:bg-gray-900";

(new AppRenderer(".app", appClasses)).renderApp(model, menuClasses, contentClasses)