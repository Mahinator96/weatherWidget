const addZero = (n) => n < 10 ? `0${n}` : n;

const getCurrentDateTime = () => {
	const months = [
		'янв',
		'фев',
		'мар',
		'апр',
		'май',
		'июн',
		'июл',
		'авг',
		'сен',
		'окт',
		'ноя',
		'дек',
	];

	const weekdays = [
		'воскресенье',
		'понедельник',
		'вторник',
		'среда',
		'четверг',
		'пятница',
		'суббота',
	];

	const date = new Date();
	const dayOfMonth = date.getDate();
	const dayOfWeek = weekdays[date.getDay()];
	const month = months[date.getMonth()];
	const year = date.getFullYear();

	const hours = addZero(date.getHours());
	const minutes = addZero(date.getMinutes());

	return { year, month, dayOfWeek, dayOfMonth, hours, minutes }
}


const getWindDirecion = (deg) => {
	const directions = [
		'&#8595;',
		'&#8601;',
		'&#8592;',
		'&#8598;',
		'&#8593;',
		'&#8599;',
		'&#8594;',
		'&#8600;',
	];

	const i = Math.round(deg / 45) % 8;

	return directions[i];
}


const calculateDewPoint = (temp, humidity) => {
	const a = 17.27;
	const b = 237.7;
	const ft = (a * temp) / (b + temp) + Math.log(humidity / 100);
	const dewPoint = (b * ft) / (a - ft);
	
	return dewPoint.toFixed(1);
}

const convertPressure = (pressure) => {
	const mmHg = pressure * (1 / 1.33);

	return mmHg.toFixed(1)
}

const getWeatherForecastData = (data) => {
	const currentDate = new Date();
	const dateUTC = new Date(currentDate.getTime() + currentDate.getTimezoneOffset() * 60000);
	
	const forecast = data.list.filter((item) => {
		return new Date(item.dt_txt).getHours() === 12 && 
		new Date(item.dt_txt).getDate() > new Date().getDate() &&
		new Date(item.dt_txt).getDate() < new Date().getDate() + 5;
	})

	const forecastData = forecast.map((item) => {
		const date = new Date(item.dt_txt);
		const weekdaysShort = [
			'вс',
			'пн',
			'вт',
			'ср',
			'чт',
			'пт',
			'сб',
		];

		const dayOfWeek = weekdaysShort[date.getDay()];
		const weatherIcon = item.weather[0].icon;
		let minTemp = Infinity;
		let maxTemp = -Infinity;

		for (let i = 0; i <data.list.length; i++) {
			const temp = data.list[i].main.temp;
			const tempDate = new Date(data.list[i].dt_txt);

			if (tempDate.getDate() === date.getDate()) {
				if (temp < minTemp) {
					minTemp = temp;
				}
				if (temp > maxTemp) {
					maxTemp = temp;
				}
			}
		}



		return {
			dayOfWeek,
			weatherIcon,
			minTemp,
			maxTemp
		}
	})

	return forecastData;
}

export { getCurrentDateTime, getWindDirecion, calculateDewPoint, convertPressure, getWeatherForecastData }