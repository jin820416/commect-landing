// Supabase Configuration
// For local development, the fallback values will be used
// For Vercel deployment, these will be replaced by the build script

const SUPABASE_CONFIG = {
    url: 'https://ebryydminuwimkffautk.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVicnl5ZG1pbnV3aW1rZmZhdXRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzNjM0NDcsImV4cCI6MjA3MTkzOTQ0N30.CZxVfX5WtxP5UnJuHTMfcWW9FgGcEitch-QZl5gGyOw'
}

// Initialize Supabase client - ensure the library is loaded
let supabase = null

if (window.supabase && window.supabase.createClient) {
    supabase = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey)
} else {
    console.error('Supabase library not loaded')
}
