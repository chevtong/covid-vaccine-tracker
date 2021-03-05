import axios from "axios";

const url = "https://epistat.sciensano.be/Data/COVID19BE_VACC.json";

export const FetchAPI = async () => {
  try {
    const { data } = await axios.get(url);
    
    console.log(data);

    return data;

  } catch (error) {
    console.log(error);
  }
};

export const fetchFirstDoseData = async () => {
  try {
    const { data } = await axios.get(url);

    const firstDoseData = data.filter((round) => (
      round.DOSE === "A"
    ));

    return firstDoseData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSecondDoseData = async () => {
  try {
    const { data } = await axios.get(url);

    const secondDoseData = data.filter((round) => (
      round.DOSE !== "A"
    ));
    
    return secondDoseData;
  } catch (error) {
    console.log(error);
  }
};