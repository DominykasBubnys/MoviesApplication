import { Alert } from "react-native";


const addToLibrary = async(movie, uid) => {

  const RequestResult = {
    statusOK: false,
    user: null,
    message: null
  }

  try {
     const request = await fetch(`https://server-movies-app.herokuapp.com/add-movie`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json"
         },
         body: JSON.stringify({ movie: movie, uid: uid})
      }
    )
    const resultUser = await request.json();

    if(!request.ok){
      RequestResult.statusOK = false;
      RequestResult.user = null;
      RequestResult.message = (resultUser.message || "Request failed");

      return RequestResult;
    }

    RequestResult.statusOK = true;
    RequestResult.user = resultUser.user;
    RequestResult.message = ("Movie was successfuly added to library");

    return RequestResult;


  } catch (err) {
    Alert.alert(err.message || "Cannot add to library");
  }

}

export default addToLibrary;