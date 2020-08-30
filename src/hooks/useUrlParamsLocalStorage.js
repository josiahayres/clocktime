import { useState } from "react";
const url = new URL(window.location.href);
// Hook
/**
 * HOOK
 * For given
 * @param {String} key key of the value to store
 * @param {*} initialValue any data to store into localstorage
 */
export default function useLocalStorage(key, initialValue) {
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const keyIsInUrl = url.searchParams.has(key);
			const urlValue = url.searchParams.get(key);

			if (keyIsInUrl) return JSON.parse(urlValue);

			// Get from local storage by key
			const item = window.localStorage.getItem(key);
			// Parse stored json or if none return initialValue
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			// If error also return initialValue
			console.log(error);
			return initialValue;
		}
	});

	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage & url
	const setValue = (value) => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			// Save state
			setStoredValue(valueToStore);

			// Save to local storage
			window.localStorage.setItem(key, JSON.stringify(valueToStore));

			// Save to url
			url.searchParams.set(key, JSON.stringify(valueToStore));
			window.history.pushState("", "Clocktime", url.search.toString());
		} catch (error) {
			// A more advanced implementation would handle the error case
			console.log(error);
		}
	};

	return [storedValue, setValue];
}
