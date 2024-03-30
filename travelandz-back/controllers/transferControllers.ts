import {
  getAvailabilityService,
  getTerminalsService,
  getDestinationsService,
} from "../services/transferServices";

export const getAvailability = async (req: any, res: any) => {
  try {
    const {
      // language,
      // fromType,
      date,
      // toType,
      time,
      departureData,
      toCode,
      adults,
      children,
      infants,
    } = req.body;

    const availability = await getAvailabilityService(
      // language,
      // fromType,
      date,
      // toType,
      time,
      departureData,
      toCode,
      adults,
      children,
      infants
    );

    res.json(availability);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener la disponibilidad" });
  }
};

export const getTerminals = async (req: any, res: any) => {
  try {
    const query: string = req.query.query;
    const results = await getTerminalsService(query);

    res.json(results);
  } catch (error) {
    console.error(error);
  }
};

export const getHotels = async (req: any, res: any) => {
  try {
    const query: string = req.query.query;
    const results = await getDestinationsService(query);

    res.json(results);
  } catch (error) {
    console.error(error);
  }
};
