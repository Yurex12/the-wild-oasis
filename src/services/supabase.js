import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://hsvznqtwakumjebdoixt.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzdnpucXR3YWt1bWplYmRvaXh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM0MDEwMjgsImV4cCI6MjAxODk3NzAyOH0.P77A8-Ql94FN_s2pSrWdW1QpjmNUS7anfAz7QB62d1U';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
