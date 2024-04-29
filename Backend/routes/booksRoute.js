import express from "express";
import {Book} from '../models/bookModel.js'

const router = express.Router();

//Route for get all books from databse
router.get( '/', async (req, res) => { 
    try{
      const books=await Book.find({});
      return res.status(200).json({
          count:books.length,
          data:books
      })
    }catch(error){
          console.error(error)
          res.status(500).send({message:"cant get books"}); 
    }
  
  })
  // Route for getting a single book by its ID
  router.get('/:id', async (req, res) => {
    try {
      const id = req.params.id; // Extract the ID string from req.params
      const book = await Book.findById(id); // Pass the ID string directly to findById
      return res.status(200).json({ book });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Can't get book" });
    }
  });
    // Route for creating a new book
    router.post('/', async (request, response) => {
        try {
          if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
          ) {
            return response.status(400).send({ message: "All fields are required" }); // Corrected response status method
          }
          const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
          };
          const book = await Book.create(newBook);
          response.status(201).send({ book }); // Corrected response status and sending the created book
        } catch (error) {
          console.error(error);
          response.status(500).send({ message: "Unable to add book" }); // Corrected response status and message
        }
      });
      
  //Route for update a Book
  
  router.put("/:id", async (request, response) => {
    try {
      if (!request.body.title || !request.body.author || !request.body.publishYear) {
        return response.status(400).send({ message: "Missing fields!" });
      }
      
      const id = request.params.id; // Extract the ID from req.params
      const result = await Book.findByIdAndUpdate(id, request.body);
  
      if (!result) {
        return response.status(404).send({ message: 'The book was not found' });
      }
  
      return response.status(200).send({ message: "Book updated successfully" }); // Changed the status to 200 for successful update
    } catch (error) {
      console.error(error);
      response.status(500).send({ message: "Unable to update book" });
    }
  });
  
  
  //Route  to delete a Book by its ID
  
  router.delete('/:id', async (request,response)=>{
  
      try{
          const {id}=request.params;
  
          const result= await  Book.findByIdAndDelete(id);
          if(!result){
              return response.status(404).send({message:'The book does not exist'})
          }
          //Return the deleted book
          return  response.status(200).send({message:"Book Deleted successfully"});
      }catch(error){
          console.error(error)
           response.status(500).send({message:"cant sent"}); 
      }
  })
  

  export default  router;