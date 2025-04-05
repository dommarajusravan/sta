// Check if user is signed in on page load
async function checkUserStatus() {
    const user = supabase.auth.user();
    if (user) {
      // User is signed in, do nothing (or load their profile, etc.)
      console.log('User is signed in:', user);
      document.getElementById('app').innerHTML = `<p>Welcome ${user.email}</p>`;
    } else {
      // No user signed in, trigger Google sign-in
      await googleSignIn();
    }
  }

  // Google OAuth sign-in function
  async function googleSignIn() {
    try {
      const { user, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.href, // Redirect to the same page after authentication
        },
      });

      if (error) {
        console.error('Error during Google sign-in:', error.message);
        return;
      }

      console.log('Google sign-in successful:', user);
      document.getElementById('app').innerHTML = `<p>Welcome ${user.email}</p>`;

      // Store user details in Supabase (if not already present)
      await storeUserDetails(user);
    } catch (error) {
      console.error('Error during Google sign-in:', error.message);
    }
  }

  // Store user details in Supabase
  async function storeUserDetails(user) {
    try {
      // Here you can create a user record in your Supabase database if not already present
      const { data, error } = await supabase
        .from('users') // Table in your Supabase DB where user details are stored
        .upsert([
          {
            id: user.id, // The user's Supabase unique id
            email: user.email, // Email
            full_name: user.user_metadata.full_name || '', // User's full name
            avatar_url: user.user_metadata.avatar_url || '', // Avatar (if available)
          }
        ]);

      if (error) {
        console.error('Error storing user details in Supabase:', error.message);
      } else {
        console.log('User details stored in Supabase:', data);
      }
    } catch (error) {
      console.error('Error during user data storage:', error.message);
    }
  }

  // Run checkUserStatus function when page loads
  window.onload = checkUserStatus;