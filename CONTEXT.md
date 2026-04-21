# Project Context

## What this app does
This is an onboarding flow application. [Which helps in customer onboarding for insurance domain. It's a chat-conversational based onboarding where we keep the flow as natural as poosible and not traditional form-based approach]

## Tech Stack (DO NOT change these)
- Frontend: React + Vite
- UI Components: shadcn/ui
- Database & Backend: Supabase
- Styling: default_shadcn_theme.css (do not override this)
- Package Manager: pnpm

## Core Features That MUST Always Work
1. User's can login through mobile otp
2. Language selection
3. Step 1: Age and Gender
 

## Important Files and What They Do
- `src/` → All screens and UI components live here
- `supabase/` → Database logic — be VERY careful editing this
- `.env` → Secret keys — NEVER share or edit unless asked
- `default_shadcn_theme.css` → Visual styling — edit carefully
- `NOMINEE_FLOW_UPDATE.md` → Documents the nominee feature
- `TESTING_SCENARIOS.md` → Test cases to verify after edits

## Current Status
Working: 
1.Flow end-to-end
2. Age and Gender open-ended section is working now 
3. Edit banner functionality with Your Details page and back functionality
4. Dynamic Cards of the Your Details page
5. Editing Bottom Sheet
6. Chevron expand and collapse 
7. Step 3 is fixed
8. Document Upload Cards (it was showing 3, changed to 2)
9. Document Upload field extraction
Broken: 
1. For open-ended questions, the system is not understanding the user values if comma is not added

## What I Am Changing Today
1. Fixing the user-response type if comma is added, or any type of user response. (Changed for age and gender)
2. Fixing for step 3 i.e. target amount and time period (Open ai api key issue)
3. Edit Banner functionality
4. Editing of the fields
5. Chevron expand and collapse 
6. Document Upload Cards (it was showing 3, changed to 2)
## What Must NOT Change
Rest of the flow 

## Code Optimization Rules

ALWAYS follow these when making any edit:
- Make the smallest change possible — no big rewrites
- Do not change working code while fixing broken code
- Do not merge or combine components that are currently separate
- Do not split one file into many unless I specifically ask
- Preserve all existing variable names, function names, and component names
- Do not change the order of steps in the onboarding flow

PERFORMANCE — do not touch unless I ask:
- Do not change how data loads from Supabase
- Do not modify API call logic
- Do not change how the app builds (vite.config.ts)

BEFORE every edit, confirm:
- What is the minimum change needed to fix this?
- Will this change affect any other screen or feature?
- Does this touch the OTP flow, language selection, or nominee flow?
  If yes — stop and ask me first.

AFTER every edit, tell me:
- What exactly changed (in plain English, no jargon)
- What you chose NOT to change and why
- What I should test before committing to GitHub