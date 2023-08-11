'use client'


import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';





export default withPageAuthRequired(function ProfileApi() {
  const [user, setUser] = useState();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const res = await fetch(`${window.location.origin}/api/page-router-profile`);
      setUser(await res.json());
    })();
  }, []);

    const [submitting, setIsSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt:'',
        tag:''
    })

  return (
    <>
      <h1>Booking</h1>
      <pre data-testid="profile-api">{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}
);