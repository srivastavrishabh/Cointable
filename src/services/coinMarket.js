const API_KEY = "02eb856e-6380-475a-95d7-d8a6434c3ce5";
const baseUrl = "https://pro-api.coinmarketcap.com";

export const getTokenList = async () => {
  const myHeaders = new Headers();
  myHeaders.append("X-CMC_PRO_API_KEY", API_KEY);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  try {
    const response = await fetch(
      `${baseUrl}/v1/cryptocurrency/listings/latest`,
      requestOptions
    );

    if (!response.ok) {
      console.log(
        new Error(`API request failed with status ${response.status}`)
      );
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return false;
  }
};
