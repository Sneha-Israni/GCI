# Nominee Flow Update - Edge Function Requirements

## Overview
The nominee flow has been updated to allow users to select Father, Mother, or Other as their nominee. When Father or Mother is selected, the system reuses their details collected earlier and only asks for additional information (share percentage, date of birth, and contact number).

## Edge Function Update Required

The Supabase Edge Function at `make-server-b004a4f0/parse-onboarding` needs to handle a new step:

### Step 27: Parse Nominee Additional Info (for Father/Mother)

**Purpose**: When user selects Father or Mother as nominee, parse their response to extract:
- Share percentage
- Date of birth (DD/MM/YYYY format)
- Contact number

**Expected Input Format Examples**:
- "100%, 15/03/1965, 9876543210"
- "50%, 20/08/1970, +91-9876543210"
- "100 percent, 15th March 1965, 9876543210"

**Expected Output**:
```json
{
  "percentage": 100,
  "dateOfBirth": "15/03/1965",
  "contactNumber": "9876543210"
}
```

**OpenAI Prompt Suggestion**:
```
Parse the following user input to extract nominee information:
- Share percentage (as a number 0-100)
- Date of birth in DD/MM/YYYY format
- Contact number (10 digits)

User input: "{userInput}"

Return a JSON object with: percentage, dateOfBirth, contactNumber
```

### Step 26: Parse Full Nominee Details (for Other) - **UPDATED**

**Purpose**: When user selects "Other" as nominee, parse their response to extract:
- Full name
- Date of birth (DD/MM/YYYY format)
- Relationship
- Share percentage
- **Contact number (NEW)**

**Expected Input Format Examples**:
- "Priya Sharma, 20/08/1992, Spouse, 100%, 9876543210"
- "Rahul Kumar, 15/05/1988, Brother, 50%, +91-9876543210"
- "Anita Verma, 10th March 1990, Sister, 100%, 9876543210"

**Expected Output**:
```json
{
  "fullName": "Priya Sharma",
  "dateOfBirth": "20/08/1992",
  "relationship": "Spouse",
  "percentage": 100,
  "contactNumber": "9876543210"
}
```

**OpenAI Prompt Suggestion**:
```
Parse the following user input to extract nominee information:
- Full name
- Date of birth in DD/MM/YYYY format
- Relationship with the user
- Share percentage (as a number 0-100)
- Contact number (10 digits)

User input: "{userInput}"

Return a JSON object with: fullName, dateOfBirth, relationship, percentage, contactNumber
```

## Client-Side Changes Made

### 1. New Component: NomineeSelectionButtons
- Shows three badge options: Father, Mother, Other
- Automatically filters out deceased parents (doesn't show Father if fatherVitalStatus === 'Deceased')
- Located in `/src/app/App.tsx` around line 387

### 2. New Handler: handleNomineeSelect
- Processes the nominee type selection
- Routes to different sub-steps based on selection:
  - **Father/Mother** → Step 28.1 (asks for share %, DOB, contact)
  - **Other** → Step 28.2 (asks for full nominee details)

### 3. Updated Steps:
- **Step 28**: Now asks "Who would you like to add as your nominee?" instead of asking for full details directly
- **Step 28.1**: Collects additional info for Father/Mother nominee (uses parseWithOpenAI with step 27)
- **Step 28.2**: Collects full nominee details for "Other" option (uses parseWithOpenAI with step 26 - **updated to include contact number**)

### 4. Bot Message Updates:
- After Father/Mother details collection (Steps 18 & 20), the bot now asks "Who would you like to add as your nominee?"
- After Mother's cause of death (Step 27), the bot asks "Who would you like to add as your nominee?"

## Flow Diagram

```
Mother Details (Step 20/26)
    ↓
Mother Alive? 
    ↓ Yes                              ↓ No
Step 28: Who to add as nominee?    Step 27: Cause of death
    ↓                                  ↓
[Father] [Mother] [Other]          Step 28: Who to add as nominee?
    ↓         ↓        ↓
   28.1      28.1    28.2
(Share %,  (Share %,  (Full
DOB,       DOB,      details:
Contact)   Contact)  Name, DOB,
                     Relationship,
                     Percentage,
                     Contact)
```

## Testing Checklist

- [ ] Test selecting Father as nominee (alive)
- [ ] Test selecting Mother as nominee (alive)
- [ ] Test selecting Other as nominee
- [ ] Test that deceased Father doesn't show in options
- [ ] Test that deceased Mother doesn't show in options
- [ ] Test parsing various formats for share %, DOB, and contact
- [ ] Test adding multiple nominees with percentage < 100
- [ ] Verify Father's/Mother's name is correctly used from earlier steps

## Additional Notes

- **Contact number is now collected for ALL nominee types** (Father, Mother, and Other)
- Father's and Mother's names are reused from `userData.fatherFullName` and `userData.motherFullName`
- The relationship is automatically set to "Father" or "Mother" based on selection
- Example text for Father/Mother: "100%, 15/03/1965, 9876543210"
- Example text for Other: "Priya Sharma, 20/08/1992, Spouse, 100%, 9876543210"