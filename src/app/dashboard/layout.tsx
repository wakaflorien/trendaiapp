"use client";
import Navbar from "@/components/Nav";
import React, { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [profile, setprofile] = React.useState({ name: "", type: "" });

  useEffect(() => {
    const token: any = localStorage.getItem("jwt_token");
    fetchData(token);
  }, []);

  const fetchData = async (token: string) => {
    const profile_api = `http://localhost:3000/auth/profile`;
    const response = await fetch(profile_api, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      setprofile({ ...profile, name: data.name, type: data.type });
    }
  };

  return (
    <div className="flex flex-col min-h-screen h-screen w-full">
      <Navbar isDashboard={true} names={profile.name} type={profile.type} />
      <main className="flex flex-col gap-8  items-center ">{children}</main>
    </div>
  );
}
