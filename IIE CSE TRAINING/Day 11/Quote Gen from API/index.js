// const btn1 = document.getElementById("get-quote");
// const quote1 = document.getElementById("quote");
// const apiURL= 'https://dummyjson.com/quotes/random';



// const getJoke = async () => {
//     try {
//         quote1.innerText ="Loading...";
//         const response = await fetch (apiURL);
//         const data = await response.json();
//         const quote = data[0].quote;
//         console.log(quote);
//         quote1.innerText=quote;
//     } catch (error){
//         quote1.innerText= "An error occurred , try again later";
//         console.log(error)
//     }
    


//     }
//     getJoke();
// btn1.addEventListener("click",getJoke);



const btn1 = document.getElementById("get-quote");
const quoteElem = document.getElementById("quote");
const apiURL = "https://dummyjson.com/quotes/random";

const getJoke = async () => {
  try {
    quoteElem.innerText = "Loading...";
    const response = await fetch(apiURL);
    const quote = await response.json();
    console.log(quote);
    quoteElem.innerText = quote.quote + " - By " + quote.author;
  } catch (error) {
    quoteElem.innerText = "An error occurred , try again later";
    console.log(error);
  }
};
getJoke();
btn1.addEventListener("click", getJoke);
