export const isValidNumericObject = (input: Record<string, any>): boolean => {
    for (const [key, value] of Object.entries(input)) {
        const numericValue = Number(value);
        if (isNaN(numericValue) || value === '' || value === null || value === undefined) {
            console.warn(`Invalid value for field "${key}":`, value); // Optional: Debugging log
            return false; // Return false if any field is invalid
        }
    }
    return true; // All fields are valid
};