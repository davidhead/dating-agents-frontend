import Image from "next/image";
import { Inter } from "next/font/google";
import TextInput from "../components/TextInput";
import { useState } from "react";
import InlineRadios from "../components/InlineRadios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [lowAgePref, setLowAgePref] = useState();
  const [highAgePref, setHighAgePref] = useState();
  const [gender, setGender] = useState(""); // string
  const [genderPref, setGenderPref] = useState(""); // array of strings
  const [location, setLocation] = useState(""); // string
  const [typePref, setTypePref] = useState(""); // string
  const [loveLanguagePref, setLoveLanguagePref] = useState(""); // string
  const [dealbreakerPref, setDealbreakerPref] = useState(""); // string

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1>Dating App</h1>
        <h2>First Input your Preferences</h2>
        <div className="fixed bottom-0 left-0 h-48 w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <TextInput
            label="What is your name?"
            name="name"
            id="name"
            value={name}
            onInputChange={setName}
          />
          <TextInput
            label="Age"
            name="age"
            id="age"
            value={age}
            onInputChange={setAge}
          />
          <TextInput
            label="Min Age"
            name="lowAgePref"
            id="lowAgePref"
            value={lowAgePref}
            onInputChange={setLowAgePref}
          />
          <TextInput
            label="Max Age"
            name="highAgePref"
            id="highAgePref"
            value={highAgePref}
            onInputChange={setHighAgePref}
          />
          <InlineRadios
            label="Your Gender"
            id="your_gender"
            value={gender}
            onInputChange={setGender}
          />
          <InlineRadios
            label="Gender Preferences"
            id="gender_preferences"
            value={genderPref}
            onInputChange={setGenderPref}
          />
          {/* <InlineRadios
            label="Location"
            name="first_name"
            id="first_name"
            value={firstName}
            onInputChange={setFirstName}
          /> */}
        </div>
      </div>
    </main>
  );
}
