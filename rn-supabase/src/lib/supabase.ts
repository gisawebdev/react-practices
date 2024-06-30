import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fskpdhbnkrpyxtohmtmf.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZza3BkaGJua3JweXh0b2htdG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk3NjUwNDAsImV4cCI6MjAzNTM0MTA0MH0.lCUjBK5pdp8mqhVCHIPhUIt9TsOYaGk6J_XFh6hN9Ck"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})