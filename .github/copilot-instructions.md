## Copilot Rules — Read Before Every Edit

This project is a conversational onboarding flow for insurance.
The developer is non-technical. Follow these rules strictly.

NEVER do these without being explicitly asked:
- Rename any function, variable, or component
- Remove any existing logic
- Add new libraries or dependencies
- Refactor or "clean up" working code
- Change anything in supabase/ without clear instruction
- Override default_shadcn_theme.css styles
- Modify the OTP login flow
- Modify the language selection flow
- Modify the age and gender step logic
- Modify the goal selection step logic

ALWAYS do these on every edit:
- Make the smallest possible change to achieve the goal
- Explain what you changed in plain English
- Explain what you deliberately did NOT touch
- Ask before assuming anything unclear

Core features that must always keep working:
- Mobile OTP login
- Language selection
- End-to-end onboarding flow