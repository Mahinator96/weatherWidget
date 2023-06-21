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

export { getCurrentDateTime }