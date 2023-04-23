import Image from "next/image";
import { Inter } from "next/font/google";
import TextInput from "../components/TextInput";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [firstName, setFirstName] = useState("");


  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1>Dating App</h1>
        <h2>First Input your Preferences</h2>
        <div className="fixed bottom-0 left-0 h-48 w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <TextInput
            label="First Name"
            name="first_name"
            id="first_name"
            value={firstName}
            onInputChange={setFirstName}
          />
          <TextInput
            label="First Name"
            name="first_name"
            id="first_name"
            value={firstName}
            onInputChange={setFirstName}
          />
          <TextInput
            label="First Name"
            name="first_name"
            id="first_name"
            value={firstName}
            onInputChange={setFirstName}
          />
          <TextInput
            label="First Name"
            name="first_name"
            id="first_name"
            value={firstName}
            onInputChange={setFirstName}
          />
          <TextInput
            label="First Name"
            name="first_name"
            id="first_name"
            value={firstName}
            onInputChange={setFirstName}
          />
          <TextInput
            label="First Name"
            name="first_name"
            id="first_name"
            value={firstName}
            onInputChange={setFirstName}
          />
        </div>
      </div>
    </main>
  );
}
