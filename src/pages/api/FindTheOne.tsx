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

    const sampleResult = {
      result: [
        {
          conversation_id: 0,
          new_conversation: [
            {
              message: "Yo, what's up?",
              message_index: 0,
              user: "Alice",
            },
            {
              message:
                "Hi there, I'm Alice! I'm doing great today, how about you?",
              message_index: 1,
              user: "Bob",
            },
            {
              message:
                "Hey there, Alice! I'm doing fantastic today, thank you for asking. What brings you here today?",
              message_index: 2,
              user: "Alice",
            },
          ],
          potential_match_name: "Bob",
          protagonist_name: "Alice",
          score: 8.0,
        },
        {
          conversation_id: 0,
          new_conversation: [
            {
              message: "Yo, what's up?",
              message_index: 0,
              user: "Alice",
            },
            {
              message:
                "Hi there, I'm Alice! I'm doing great today, how about you?",
              message_index: 1,
              user: "Bob",
            },
            {
              message:
                "Hey there, Alice! I'm doing fantastic today, thank you for asking. What brings you here today?",
              message_index: 2,
              user: "Alice",
            },
          ],
          potential_match_name: "Bob",
          protagonist_name: "Alice",
          score: 8.0,
        },
      ],
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
