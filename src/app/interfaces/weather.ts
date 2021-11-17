export interface Weather {
    current: CurrentWeather;
    daily: ForecastWeather;
}

export interface CurrentWeather {
    dt: number;
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    wind_gust: number;
    wind_speed: number;
    sunrise: number;
    sunset: number;
    weather: {
        [index: number]: {
            icon: string;
            description: string;
            main: string;
        }
    }
}

export interface ForecastWeather {
    dt: number;
    temp: {
        day: number;
        eve: number;
        max: number;
        min: number;
        morn: number;
        night: number;
    };
    feels_like: {
        day: number;
        eve: number;
        morn: number;
        night: number;
    };
    humidity: number;
    pressure: number;
    wind_gust: number;
    wind_speed: number;
    sunrise: number;
    sunset: number;
    weather: {
        [index: number]: {
            icon: string;
            description: string;
            main: string;
        }
    }
}