/* app.use(exp.json()) --> in built middleware 
middle ware is a function
// middle ware is same as route 
// Express middle ware
function middleware1(req,res,next){
  // send res from middleware
  res.json({message:"This response from middle ware1"})
 // forward req to next
 next()  // -- if 
}

// use middleware1
app.use(middleware1)   */
// path based middle ware

/*MONGO DB */

/* Mongo db comes under the document oriented data  based and no sql database
*/
// in mongo db--> database--->collection---> document---> structure of database is same object as js and it calls as field value


// to create any database we use --> use databasename
// check database we use ---> show databases
// cls --> clearscreen


/* Creating Collection
to create  
db.createCollection()
here db is the current database. */

// Insert document 
/* db.collection_name.insertone 
db.users.insertOne({name:"ravi",age:21,city:"hyderabad"})
or insert many({ })
db.users.insertMany([{name:"mani",age:27,city:"hyderabad"},{name:"kanta",age:76,city:"vij"}])
ex- db.users.insertOne({name:"ravi",age:21,city:"hyderabad"})
object id is unq id for creating a user
*/


/* Read document from a collection 

findOne  -- > it always return the first one document
db.users.findOne()  it return the first document 
db.users.find() --> it returns the all documets 
we can write in find() as a condition 
*/


/* QUERY OPERATORS 
$gt -> greater than 
$eq----> equal to 
db.users.find({city:{$eq:"hyderabad"}}) // having more than one thatsy why we use find operator
if it is unq city we use findOne
*/
// if the field is not there in find one it return null
/// db.users.find({$and:[{age:{$gt:25}},{city:"hyderabad"}]}) logical operators

//$set--> to add any propert //

/* UPDATE DOCUMENTS
update one ()      ---> db.users.updateOne({name:"ravi"},{$set:{name:"ravi krishna",age:57}})
updateMany()
*/

/* DELETE OPERATIONS
deleteone()  --> db.users.deleteOne({name:"ravi krishna"})
deleteMany()  */

/* nested objects
db.users.findOne({"address.city":"hyd"})
*/ 

/* $push element doesnt care about duplicates it allows all the values and push

unq ele --> $addtoset
duplicate ele---> $push   */

// In our application we are using rest client application 
// we have many like these postman , thundercliend and so on



