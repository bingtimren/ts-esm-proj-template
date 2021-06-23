export function greeting(name: string, lang: "en" | "fr") {
  return lang === "en" ? `Hello ${name}` : `Bonjour ${name}`;
}
