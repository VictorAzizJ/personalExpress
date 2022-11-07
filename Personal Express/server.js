const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db, collection;

const url = "mongodb+srv://VictorAzizJ:Bahiyah1@cluster0.ed64pxn.mongodb.net/Graffiti?retryWrites=true&w=majority";
const dbName = "Graffiti";

app.listen(1215, () => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if(error) {
            throw error;
        }
        db = client.db(dbName);
        console.log("Grove with `" + dbName + "`!");
    });
});



app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

//read
app.get('/', (req, res) => {
  db.collection('locker').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', { locker: result })
  })
})



//update
app.put('/messages', (req, res) => {
  db.collection('locker')
    .findOneAndUpdate({ name: req.body.name, msg: req.body.msg }, {
      $set: {
        thumbUp: req.body.thumbUp + 1
      }
    }, {
        sort: { _id: -1 },
        upsert: true
      }, (err, result) => {
        if (err) return res.send(err)
        res.send(result)
      })
})

//create
app.post('/Donate', (req, res) => {
  db.collection('locker').insertOne({ item: req.body.SprayPaint, statusupdate: req.body.status, EmptyJawn: false }, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})


//change value of check
app.put('/dump', (req, res) => {
  db.collection('locker')
    .findOneAndUpdate({ item: req.body.SprayPaint }, {
      $set: {
        
        EmptyJawn: true
      }
    }, {
        sort: { _id: -1 },
        upsert: false //makes sure not to create new false
      }, (err, result) => {
        if (err) return res.send(err)
        res.send(result)
      })
})

//delete

app.delete('/Stock', (req, res) => {
  console.log(req.body);

  db.collection('locker').findOneAndDelete({ task: req.body.task }, (err, result) => {
    //dont know why this still works but it does
    if (err) return res.send(500, err)
    res.send('Message deleted!')
  })
})

/*app.get('/', (req, res) => {
  db.collection('Supplies').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {messages: result})
  })
})

app.post('/Supplies', (req, res) => {
  db.collection('Supplies').insertOne({name: req.body.name, addy: req.body.address, Empire: 0, Rebel:0 , Friend:0}, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/Supplies', (req, res) => {
  
  db.collection('Supplies')
  .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
    
    $inc: { 
      thumbUp:  req.body.thumbUp ? 1 : 0 , 
      thumbDown: req.body.thumbUp ? 0 : 1


    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/Supplies', (req, res) => {
  db.collection('Supplies').findOneAndDelete({name: req.body.name, msg: req.body.msg}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('Message deleted!')
  })
})*/
