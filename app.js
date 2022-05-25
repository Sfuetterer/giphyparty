console.log("Let's get this party started!");

const $div = $('#div')
const search =$("#search")

function addGif(res) {
      let numResults = res.data.length;
      if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        let newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url,
          });
      $div.append(newGif)
      console.log(randomIdx)
    }
}
  
$("form").on("submit", async function(e){
    e.preventDefault();

    let searchTerm = search.val();
    search.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
          q: searchTerm,
          api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
      });
      addGif(response.data)
    });

    const remove = document.querySelector('#remove')
    $('#remove').on("click", function(){
        $div.empty();
    });




