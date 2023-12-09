import { HTTP_STATUSES } from "../constants/http.js";
import { UserService } from "../services/user.service.js";
import ApiError from "../errors/api.error.js";

const getAll = async (req, res, next) => {
  try {
    const result = await UserService.getAll(req.query.page);
    res.status(HTTP_STATUSES.OK).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const getByParams = async (req, res, next) => {
  try {
    const result = await UserService.getByParams(req.query);
    res.status(HTTP_STATUSES.OK).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const result = await UserService.getById(req.params.id);
    res.status(HTTP_STATUSES.OK).json({ data: result });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await UserService.create(req.body);   
    res.status(HTTP_STATUSES.CREATED).json({ data: result });
  } catch (error) {
    next(new ApiError(error.message));
  }
};

const deleteById = async (req, res, next) => {
  try {
    const result = await UserService.deleteById(req.params.id);
    res.status(HTTP_STATUSES.OK).json({ data: result });
  } catch (error) {
    next(new ApiError(error.message));
  }
};

export const UserController = {
  getAll,
  getByParams,
  getById,
  create,
  deleteById,
};
