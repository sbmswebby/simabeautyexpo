import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;


const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;



// Client for browser/frontend use
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Service client for server-side operations (bypasses RLS)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})
