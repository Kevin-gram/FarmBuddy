# Farm Buddy

Farm Buddy is an intelligent chatbot built to assist farmers with agricultural-related questions, provide farming tips, and guide them through various farming-related activities. It is powered by the **GPT-2 Transformer model**, fine-tuned using the **Kaggle ChatData** dataset, and implemented using **FastAPI** for the backend and **React.js** for the frontend.

## Features

- **Agricultural Q&A**: Get answers to farming-related questions.
- **Farming Tips**: Receive helpful tips to optimize farming activities.
- **Simple User Interface**: A user-friendly chatbot interface designed for farmers.
- **Powered by GPT-2**: The chatbot leverages the **GPT-2 Transformer model** to generate intelligent responses.

## Dataset

The chatbot is trained on the **ChatData** dataset from Kaggle. This dataset contains a collection of conversational data which has been fine-tuned to focus on general conversational responses, specifically optimized for farming and agricultural discussions.

Dataset details:
- **Source**: [Kaggle ChatData](https://www.kaggle.com/datasets/kirtipogra/chatdata?resource=download)
- **Content**: Contains a wide variety of dialogues, with the data being formatted to train a conversational model.
- **Size**: The dataset includes thousands of conversational pairs, making it suitable for training a chatbot to respond in a variety of scenarios.

## Performance Metrics

While evaluating the performance of the model, common metrics for assessing chatbot responses are considered, such as:

- **Perplexity**: A measure of how well the model predicts the next word in a sequence. A lower perplexity indicates a better model.
- **Response Time**: The time it takes for the model to generate a response. Fast response times are ideal for real-time interaction.
- **Accuracy**: While difficult to measure precisely in conversational AI, accuracy can be inferred from how relevant and coherent the responses are to the user's input.
- **User Satisfaction**: User feedback is gathered (in future versions) to assess how well the bot serves its intended purpose.

## Tech Stack

- **Backend**: FastAPI (for handling API requests and serving the model)
- **Frontend**: React.js (for the user interface)
- **Model**: **GPT-2** Transformer model (fine-tuned on the ChatData dataset)
- **Dataset**: [Kaggle ChatData](https://www.kaggle.com/datasets/kirtipogra/chatdata?resource=download)
- **No Database**: The application uses the GPT-2 model to generate responses based on the provided dataset, without relying on a traditional database.

## How It Works

Farm Buddy uses the **GPT-2 Transformer model**, which is a deep learning model based on the Transformer architecture. The GPT-2 model has been fine-tuned using the ChatData dataset to generate contextually relevant responses based on the user's input.

- The **frontend**, built with React.js, captures user input and sends it as a request to the **FastAPI backend**.
- The backend processes the request using the **GPT-2 Transformer model** and returns an intelligent response based on the conversation.
- The model has been trained to provide informative and helpful responses for agricultural and farming-related queries.

## Installation

To run **Farm Buddy** locally, follow the steps below:

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/farm-buddy.git
cd farm-buddy
````
```
npm start
The application should now be running locally! The backend will be accessible at http://localhost:8000, and the frontend will run at http://localhost:3000.
```
### here are example questions you can ask to it 

![image](https://github.com/user-attachments/assets/aaadc5b8-276a-4eba-97bc-35baf6a13cea)


