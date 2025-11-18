// Supabase Configuration Example
// Copy this file to config.js and fill in your actual values
// config.js is gitignored and should never be committed

const SUPABASE_CONFIG = {
    url: 'https://your-project-id.supabase.co',
    anonKey: 'your-anon-key-here'
}

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey)
