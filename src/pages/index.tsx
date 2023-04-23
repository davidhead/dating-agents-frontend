import Image from "next/image";
import { Inter } from "next/font/google";
import TextInput from "../components/TextInput";
import { useState } from "react";
import InlineRadios from "../components/GenderOptions";
import TextInputLarge from "../components/TextInputLarge";
import Checkboxes from "../components/Checkboxes";
import Button from "../components/Button";
import LoadingBar from "../components/LoadingBar";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [name, setName] = useState("Alice");
  const [age, setAge] = useState();
  const [lowAgePref, setLowAgePref] = useState();
  const [highAgePref, setHighAgePref] = useState();
  const [gender, setGender] = useState("");
  const [genderPref, setGenderPref] = useState("");
  const [location, setLocation] = useState("");
  const [typePref, setTypePref] = useState("");
  const [loveLanguagePref, setLoveLanguagePref] = useState("");
  const [dealbreakerPref, setDealbreakerPref] = useState("");
  const [dreamDate, setDreamDate] = useState("");
  const [superhero, setSuperhero] = useState("");
  const [desertItems, setDesertItems] = useState("");
  const [karaokeSongs, setKaraokeSongs] = useState("");
  const [fictionalDinner, setFictionalDinner] = useState("");
  const [eraPref, setEraPref] = useState("");
  const [adventurous, setAdventurous] = useState("");
  const [animal, setAnimal] = useState("");
  const [guiltyPleasure, setGuiltyPleasure] = useState("");
  const [rainyDay, setRainyDay] = useState("");
  const [food, setFood] = useState("");

  const [findingLove, setFindingLove] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("submitted");

    setFindingLove(true);

    const data = {
      name,
      age,
      lowAgePref,
      highAgePref,
      gender,
      genderPref,
      location,
      typePref,
      loveLanguagePref,
      dealbreakerPref,
      dreamDate,
      superhero,
      desertItems,
      karaokeSongs,
      fictionalDinner,
      eraPref,
      adventurous,
      animal,
      guiltyPleasure,
      rainyDay,
      food,
    };

    try {
      const response = await axios.post("/api/FindTheOne", data);
      const results = response.data;
      console.log(results);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setFindingLove(false);
      }, 45000);
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1>Love AIsland</h1>
        <h2>Find The One, Autonomously</h2>
        <h3 className="mt-10">First, Input your Preferences</h3>
        <div className="fixed bottom-0 left-0 h-48 w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          {findingLove === true ? (
            <LoadingBar duration_seconds={45} message="Finding The One" />
          ) : (
            <form
              className="grid grid-flow-row rounded-md"
              method="post"
              onSubmit={onSubmit}
            >
              <TextInput
                label="What is your name?"
                name="name"
                id="name"
                value="Alice"
                // onInputChange={setName}
              />
              <TextInput
                label="Age"
                name="age"
                id="age"
                value={age}
                onInputChange={setAge}
              />
              <div className="flex">
                <TextInput
                  label="Min Age"
                  name="lowAgePref"
                  id="lowAgePref"
                  className="mr-2"
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
              </div>
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
              <Checkboxes
                label="Gender Preferences"
                id="gender_preferences"
                value={genderPref}
                onInputChange={setGenderPref}
              />
              <TextInput
                label="Location"
                name="location"
                id="location"
                value={location}
                onInputChange={setLocation}
              />
              <TextInputLarge
                label="What type of relationship are you looking for?"
                name="highAgePref"
                id="highAgePref"
                value={typePref}
                onInputChange={setTypePref}
                helperText="Casual, long-term, etc."
              />
              <TextInputLarge
                label="What is your love language?"
                name="loveLanguage"
                id="loveLanguage"
                value={loveLanguagePref}
                onInputChange={setLoveLanguagePref}
                helperText="Words of affirmation, acts of service, receiving gifts, quality time, physical touch)"
              />
              <TextInputLarge
                label="Do you have any dealbreakers or non-negotiables in a relationship?"
                name="loveLanguage"
                id="loveLanguage"
                value={dealbreakerPref}
                onInputChange={setDealbreakerPref}
              />
              <TextInputLarge
                label="What's your idea of a dream date? 🌅"
                name="loveLanguage"
                id="loveLanguage"
                value={dreamDate}
                onInputChange={setDreamDate}
              />
              <TextInput
                label="If you were a superhero, what would your superpower be? 💥"
                name="loveLanguage"
                id="loveLanguage"
                value={superhero}
                onInputChange={setSuperhero}
              />
              <TextInputLarge
                label="You're stranded on a desert island. Which three items would you take with you? 🏝️"
                name="loveLanguage"
                id="loveLanguage"
                value={desertItems}
                onInputChange={setDesertItems}
              />
              <TextInput
                label="What's your go-to karaoke song? 🎤"
                name="loveLanguage"
                id="loveLanguage"
                value={karaokeSongs}
                onInputChange={setKaraokeSongs}
              />
              <TextInput
                label="Which fictional character would you like to have dinner with? 🍽️"
                name="loveLanguage"
                id="loveLanguage"
                value={fictionalDinner}
                onInputChange={setFictionalDinner}
              />
              <TextInput
                label="If you could travel back in time, which era would you visit? ⌛"
                name="loveLanguage"
                id="loveLanguage"
                value={eraPref}
                onInputChange={setEraPref}
              />
              <TextInput
                label="What's the most adventurous thing you've ever done? 🏄‍♂️"
                name="loveLanguage"
                id="loveLanguage"
                value={adventurous}
                onInputChange={setAdventurous}
              />
              <TextInput
                label="If you could be any animal, what would you choose and why? 🦁"
                name="loveLanguage"
                id="loveLanguage"
                value={animal}
                onInputChange={setAnimal}
              />
              <TextInput
                label="What's your guilty pleasure TV show? 📺"
                name="loveLanguage"
                id="loveLanguage"
                value={guiltyPleasure}
                onInputChange={setGuiltyPleasure}
              />
              <TextInput
                label="What's your favorite way to spend a rainy day? 🌧️"
                name="loveLanguage"
                id="loveLanguage"
                value={rainyDay}
                onInputChange={setRainyDay}
              />
              <TextInput
                label="What's the most unusual food you've ever tried? 🍱"
                name="loveLanguage"
                id="loveLanguage"
                value={food}
                onInputChange={setFood}
              />
              <Button type="submit" label="Find ❤️ The One" />
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
