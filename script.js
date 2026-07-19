:root {
  --color-bg: #f7f5f2;
  --color-surface: #ffffff;
  --color-text: #2b2b2b;
  --color-muted: #6b6b6b;
  --color-accent: #3a5a40;
  --color-accent-light: #a3b18a;
  --color-error: #b3261e;
  --color-border: #e3e0da;
  --radius: 10px;
  --shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Georgia', 'Times New Roman', serif;
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.5;
}

header {
  text-align: center;
  padding: 2.5rem 1rem 1.5rem;
}

header h1 {
  margin: 0;
  font-size: 2.5rem;
  letter-spacing: 0.15em;
  color: var(--color-accent);
}

header p {
  margin: 0.4rem 0 0;
  color: var(--color-muted);
  font-style: italic;
}

main {
  max-width: 640px;
  margin: 0 auto;
  padding: 0 1.25rem 3rem;
}

/* Search form */
#Search-form {
  display: flex;
  margin-bottom: 1rem;
}

#word-input {
  flex: 1;
  padding: 0.85rem 1rem;
  font-size: 1rem;
  border: 2px solid var(--color-border);
  border-radius: var(--radius);
  outline: none;
  font-family: inherit;
  background: var(--color-surface);
}

#word-input:focus {
  border-color: var(--color-accent-light);
}

/* Error / status message */
#error-message {
  color: var(--color-error);
  font-weight: bold;
  margin: 0.5rem 0 1rem;
}

.hidden {
  display: none !important;
}

/* Results */
#results {
  background: var(--color-surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.word-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
}

#word-title {
  margin: 0;
  font-size: 1.8rem;
  color: var(--color-accent);
  text-transform: capitalize;
}

#phonetic {
  color: var(--color-muted);
  font-style: italic;
  margin: 0.25rem 0 1rem;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-family: inherit;
  transition: background-color 0.15s ease, transform 0.1s ease;
}

button:active {
  transform: scale(0.97);
}

#play-audio {
  background-color: var(--color-accent-light);
  color: #1f2a17;
}

#play-audio:hover {
  background-color: #93a67d;
}

#save-word {
  background-color: var(--color-accent);
  color: #fff;
}

#save-word:hover {
  background-color: #2e4732;
}

#save-word.is-saved {
  background-color: var(--color-muted);
}

.meaning-block {
  margin-top: 1.25rem;
}

.meaning-block h3 {
  margin: 0 0 0.5rem;
  color: var(--color-accent);
  font-variant: small-caps;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.25rem;
}

.meaning-block ol {
  margin: 0;
  padding-left: 1.25rem;
}

.meaning-block li {
  margin-bottom: 0.75rem;
}

.meaning-block .example {
  color: var(--color-muted);
  font-style: italic;
  margin: 0.25rem 0 0;
}

/* Saved words */
#saved-section {
  background: var(--color-surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 1.5rem;
}

#saved-section h3 {
  margin-top: 0;
  color: var(--color-accent);
}

#saved-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

#saved-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--color-border);
}

#saved-list li:last-child {
  border-bottom: none;
}

.saved-word-text {
  cursor: pointer;
  text-transform: capitalize;
  color: var(--color-text);
}

.saved-word-text:hover {
  color: var(--color-accent);
  text-decoration: underline;
}

.remove-btn {
  background-color: transparent;
  color: var(--color-error);
  border: 1px solid var(--color-error);
  padding: 0.3rem 0.7rem;
  font-size: 0.8rem;
}

.remove-btn:hover {
  background-color: var(--color-error);
  color: #fff;
}

.empty-message {
  color: var(--color-muted);
  font-style: italic;
  border-bottom: none !important;
}
