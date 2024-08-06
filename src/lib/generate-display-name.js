/**
 * 
 * The function replaces underscores and hyphens with spaces,
 * capitalizes the first letter of each word, and returns the formatted string.
 * If the input is not a string, it returns an empty string.
 * 
 * @param {string} fileName 
 * @returns {string}
 */
export function generateDisplayName(fileName) {

    if (typeof fileName !== 'string') {
        console.warn('Expected a string as input, but received:', fileName);
        return '';
    }
    // Split the string by underscores and hyphens
    const words = fileName.split(/[_-]/);

    const displayName = words.map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

    return displayName;
}