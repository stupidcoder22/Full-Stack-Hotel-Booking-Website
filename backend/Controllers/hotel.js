import Hotel from "../Models/Hotel";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    console.log("first");
    const updatehotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatehotel);
  } catch (error) {
    next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    const deletehotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletehotel);
  } catch (error) {
    next(error);
  }
};

export const getindividualHotel = async (req, res, next) => {
  try {
    const findhotel = await Hotel.findById(req.params.id);
    res.status(200).json(findhotel);
  } catch (error) {
    next(error);
  }
};

export const getAllHotel = async (req, res, next) => {
  // if (failed) return next(createError(401, "You are not authenticated"));
  try {
    const findallhotel = await Hotel.find();
    res.status(200).json(findallhotel);
  } catch (error) {
    next(error);
  }
};
