import { startWidget } from "./modules/widgetSevices.js";

const app = document.querySelector('#app');

const init = (app) => {
	const widget = startWidget();
	app.append(widget);
}

init(app)