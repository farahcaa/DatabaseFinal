import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("https://example.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      const data = await response.json();
      console.log("Login successful", data);
      // Handle successful login (e.g., redirect, store token, etc.)
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center h-screen flex-col">
        <div>
          <div className="text-2xl text-left mb-5">Login</div>

          <input
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="input input-bordered w-full max-w-xs mb-4 border border-gray-300 p-3 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="input input-bordered w-full max-w-xs mb-4 border border-gray-300 p-3 rounded-md"
          />
          <button
            className="btn btn-primary w-full max-w-xs"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
