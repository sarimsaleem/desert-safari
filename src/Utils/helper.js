export function convertToSlug(text) {
    return text ? text
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters (except spaces and hyphens)
      .trim() // Trim whitespace from both ends of the string
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') : null; // Remove any duplicate hyphens
  }
  