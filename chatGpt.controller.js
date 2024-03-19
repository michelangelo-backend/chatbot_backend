// Connect to axios 
// import OpenAI from "openai";
// import dotenv from "dotenv";

// dotenv.config();

// const openai = new OpenAI();

// export const askChatGpt = async (req, res) => {
//   try {
//     console.log(req.body); // Log request body
//     console.log(typeof(req.body))
//     const completion = await openai.chat.completions.create({
//       messages: [{ role: "user", content: req.body.userInput }],
//       //req.body.input
//       model: "gpt-3.5-turbo",
//       max_tokens: 500,
//     });

//     console.log(completion.choices[0]);
//     const repliedMessage = completion.choices[0]?.message?.content || completion.choices[0]?.message;
//     // const repliedMessage = completion.choices[0].message.content;
//     res.json({ from: "chatGpt", data: repliedMessage });
//   } catch (error) {
//     console.log("Error ", error);
//     res.status(500).json({ error: "An error occurred while processing your request" });
//   }
// };

// {
//   "from": "chatGpt",
//   "data": "Martin Luther King Jr. Day is observed on the third Monday of January each year. In 2022, MLK Day will be celebrated on January 17th."
// }