// src/routes/projects/+page.ts
import type { PageLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load: PageLoad = async () => {
	const { data, error } = await supabase.from('projects').select('*');

	if (error) {
		console.error('Supabase error:', error);
		return { projects: [] };
	}

	console.log('hello from load');

	return { projects: data ?? [] };
};
