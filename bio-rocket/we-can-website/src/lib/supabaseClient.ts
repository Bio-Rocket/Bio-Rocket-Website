import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public';

const supabaseUrl = env.PUBLIC_SUPABASE_URL;
const supabasePublishableKey = env.PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabasePublishableKey) {
	throw new Error('Supabase env vars are missing');
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
