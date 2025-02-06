import { createClient } from "@supabase/supabase-js";

// Ensure environment variables are defined or throw an error
const supabaseUrl =
    process.env.SUPABASE_URL ||
    (() => {
        throw new Error("SUPABASE_URL is not defined");
    })();
const supabaseAnonKey =
    process.env.SUPABASE_ANON_KEY ||
    (() => {
        throw new Error("SUPABASE_ANON_KEY is not defined");
    })();

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
