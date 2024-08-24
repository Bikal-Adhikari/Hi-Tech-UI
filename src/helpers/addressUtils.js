/**
 * Parses a single address string into its components (street, city, state, country, zip).
 * @param {string} address - The full address string to parse, formatted as "Street, City, State, Country, Zip".
 * @returns {Object} An object containing the parsed address components.
 */
export function parseAddress(address) {
  // Split the address string by commas to separate each part (e.g., street, city, state, etc.)
  // Use .map() to remove any extra spaces around each part
  const parts = address.split(",").map((part) => part.trim());

  // Create an object to store the parsed address components
  const addressComponents = {
    street: "", // e.g., "38, Cowper Street"
    city: "", // e.g., "Granville"
    state: "", // e.g., "Parramatta"
    country: "", // e.g., "New South Wales"
    zip: "", // e.g., "2142" (if included)
  };

  // Check the number of parts in the address to determine the format
  if (parts.length === 5) {
    // Format without ZIP code
    addressComponents.street = `${parts[0]}, ${parts[1]}`; // Combine the first two parts for the street
    addressComponents.city = `${parts[2]}, ${parts[3]}`; // Third part is the city
    addressComponents.state = parts[4]; // Fourth part is the state
    addressComponents.country = parts[5]; // Fifth part is the country
  } else if (parts.length === 6) {
    // Format with ZIP code
    addressComponents.street = `${parts[0]}, ${parts[1]}`; // Combine the first two parts for the street
    addressComponents.city = `${parts[2]}, ${parts[3]}`; // Third part is the city
    addressComponents.state = parts[4]; // Fourth part is the state
    addressComponents.country = parts[5]; // Fifth part is the country
    addressComponents.zip = parts[6]; // Sixth part is the ZIP code
  } else {
    // If the address format doesn't match the expected patterns, log a warning
    console.warn("Unexpected address format:", parts);
  }

  // Return the object with the parsed address components
  return addressComponents;
}
