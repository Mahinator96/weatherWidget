import { startWidget } from "./modules/widgetSevices.js";

const app = document.querySelector('#app');

const init = async (app) => {
	const widget = await startWidget();
	app.append(widget);
}

init(app)