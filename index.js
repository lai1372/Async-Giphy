require("dotenv").config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY);
const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=confused&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

async function getImages(query) {
  try {
    const request = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    );
    const response = await request.json();
    if (response.data && response.data.length > 0) {
      console.log(response.data[0].url);
      const imgUrl = response.data[0].url;
      return imgUrl;
    } else {
      console.log("no images found");
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}

getImages("success");
