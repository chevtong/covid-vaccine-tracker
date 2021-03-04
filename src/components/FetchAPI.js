import axios from "axios";

const url = "https://epistat.sciensano.be/Data/COVID19BE_VACC.json";

export const FetchAPI = async () => {
    try {
      const {data}  =  await axios.get(url);
      console.log(data)
   

    return data

      } catch (error) {
        console.log(error);
      }
}


