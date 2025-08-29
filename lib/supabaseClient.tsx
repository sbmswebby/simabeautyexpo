// lib/supabase.client.ts
import { createClient } from "@supabase/supabase-js"

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables. Check .env.local")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
