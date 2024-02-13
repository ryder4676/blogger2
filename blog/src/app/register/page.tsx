// Import necessary components and styles
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

// Define the type for the state variable
type ErrorMessage = string | null;

// Async function to handle registration form submission
async function handleRegistration(
  event: React.FormEvent<HTMLFormElement>,
  router: ReturnType<typeof useRouter>,
  setErrorMessage: React.Dispatch<React.SetStateAction<ErrorMessage>>
) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Registration successful. User details:", data.user);
      router.push("/seller-profile");
    } else {
      const error = await response.json();
      console.error("Registration failed:", error);
      setErrorMessage(
        error.message || "Registration failed. Please try again."
      );
    }
  } catch (error) {
    console.error("Error during registration:", error);
    setErrorMessage("Registration failed. Please try again.");
  }
}

// React component for the registration page
export default function Register() {
  const router = useRouter();

  // State to manage error messages
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(null);

  return (
    <>
      {/* Header component */}
      <Header />
      <main className="bg-gray-100 p-8">
        {/* Container for the login form and error message */}
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
          {/* Login form */}
          <form
            onSubmit={(e) => handleRegistration(e, router, setErrorMessage)}
          >
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
              Register
            </button>
            <div className="mt-4 text-center text-gray-600">- OR -</div>
            <div className="text-center">
              <Link href="/login" className="text-blue-500">
                Existing account? Login Here
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
}
