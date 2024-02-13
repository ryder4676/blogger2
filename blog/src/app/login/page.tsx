"use client";

import React, { useState } from "react";
import Footer from "../../components/footer";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GithubSignInButton, GoogleSignInButton } from "src/components/authButtons";

async function handleLogin(
  event: React.FormEvent<HTMLFormElement>,
  router: ReturnType<typeof useRouter>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>
) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    console.log("Response:", response);
    if (response.ok) {
      const data = await response.json();
      console.log("Login successful. User details:", data.user);

      // Redirect to the user's dashboard or another page on success
      router.push("/seller-profile");
    } else {
      const error = await response.json();
      console.error("Login failed:", error);
      setErrorMessage(error.message || "Invalid email or password");
    }
  } catch (error) {
    console.error("Error during login:", error);
    setErrorMessage("Login failed. Please try again.");
  }
}

const Login: React.FC = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  return (
    <>
      {/* Header component */}

      <main className="bg-gray-100 p-28">
        {/* Container for the login form and error message */}
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
          {/* Login form */}
          <form onSubmit={(e) => handleLogin(e, router, setErrorMessage)}>
            <label className="block mb-4">
              Email
              <input
                name="email"
                className="border rounded-md p-2 w-full"
                type="email"
              />
            </label>
            <label className="block mb-4">
              Password
              <input
                name="password"
                className="border rounded-md p-2 w-full"
                type="password"
              />
            </label>
            {/* Button to submit the login form */}
            <button
              className="bg-blue-500 text-white rounded-md p-2 w-full"
              type="submit"
            >
              Login
            </button>

            <GoogleSignInButton />
            <GithubSignInButton />
            <div className="mt-4 text-center text-gray-600">- OR -</div>
            <div className="text-center">
              <Link href="/register" className="text-blue-500">
                New Account? Register Here
              </Link>
            </div>
          </form>

          {/* Display error message if there is one */}
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>
      </main>
      {/* Footer component */}
      <Footer />
    </>
  );
};

export default Login;
