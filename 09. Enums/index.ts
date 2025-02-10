/**
 * Enums
 * -> a way to define a set of named constants
 * -> allow you to define a colection of relateed values that can be used interchengeable in your code
 *
 */

// In a weather app, you may want to define a set of possible weather conditions e.g. sunny, cloudy, rainy, you coud define an enum like so..

enum WeatherConditions {
    Sunny,
    Cloudy,
    Rainy,
    Snowy,
}

const currentWeather = WeatherConditions.Sunny;
console.log(`The current weather is ${currentWeather}`) // 0

/**
 * WeatherConditions is the enum
 * each of the values is assigned an automatic numerical value starting from 0
 * should you want to use specific values for each enum member, use example below instead
 */

enum WeatherConditions2 {
    Sunny = "sunny",
    Cloudy = "cloudy"
}

// Usage

const currentWeather2 = WeatherConditions2.Sunny;
console.log(`The current weather is ${currentWeather2}`) // sunny