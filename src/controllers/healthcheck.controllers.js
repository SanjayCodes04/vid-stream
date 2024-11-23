import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";

const healthCheck = asyncHandler(async (req, res) => {
  return res
    .status(300)
    .json(new ApiResponse(200, "OK", "Health Check Passed"));
});

export default healthCheck;
