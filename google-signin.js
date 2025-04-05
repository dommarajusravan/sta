window.onload = function () {
    // Initialize Google Sign-In with the client ID
    google.accounts.id.initialize({
        client_id: "246381954934-svb27n9f0ot3i6gren7hacudcu05df64.apps.googleusercontent.com", // Replace with your Google Client ID
        callback: handleCredentialResponse,
    });

    // Automatically trigger the Google Sign-In prompt when the page loads
    google.accounts.id.prompt();
};

// Callback function when user signs in with Google
function handleCredentialResponse(response) {
    // Decode the Google token response (JWT)
    const userObject = jwt_decode(response.credential); // jwt_decode is used to decode the token
    
    console.log(userObject); // Log user information

    // Store user details in Supabase or handle as needed
    storeUserDetails(userObject);
}

// Function to store user details in Supabase (example)
function storeUserDetails(userObject) {
    // Example of how you might store user details in Supabase

    const { email, name, sub: googleId } = userObject;

    const supabaseUrl = 'https://ssopjsbthsfxxjzeskge.supabase.co'; // Your Supabase URL
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzb3Bqc2J0aHNmeHhqemVza2dlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4ODM4NzcsImV4cCI6MjA1OTQ1OTg3N30.WyQQflgPKuBpNo2OhowfL8Clv8Vy47n-o_JuKypGCrA'; // Your public API key

    const supabase = supabase.createClient(supabaseUrl, supabaseKey);

    // Example code to interact with Supabase (ensure you have the Supabase client initialized)
    supabase.auth.signUp({
        email: email,
        password: "secureRandomPassword", // Generate or use a random password
    }).then(response => {
        if (response.error) {
            console.error('Error signing up with Supabase:', response.error);
        } else {
            // If successful, store user details in the Supabase database
            const { data, error } = supabase
                .from('users') // Ensure you have a users table in Supabase
                .upsert([
                    {
                        email: email,
                        name: name,
                        google_id: googleId,
                    }
                ]);

            if (error) {
                console.error('Error storing user details:', error);
            } else {
                console.log('User details stored successfully:', data);
            }
        }
    });
}