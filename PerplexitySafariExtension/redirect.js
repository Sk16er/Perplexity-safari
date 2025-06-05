// Runs on Google search result pages and redirects to Perplexity.ai
if (
  window.location.hostname === "www.google.com" &&
  window.location.pathname === "/search"
) {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");
  if (query) {
    window.location.replace(
      `https://www.perplexity.ai/search?q=${encodeURIComponent(query)}&copilot=false&s=d`
    );
  }
}