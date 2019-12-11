const TOKEN_KEY = "_judonguyen";

export const getCurrentDate = (new Date()).toDateString();

export const isNumber = value => Number.isInteger() ? true : false;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const saveToken = token => token ? localStorage.setItem(TOKEN_KEY, token) : null;
