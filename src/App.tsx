import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";

export default function App() {
  const { user, isSignedIn, isLoaded } = useUser();

  if (!isLoaded)
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3 shadow-sm">
        <h1 className="text-xl font-bold">gruppo 32</h1>
        <div className="flex items-center gap-3">
          {isSignedIn ? (
            <>
              <span className="text-sm font-medium text-gray-700">
                {user.fullName}
              </span>
              <UserButton />
            </>
          ) : (
            <SignInButton mode="modal">
              <button className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
                Accedi con Google
              </button>
            </SignInButton>
          )}
        </div>
      </header>
      <main className="pt-16 p-6">
        <p className="text-gray-600">Benvenuto in gruppo 32</p>
      </main>
    </div>
  );
}
