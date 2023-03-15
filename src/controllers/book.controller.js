import HttpStatus from 'http-status-codes';
import * as BookService from '../services/book.service';

// Get all Books
export const getAll = async (req, res, next) => {
  try {
    const data = await BookService.getAll(req.body.userId);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'All Books fetched succesfully'
    });
  } catch (error) {
    next(error);
  }
};

// Get Book by id
export const getById = async (req, res, next) => {
  try {
    const data = await BookService.getById(req.params._id, req.body.userId);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'book fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

// Sort book high to low
export const sortHighToLow = async (req, res, next) => {
  try {
    const data = await BookService.highToLow();
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'book fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

// Sort book high to low
export const sortLowToHigh = async (req, res, next) => {
  try {
    const data = await BookService.lowToHigh();
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'book fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

// Find Book by search
export const searchByText = async (req, res, next) => {
  try {
    const data = await BookService.searchByText(req.params.searchText);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'book fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};
