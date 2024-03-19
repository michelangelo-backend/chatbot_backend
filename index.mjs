import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI();

const askChatGpt = async (req, res) => {
  try {
    console.log(req.body); // Log request body
    console.log(typeof(req.body));
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: req.body.userInput }],
      model: "gpt-3.5-turbo",
      max_tokens: 500,
    });

    console.log(completion.choices[0]);
    const repliedMessage = completion.choices[0]?.message?.content || completion.choices[0]?.message;
    res.json({ from: "chatGpt", data: repliedMessage });
  } catch (error) {
    console.log("Error ", error);
    res.status(500).json({ error: "An error occurred while processing your request" });
  }
};

const app = express();
app.use(express.json()); // Middleware for parsing JSON request bodies
app.use(cors());

app.post("/chatbot", askChatGpt);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});