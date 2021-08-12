
const BASE_URL = "http://localhost:2000";



const createPost = () => {

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    const obj = {
        title:title,
        description:description,
    }

    console.log(obj)
 
    axios.post(`${BASE_URL}/create`, obj)
    .then((response) =>{
      console.log(response);
    })
    .catch( (error) =>{
      console.log(error);
    })
}
