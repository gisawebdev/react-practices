import { Session } from '@supabase/supabase-js';
import { Stack, Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import Account from '~/components/Account';
import Auth from '~/components/Auth';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import { supabase } from '~/lib/supabase';

export default function Home() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: 'Home',headerShown: false }} />


        {session && session.user ? <Account session={session} key={session.user.id} /> : <Auth />}

    </>
  );
}
