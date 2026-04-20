# Nominee Flow - Testing Scenarios

## Scenario 1: Select Father as Nominee (Father Alive)

**Steps:**
1. Complete onboarding through Mother's details (Step 20)
2. Ensure Father's vital status = "Alive" (from Step 18/24)
3. Bot asks: "Who would you like to add as your nominee?"
4. Click **Father** badge button
5. User message shows "Father"
6. Bot asks: "Great! Please provide your father's share percentage, date of birth (DD/MM/YYYY), and contact number."
7. User types: "100%, 15/03/1965, 9876543210"
8. System should:
   - Parse percentage, DOB, contact using Edge Function step 27
   - Create nominee with:
     - fullName: From `userData.fatherFullName`
     - dateOfBirth: "15/03/1965"
     - relationship: "Father"
     - percentage: 100
     - contactNumber: "9876543210"
   - Move to Step 23 (Height/Weight) if percentage = 100%

**Expected Result:** Nominee successfully added with father's details

---

## Scenario 2: Select Mother as Nominee (Mother Alive)

**Steps:**
1. Complete onboarding through Mother's details (Step 20)
2. Ensure Mother's vital status = "Alive"
3. Bot asks: "Who would you like to add as your nominee?"
4. Click **Mother** badge button
5. User message shows "Mother"
6. Bot asks: "Great! Please provide your mother's share percentage, date of birth (DD/MM/YYYY), and contact number."
7. User types: "50%, 20/08/1970, 9876543210"
8. System should:
   - Create nominee with mother's name from `userData.motherFullName`
   - Percentage: 50%
   - Ask if user wants to add another nominee (Step 28.5)

**Expected Result:** Partial nominee added, prompted for another nominee

---

## Scenario 3: Select Other as Nominee

**Steps:**
1. Complete onboarding through Mother's details
2. Bot asks: "Who would you like to add as your nominee?"
3. Click **Other** badge button
4. Bot asks: "Great! Share your nominee's basic details: their full name & date of birth (DD/MM/YYYY), relationship with you, percentage & contact number."
5. User types: "Priya Sharma, 20/08/1992, Spouse, 100%, 9876543210"
6. System should parse using step 26 parser (updated to include contact number)
7. Nominee added with all provided details

**Expected Result:** Custom nominee successfully added

---

## Scenario 4: Father Deceased - Should Not Appear in Options

**Steps:**
1. At Step 18/24 (Father Details), indicate father is deceased
2. Provide cause of death in Step 25
3. Complete Mother's details (Step 20)
4. Bot asks: "Who would you like to add as your nominee?"
5. Badge options should show: **[Mother] [Other]** only
6. **Father** button should NOT appear

**Expected Result:** Only Mother and Other options visible

---

## Scenario 5: Mother Deceased - Should Not Appear in Options

**Steps:**
1. Complete Father details (alive) at Step 18/24
2. At Step 20/26 (Mother Details), indicate mother is deceased
3. Provide cause of death in Step 27
4. Bot asks: "Who would you like to add as your nominee?"
5. Badge options should show: **[Father] [Other]** only
6. **Mother** button should NOT appear

**Expected Result:** Only Father and Other options visible

---

## Scenario 6: Both Parents Deceased - Only Other Option

**Steps:**
1. Indicate Father is deceased in Step 18/24
2. Indicate Mother is deceased in Step 20/26
3. Bot asks: "Who would you like to add as your nominee?"
4. Badge options should show: **[Other]** only
5. Click Other and provide custom nominee details

**Expected Result:** Only Other option available, custom nominee flow works

---

## Scenario 7: Multiple Nominees with Father + Other

**Steps:**
1. Select **Father** as first nominee with 50%
2. Bot asks: "You've allocated 50% so far. Would you like to add another nominee for the remaining 50%?"
3. User says "Yes"
4. Bot asks: "Who would you like to add as your nominee?"
5. Badge options show again: **[Father] [Mother] [Other]**
6. Click **Other**
7. Provide custom nominee with 50%
8. Total = 100%, proceed to next step

**Expected Result:** Two nominees added successfully (Father 50%, Other 50%)

---

## Edge Cases to Test

### Invalid Input Formats
- Test: "100, 15/03/1965, 9876543210" (missing %)
- Test: "100%, 15-03-1965, 9876543210" (wrong date format)
- Test: "100%, 15/03/1965, invalid" (invalid phone)
- **Expected:** Bot asks to retry with correct format

### Percentage Edge Cases
- Test: "150%, 15/03/1965, 9876543210" (over 100%)
- Test: "0%, 15/03/1965, 9876543210" (zero percent)
- **Expected:** Should handle gracefully or reject

### Natural Language Variations (Father/Mother)
- Test: "100 percent, 15th March 1965, 9876543210"
- Test: "Full share, DOB: 15/03/1965, Phone: +91-9876543210"
- **Expected:** Edge Function should parse correctly

### Natural Language Variations (Other)
- Test: "Priya Sharma, born 20/08/1992, Spouse, 100%, phone 9876543210"
- Test: "Name: Rahul Kumar, DOB: 15/05/1988, Relationship: Brother, Share: 50%, Contact: +91-9876543210"
- **Expected:** Edge Function should parse correctly

---

## Regression Testing

Verify these existing flows still work:
- [ ] Full onboarding flow from start to Step 33 (SCR)
- [ ] Document upload with OCR
- [ ] Premium calculator
- [ ] Payment methods
- [ ] Declaration and OTP verification
- [ ] Debug panel navigation
- [ ] Edit functionality for all sections

---

## Notes for QA

1. **Edge Function Dependency**: Step 27 parser must be implemented in the Edge Function before testing Scenarios 1-2
2. **Data Persistence**: Verify `userData.nomineeType` is saved correctly
3. **UI Responsiveness**: Ensure badge buttons animate smoothly
4. **Voice Input**: Test if voice input works for nominee details format
5. **Mobile View**: Verify badge buttons display correctly on mobile
