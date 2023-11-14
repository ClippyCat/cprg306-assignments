"use client"
import React, { useState } from 'react';
import { useUserAuth } from "./_utils/auth-context";

const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
const Week8Page = () => {
await gitHubSignIn();
 await firebaseSignOut();
 
<p>
  Welcome, {user.displayName} ({user.email})
</p>;
};

export default Week7Page;
