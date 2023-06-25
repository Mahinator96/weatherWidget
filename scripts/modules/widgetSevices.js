import { fetchForecast, fetchWeather } from "./APIservice.js";
import { renderWidgetToday, renderWidgetOther, renderWidgetForecast, showError } from "./render.js";

const startWidget = async () => {

	const city = 'Minsk';

	const widget = document.createElement('div');
	widget.className = 'widget';

	const dataWeather = await fetchWeather(city);

	if (dataWeather.success) {
		renderWidgetToday(widget, dataWeather.data);
		renderWidgetOther(widget, dataWeather.data);
	} else {
		showError(dataWeather.error );
	}

	const dataForecast = await fetchForecast(city);

	if (dataForecast.success) {
		renderWidgetForecast(widget, dataForecast.data);
	} else {
		showError(dataForecast.error );
	}

	return widget;
}

export {startWidget};