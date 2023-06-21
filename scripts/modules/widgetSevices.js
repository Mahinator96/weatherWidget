import { fetchWeather } from "./APIservice.js";
import { renderWidgetToday, renderWidgetOther, renderWidgetForecast, showError } from "./render.js";

const startWidget = async () => {
	const widget = document.createElement('div');
	widget.className = 'widget';

	const dataWeather = await fetchWeather('Гомель');

	if (dataWeather.success) {
		renderWidgetToday(widget, dataWeather.data);
		renderWidgetOther(widget, dataWeather.data);
	} else {
		showError(widget, );
	}

	renderWidgetForecast(widget);

	console.log(dataWeather);
	return widget;
}

export {startWidget};