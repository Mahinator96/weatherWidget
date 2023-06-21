const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '14352dba5184cef93aa7f5fe1bc07994';

const fetchWeather = async (city) => {
	try {
		const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`);

		if (!response.ok) {
			throw new Error('Ошибка запроса')
		}

		const data = await response.json();

		return { success: true, data }

	} catch (err) { 
		return { success: false, err }
	}
}


export { fetchWeather };