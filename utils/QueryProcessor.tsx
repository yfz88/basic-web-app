export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "yfz";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "feliciaz";
  }

  if (query.toLowerCase().includes("numbers") && query.toLowerCase().includes("largest")) {
    // Extract numbers from the query
    const matches = query.match(/\d+/g);
    const numbers = matches ? matches.map(Number) : [];

    // Return the largest number or a default message if no numbers are found
    return numbers.length > 0 ? Math.max(...numbers).toString() : "No numbers found";
  }

  return "";
}
