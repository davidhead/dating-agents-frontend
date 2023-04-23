import axios from "axios";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const {
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
    } = req.body;

    const form_data = {
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
      console.log("Sent API request:", form_data);
      const postForm = await axios.post(
        "http://127.0.0.1:5000/submit",
        form_data
      );
      console.log("post succeeded: ", postForm);
      const response = await axios.get("http://127.0.0.1:5000/simulate-dates", {
        params: {
          protagonist_name: form_data.name,
        },
      });
      console.log("Response succeeded: ", response.data);
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error processing request" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

axios.get("http://example.com/your_endpoint", {
  params: {
    X: 3,
  },
});
