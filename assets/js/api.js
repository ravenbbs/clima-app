/**
 * @license Apache-2.0
 * @copyright Julio Condor 2024
 */
"use strict";

/**
 * Fetch data from server
 * @param {string} URL - API url
 * @param {Function} callback - callback
 */
const api_key = "f4e5f9e3aee33c5cde90b9393c148413"
export const fetchData = function(URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
  .then(res => res.json())
  .then(data => callback(data))
}

export const url = {
  currentWeather(lat, lon){
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
  },
  forecast(lat, lon){
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
  },
  airPollution(lat, lon){
    return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
  },
  reverseGeo(lat, lon){
    return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
  },
  /**
   * 
   * @param {string} query - Search query "London" , "New York"
   * @returns 
   */
  geo(query){
    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
  }
}