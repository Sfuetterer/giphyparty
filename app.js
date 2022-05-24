console.log("Let's get this party started!");

const submit = document.querySelector('#submit');
const div = document.createElement('div')

function addGif(res) {
      const img = document.createElement('img');

      let numResults = res.data.length;
      if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        img.src = res.data[randomIdx].images.original.url;
      }
      div.append(img)
    }
  
submit.addEventListener("click", async function(e){
    e.preventDefault();
    const searchTerm = document.querySelector('#search').value;
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
          q: searchTerm,
          api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
      })
      addGif(response.data)
    });

    const remove = document.querySelector('#remove')
    remove.addEventListener("click", function(){
        div.empty();
    });




