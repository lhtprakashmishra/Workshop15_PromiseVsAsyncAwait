import fetch from "node-fetch";

// Function to fetch posts using Promises
const fetchPostsWithPromises = () => {
  console.log("Fetching posts with Promises...");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Successfully fetched posts using promises:", data.length);
    })
    .catch((error) => {
      console.error("Failed to fetch posts:", error.message);
    });
};

// Async function to fetch posts
const fetchPostsWithAsyncAwait = async () => {
  console.log("Fetching posts with Async/Await...");
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Successfully fetched posts using async await:", data.length);
  } catch (error) {
    console.error("Failed to fetch posts:", error.message);
  }
};

fetchPostsWithAsyncAwait(); // Fetch API using async/await
fetchPostsWithPromises(); // Fetch API using promises
