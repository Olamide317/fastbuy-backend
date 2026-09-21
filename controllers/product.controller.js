import { StatusCodes } from "http-status-codes";
import { foodItems } from "../data/products.js";

const getAllProducts = async (req, res) => {
  try {
    res.status(StatusCodes.OK).json({
      status: true,
      message: "Products fetched successfully",
      products: foodItems,
    });
  } catch (error) {
    console.log(error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Oops! Something went wrong",
      status: false,
    });
  }
};

export { getAllProducts };
