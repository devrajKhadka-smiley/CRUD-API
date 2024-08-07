const express = require("express");
const mongoose = require("mongoose");
const Product = require('./models/product.model.js');
const res = require("express/lib/response.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middlware
app.use(express.json()); 
app.use(express.urlencoded({extended: false}));


//routes
app.use("/api/products", productRoute);


app.get("/", function (req, res) {
  res.send("Hello from Node API");
});



// app.get('/api/products', async (req, res) =>{
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({message: error.message});
//   }
// })


// app.get('/api/products/:id', async(req, res)=>{
//   try {
//     const {id} = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);

//   } catch (error) {
//     res.status(500).json({messsage: error.message});
//   }
// })

// app.post('/api/products', async (req, res) => {
//   // console.log(req.body);
//   // res.send(req.body);
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({message: error.message});  
//   }
// });

// update a product

// app.put('/api/products/:id', async (req, res) =>{
//   try {
//     const {id} = req.params;

//     const product = await Product.findByIdAndUpdate(id, req.body);
    
//     if(!product){
//       return res.status(404).json({message: "Product not Found"});

//     }

//     const updatedProduct =  await Product.findById(id);
//     res.status(200).json(updatedProduct);

//   } catch (error) {
//     res.status(500).json({message: error.message});
//   }
// });
// -----------------------------------------
// delete product

// app.delete('/api/products/:id', async (req, res) => {
//   try {
//     const {id} = req.params;

//     const product = await Product.findByIdAndDelete(id);

//     if(!product){
//       return res.status(404).json({message: "Product not Found"});
//     }

//     res.status(200).json({message: "Product Deleted Successfully"});
    
//   } catch (error) {
//     res.status(500).json({message: error.message});
    
//   }
// });





mongoose
  .connect(
    "mongodb+srv://admin:admin@backenddb.bczmwkl.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Conneted to Database!");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
