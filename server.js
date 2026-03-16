const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
    user:'root',
    password:'root',
    database:'vishnudb'
});

db.connect((err)=>{

    if(!err){
        console.log('DB.Connected')
    }
    else{
        console.log('DB.Not Connected')
        console.log(err);
    }
})

// Create table

app.get("/createtable",(req,res)=>{

    let sql='create table users(id int auto_increment,email varchar(100),password varchar(100),primary key(id))';
    db.query(sql,(err,results)=>{
        if (!err){
            console.log('Table created')
            res.send('Sucessfull')
        }
    })
})

// Register User

app.post("/register",(req,res)=>{

    const {email,password} = req.body;

    let sql = "INSERT INTO users (email,password) VALUES (?,?)";

    db.query(sql,[email,password],(err,result)=>{

        if(err){
            res.send("Error in Registration");
        }
        else{
            res.send("User Registered Successfully");
        }

    })

})
// Login User

app.post("/login",(req,res)=>{

    const {email,password} = req.body;

    let sql = "SELECT * FROM users WHERE email=? AND password=?";

    db.query(sql,[email,password],(err,result)=>{

        if(err){
            res.send(err);
        }
        else{

            if(result.length > 0){
                res.send({message:"Login Successful"});
            }
            else{
                res.send({message:"Invalid Email or Password"});
            }

        }

    })

})

// get all users

app.get('/userlist',(req,res)=>{
    const sql= 'select * from users'
    db.query(sql,(err,result)=>{
        if(err){
           console.log(err);
           res.status(500).send("Database Error");
        }else{
           res.send(result);
        }
    })
})


// get all users by id

app.get('/userlist/:id',(req,res)=>{
    let sql=`select * from users where id=${req.params.id}`;
    db.query(sql, (err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).send("Database Error");
        }
        res.json(result);
    });
})

// Edit users

app.put('/edituser/:id',(req,res)=>{
    const {id} = req.params;
    const {email,password} = req.body;

    const sql = `UPDATE users SET email=?, password=? WHERE id=?`;

    db.query(sql,[email,password,id],(err,result)=>{
        if(err) throw err;
        res.send('User updated');
    })
})

// delete users

app.delete('/deleteuser/:id',(req,res)=>{
    const{id}=req.params;
    const sql='delete from users where id=?';
    db.query(sql,[id],(err,result)=>{
        if(err)throw err;
        res.send('user deleted')
    })
})

app.listen(port,()=>{
    console.log("Server is Running....")
})
