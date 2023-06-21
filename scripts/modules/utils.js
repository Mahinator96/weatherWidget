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


const getArrowFromDeg = (deg) => {	
	if ((deg > 337 && deg <= 360) && (deg > 0 && deg <= 22)) {
		return '&#8593;';
	}
	if (deg > 22 && deg <= 67) {
		return '&#8599;';
	}
	if (deg > 67 && deg <= 112) {
		return '&#8594;';
	}
	if (deg > 112 && deg <= 157) {
		return '&#8600;';
	}
	if (deg > 157 && deg <= 202) {
		return '&#8595;';
	}
	if (deg > 202 && deg <= 247) {
		return '&#8601;';
	}
	if (deg > 247 && deg <= 292) {
		return '&#8592;';
	}
	if (deg > 292.5 && deg <= 337.5) {
		return '&#8598;';
	}
}


export { getCurrentDateTime, getArrowFromDeg }