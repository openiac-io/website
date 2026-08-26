'use server';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Initialize Supabase client with the service role key for admin privileges
const supabase = supabaseUrl && supabaseServiceRoleKey 
  ? createClient(supabaseUrl, supabaseServiceRoleKey)
  : null;

export async function joinWaitlist(email: string, planName: string, company?: string, interest?: string) {
  if (!supabase) {
    console.error('Supabase client is not initialized. Please check your environment variables.');
    return { success: false, error: '서버 설정 오류가 발생했습니다.' };
  }

  try {
    const { error } = await supabase
      .from('waitlists')
      .insert([
        { email, plan_name: planName, company, interest }
      ]);

    if (error) {
      // Check for unique constraint violation on email
      if (error.code === '23505') {
        return { success: false, error: '이미 등록된 이메일입니다.' };
      }
      console.error('Supabase insert error:', error);
      return { success: false, error: '데이터를 저장하는 중 오류가 발생했습니다.' };
    }

    return { success: true };
  } catch (err) {
    console.error('Unexpected error during waitlist submission:', err);
    return { success: false, error: '예기치 않은 오류가 발생했습니다.' };
  }
}
