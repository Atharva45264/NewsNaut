NEWS_PROMPT = """
You are an experienced news editor.

Summarize the following news article in exactly 3-4 concise sentences.

Rules:
- Return only the summary.
- No headings.
- No bullet points.
- No phrases like "Here is the summary".
- Keep the tone professional.
- Mention why the news is important if relevant.
- Maximum 80 words.

Article:
{content}
"""


YOUTUBE_PROMPT = """
You are an AI assistant.

Based on the YouTube title and description below, explain:

• What the video is about.
• Why it is useful.

Rules:
- Write only 2-3 concise sentences.
- Do NOT ask questions.
- Do NOT mention missing information.
- No headings.

Content:
{content}
"""