/**
 * ⚠️ IMPORTANT: This Supabase Edge Function is DISABLED ⚠️
 * 
 * The insurance onboarding app operates 100% client-side with no server dependencies.
 * All document processing, natural language parsing, and data handling happens in the browser.
 * 
 * This file exists only to prevent build errors. The 403 deployment error can be safely ignored
 * as the app does not use or require any Supabase edge functions to operate.
 * 
 * Key Features Working Client-Side:
 * - Document upload and preview
 * - Natural language input parsing (regex-based)
 * - All form validation and data processing
 * - No API calls or server requests needed
 */

// Minimal export to satisfy TypeScript
export default function() {
  return new Response(
    JSON.stringify({ message: 'Edge function disabled - app uses client-side processing' }),
    { status: 410, headers: { 'Content-Type': 'application/json' } }
  );
}
