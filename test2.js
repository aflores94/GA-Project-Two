//app home page
app.get("/", function(req, res){
    //homepage, option to log in or create account 
});

//log in page 
app.get("/login", function (req, res) {
    //log in page
});

app.post("/login", function (req, res) {
    //create log in information 
});

//user home page
app.get("/:userId",function (req, res) {
    //view homepage with podcast thumbnails and buttons to view profile and master bookshelf
});

app.delete("/:userId", function (req, res) {
    //delete podcast from homepage (also deletes any related bookshelves)
});

//user profile page 
app.get("/:userId/profile", function (req, res) {
    //view user profile
});

app.post("/:userId/profile", function (req, res) {
    //update password, username, etc. 
});

app.delete("/:userId/profile", function (req, res) {
    //delete account
});

//podcast page
app.get("/:userId/podcast-bookshelf/:bookshelfId", function (req, res) {
    //go to podcast bookshelf
});

app.post("/:userId/podcast-bookshelf/:bookshelfId", function (req, res) {
    //add book to bookshelf or update existing book
});

app.delete("/:userId/podcast-bookshelf/:bookshelfId", function (req, res) {
    //remove book from bookshelf 
});

//master bookshelf
app.get("/:userId/master-bookshelf", function (req, res) {
    //view master bookshelf
});