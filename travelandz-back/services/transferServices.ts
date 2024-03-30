import axios from "axios";
import sha256 from "crypto-js/sha256";
import crypto from "crypto-js";

import "dotenv/config";

const apiKey = process.env.HOTELBEDS_APIKEY;
const secret = process.env.HOTELBEDS_SECRET;

const signature = sha256(
  `${apiKey}${secret}${Math.floor(Date.now() / 1000)}`
).toString(crypto.enc.Hex);

const getAvailabilityService = async (
  // language: string,
  // fromType: string,
  date: string,
  // toType: string,
  time: string,
  departureData: any,
  toCode: string,
  adults: number = 1,
  children: number = 0,
  infants: number = 0,
  inbound?: string
) => {
  try {
    const url = `https://api.test.hotelbeds.com/transfer-api/1.0/availability/es/from/IATA/${
      departureData.fromCode
    }/to/ATLAS/${toCode}/${date + "T" + time}/${
      inbound ? inbound : ""
    }/${adults}/${children}/${infants}`;

    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "Api-Key": apiKey,
        "X-Signature": signature,
      },
    });

    console.log("RESPONSE: ", response.data);

    return response.data;
  } catch (error) {
    console.error("ERROR: ", error);
  }
};

const getTerminalsService = async (query: string) => {
  try {
    const url = `https://api.test.hotelbeds.com/transfer-cache-api/1.0/locations/terminals?fields=code,content&language=es&countryCodes=ES&codes=PMI`;
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "Api-Key": apiKey,
        "X-Signature": signature,
      },
    });

    console.log("RESPONSEE: ", response.data);

    const results = response.data.filter((item: any) =>
      item.content.description.toLowerCase().includes(query.toLowerCase())
    );

    return results;
  } catch (error) {
    throw new Error("Error al obtener las terminales");
  }
};

const getDestinationsService = async (query: string) => {
  try {
    const url = `https://api.test.hotelbeds.com/transfer-cache-api/1.0/hotels?fields=code,name,address&language=es&countryCodes=ES&destinationCodes=PMI`;
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "Api-Key": apiKey,
        "X-Signature": signature,
      },
    });

    const results = response.data.filter(
      (item: any) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.address.toLowerCase().includes(query.toLocaleLowerCase())
    );
    console.log("SERVER RESULTS FILTERED: ", results);
    return results;
  } catch (error) {
    throw new Error("Error al obtener las terminales");
  }
};

export { getAvailabilityService, getTerminalsService, getDestinationsService };
