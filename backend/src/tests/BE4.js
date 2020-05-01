const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const Traveler = {}
Traveler.create = require("../controllers/traveler/create.js")
Traveler.read = require("../controllers/traveler/read.js")
Traveler.update = require("../controllers/traveler/update.js")
Traveler.delete = require("../controllers/traveler/delete.js")
const Board = {}
Board.create = require("../controllers/board/create.js")
Board.read = require("../controllers/board/read.js")
Board.update = require("../controllers/board/update.js")
Board.delete = require("../controllers/board/delete.js")
const Accomodation = {}
Accomodation.create = require("../controllers/card/create.js")
Accomodation.read = require("../controllers/card/read.js")
Accomodation.update = require("../controllers/card/update.js")
Accomodation.delete = require("../controllers/card/delete.js")
const Entertaiment = {}
Entertaiment.create = require("../controllers/card/create.js")
Entertaiment.read = require("../controllers/card/read.js")
Entertaiment.update = require("../controllers/card/update.js")
Entertaiment.delete = require("../controllers/card/delete.js")
const Todo = {}
Todo.create = require("../controllers/card/create.js")
Todo.read = require("../controllers/card/read.js")
Todo.update = require("../controllers/card/update.js")
Todo.delete = require("../controllers/card/delete.js")
const Transport = {}
Transport.create = require("../controllers/card/create.js")
Transport.read = require("../controllers/card/read.js")
Transport.update = require("../controllers/card/update.js")
Transport.delete = require("../controllers/card/delete.js")

const Attachment = require("../controllers/card/attachment.js")

mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
mongoose.connection.on('error', () => {
    console.log('error connection');
});
mongoose.connection.once('open', () => {
    console.log('DB connected');
});

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
/*TRAVELER CRUD TEST */
app.get('/traveler/create', (req, res) => {
    req.body.traveler.login = "Vasya"
    req.body.traveler.password = "password"
    req.body.traveler.mail = "example@mail.ru"
    Traveler.create(req, res)
});

app.get('/traveler/read_empty', (req, res) => {
    Traveler.read(req, res)
})
app.get('/traveler/read_wrong', (req, res) => {
    req.body.travelerID = "11111"
    Traveler.read(req, res)
})

app.get('/traveler/read', (req, res) => {
    req.body.travelerID = mongoose.Types.ObjectId("5ea44edd700f73350430d726")
    Traveler.read(req, res)
})

app.get('/traveler/update_empty', (req, res) => {
    Traveler.update(req, res)
})

app.get('/traveler/update_wrong', (req, res) => {
    req.body.travelerID = mongoose.Types.ObjectId("5ea44edd700f733504311111")
    Traveler.update(req, res)
})

app.get('/traveler/update_nothing', (req, res) => {
    req.body.travelerID = mongoose.Types.ObjectId("5ea44edd700f73350430d726")
    Traveler.update(req, res)
})

app.get('/traveler/update', (req, res) => {
    req.body.travelerID = mongoose.Types.ObjectId("5ea44edd700f73350430d726")
    req.body.login = "Foo Bar"
    Traveler.update(req, res)
})

app.get('/traveler/delete', (req, res) => {
    req.body.travelerID = mongoose.Types.ObjectId("5ea44edd700f73350430d726")
    Traveler.destroy(req, res)
})

/*BOARD CRUD TEST */
app.get('/board/create', (req, res) => {
    req.body.name = "EuroTour'2020"
    req.body.travelers = []
    req.body.travelers.push(mongoose.Types.ObjectId("5ea44edd700f73350430d726"))
    req.body.beginDate = Date.now()
    req.body.endDate = Date.now()
    req.body.travelerID = mongoose.Types.ObjectId("5ea451aeef29893f0c51c597")
    Board.create(req, res)
});

app.get('/board/read_empty', (req, res) => {
    Board.read(req, res)
})

app.get('/board/read_wrong', (req, res) => {
    req.body.boardID = "11111"
    Board.read(req, res)
})

app.get('/board/read', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea6d88f8bd8ff3f94df646b")
    Board.read(req, res)
})

app.get('/board/update_empty', (req, res) => {
    Board.update(req, res)
})

app.get('/board/update_wrong', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea6d88f8bd8ff3f94d11111")
    Board.update(req, res)
})

app.get('/board/update_nothing', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea6d88f8bd8ff3f94df646b")
    Board.update(req, res)
})

app.get('/board/update', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.name = "EuroTour"
    req.body.travelers = []
    req.body.travelers.push(mongoose.Types.ObjectId("5ea44edd700f73350430d726"))
    Board.update(req, res)
})

app.get('/board/delete', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e6e85a24d2161495d6ab")
    Board.destroy(req, res)
})

/*ACCOMODATION CRUD TEST */
app.get('/accomodation/create', (req, res) => {
    req.body.travelerID = mongoose.Types.ObjectId("5ea6cf0819c47629e49f8618")
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.travelers = []
    req.body.travelers.push(mongoose.Types.ObjectId("5ea44edd700f73350430d726"))
    req.body.payer = mongoose.Types.ObjectId("5ea44edd700f73350430d726")
    req.body.cost = 10000
    req.body.type = "Отель"
    req.body.name = 'Отель "Лучший"'
    req.body.company = "Best company"
    req.body.checkIn = Date.now()
    req.body.checkOut = Date.now()
    Accomodation.create(req, res)
});

app.get('/accomodation/read_empty', (req, res) => {
    Accomodation.read(req, res)
})

app.get('/accomodation/read_emptyBoard', (req, res) => {
    req.body.cardID = mongoose.Types.ObjectId("5ea44edd700f73350430d726")
    Accomodation.read(req, res)
})

app.get('/accomodation/read_wrong', (req, res) => {
    req.body.cardID = mongoose.Types.ObjectId("5ea7ff2c1bb3813bb47c69c2")
    req.body.boardID = mongoose.Types.ObjectId("5ea7ff2c1bb3813bb4711111")
    Accomodation.read(req, res)
})

app.get('/accomodation/read', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.cardID = mongoose.Types.ObjectId("5ea7ff2c1bb3813bb47c69c2")
    Accomodation.read(req, res)
})

app.get('/accomodation/update_empty', (req, res) => {
    Accomodation.update(req, res)
})

app.get('/accomodation/update_emptyBoard', (req, res) => {
    req.body.cardID = mongoose.Types.ObjectId("5ea44edd700f73350430d726")
    Accomodation.update(req, res)
})

app.get('/accomodation/update_wrong', (req, res) => {
    req.body.cardID = mongoose.Types.ObjectId("5ea7ff2c1bb3813bb47c69c2")
    req.body.boardID = mongoose.Types.ObjectId("5ea7ff2c1bb3813bb4711111")
    Accomodation.update(req, res)
})

app.get('/accomodation/update_nothing', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.cardID = mongoose.Types.ObjectId("5ea7ff2c1bb3813bb47c69c2")
    Accomodation.update(req, res)
})

app.get('/accomodation/update', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.cardID = mongoose.Types.ObjectId("5ea81d2a8f09db3e700abdee")
    req.body.name = "Foo Bar 2"
    Accomodation.update(req, res)
})

app.get('/accomodation/delete', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.cardID = mongoose.Types.ObjectId("5ea81fddebd5731e0445230c")
    Accomodation.destroy(req, res)
})
/*ENTERTAIMENT CRUD TEST  */
app.get('/entertaiment/create', (req, res) => {
    req.body.travelerID = mongoose.Types.ObjectId("5ea6cf0819c47629e49f8618")
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.travelers = []
    req.body.travelers.push(mongoose.Types.ObjectId("5ea44edd700f73350430d726"))
    req.body.payer = mongoose.Types.ObjectId("5ea44edd700f73350430d726")
    req.body.cost = 20000
    req.body.type = "Бар"
    req.body.name = "На дне"
    req.body.company = "Жигулевский пивзавод"
    req.body.place = "Самара, Волжский проспект, 4"
    req.body.beginDate = Date.now()
    req.body.endDate = Date.now()
    req.body.comment = "Самое вкусное Жигулевское в России!"
    Entertaiment.create(req, res)
});

app.get('/entertaiment/read_empty', (req, res) => {
    Entertaiment.read(req, res)
})

app.get('/entertaiment/read_emptyBoard', (req, res) => {
    req.body.cardID = mongoose.Types.ObjectId("5ea826ad7d875811201dce02")
    Entertaiment.read(req, res)
})

app.get('/entertaiment/read_wrong', (req, res) => {
    req.body.cardID = mongoose.Types.ObjectId("5ea826ad7d875811201dce02")
    req.body.boardID = mongoose.Types.ObjectId("5ea7ff2c1bb3813bb4711111")
    Entertaiment.read(req, res)
})

app.get('/entertaiment/read', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.cardID = mongoose.Types.ObjectId("5ea826ad7d875811201dce02")
    Entertaiment.read(req, res)
})

app.get('/entertaiment/update_empty', (req, res) => {
    Entertaiment.update(req, res)
})

app.get('/entertaiment/update_emptyBoard', (req, res) => {
    req.body.cardID = mongoose.Types.ObjectId("5ea826ad7d875811201dce02")
    Entertaiment.update(req, res)
})

app.get('/entertaiment/update_wrong', (req, res) => {
    req.body.cardID = mongoose.Types.ObjectId("5ea826ad7d875811201dce02")
    req.body.boardID = mongoose.Types.ObjectId("5ea7ff2c1bb3813bb4711111")
    Entertaiment.update(req, res)
})

app.get('/entertaiment/update_nothing', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.cardID = mongoose.Types.ObjectId("5ea826ad7d875811201dce02")
    Entertaiment.update(req, res)
})

app.get('/entertaiment/update', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.cardID = mongoose.Types.ObjectId("5ea826ad7d875811201dce02")
    req.body.place = "Самара, Волжский проспект, 4, 2-й этаж"
    Entertaiment.update(req, res)
})

app.get('/entertaiment/delete', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.cardID = mongoose.Types.ObjectId("5ea826ad7d875811201dce02")
    Entertaiment.destroy(req, res)
})
/*TODO CRUD TEST  */
app.get('/todo/create', (req, res) => {
    req.body.travelerID = mongoose.Types.ObjectId("5ea6cf0819c47629e49f8618")
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.travelers = []
    req.body.travelers.push(mongoose.Types.ObjectId("5ea44edd700f73350430d726"))
    req.body.header = "Test"
    req.body.details = "test details"
    req.body.todoDate = Date.now()
    Todo.create(req, res)
});

app.get('/todo/read_empty', (req, res) => {
    Todo.read(req, res)
})

app.get('/todo/read_emptyBoard', (req, res) => {
    req.body.cardID = mongoose.Types.ObjectId("5ea82bd80b402c3b74fefdd4")
    Todo.read(req, res)
})

app.get('/todo/read_wrong', (req, res) => {
    req.body.cardID = mongoose.Types.ObjectId("5ea82bd80b402c3b74fefdd4")
    req.body.boardID = mongoose.Types.ObjectId("5ea7ff2c1bb3813bb4711111")
    Todo.read(req, res)
})

app.get('/todo/read', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.cardID = mongoose.Types.ObjectId("5ea82bd80b402c3b74fefdd4")
    Todo.read(req, res)
})

app.get('/todo/update_empty', (req, res) => {
    Todo.update(req, res)
})

app.get('/todo/update_emptyBoard', (req, res) => {
    req.body.cardID = mongoose.Types.ObjectId("5ea82bd80b402c3b74fefdd4")
    Todo.update(req, res)
})

app.get('/todo/update_wrong', (req, res) => {
    req.body.cardID = mongoose.Types.ObjectId("5ea82bd80b402c3b74fefdd4")
    req.body.boardID = mongoose.Types.ObjectId("5ea7ff2c1bb3813bb4711111")
    Todo.update(req, res)
})

app.get('/todo/update_nothing', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.cardID = mongoose.Types.ObjectId("5ea82bd80b402c3b74fefdd4")
    Todo.update(req, res)
})

app.get('/todo/update', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.cardID = mongoose.Types.ObjectId("5ea82bd80b402c3b74fefdd4")
    req.body.isDone = true
    Todo.update(req, res)
})

app.get('/todo/delete', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.cardID = mongoose.Types.ObjectId("5ea82bd80b402c3b74fefdd4")
    Todo.destroy(req, res)
})

/*TRANSPORT CRUD TEST */
app.get('/transport/create', (req, res) => {
    req.body.travelerID = mongoose.Types.ObjectId("5ea6cf0819c47629e49f8618")
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.travelers = []
    req.body.travelers.push(mongoose.Types.ObjectId("5ea44edd700f73350430d726"))
    req.body.payer = mongoose.Types.ObjectId("5ea44edd700f73350430d726")
    req.body.cost = 250
    req.body.transport = "Такси"
    req.body.company = "Yandex"
    req.body.departureDate = Date.now()
    req.body.departurePlace = "Самара, ул. Победы, 10"
    req.body.arrivalDate = Date.now()
    req.body.arrivalPlace = "Самара, Волжский проспект, 4"
    req.body.comment = "Съездить за пивом"
    Transport.create(req, res)
});

app.get('/transport/read_empty', (req, res) => {
    Transport.read(req, res)
})

app.get('/transport/read_emptyBoard', (req, res) => {
    req.body.cardID = mongoose.Types.ObjectId("5ea832ad6702e03b087d854a")
    Transport.read(req, res)
})

app.get('/transport/read_wrong', (req, res) => {
    req.body.cardID = mongoose.Types.ObjectId("5ea832ad6702e03b087d854a")
    req.body.boardID = mongoose.Types.ObjectId("5ea7ff2c1bb3813bb4711111")
    Transport.read(req, res)
})

app.get('/transport/read', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.cardID = mongoose.Types.ObjectId("5ea832ad6702e03b087d854a")
    Transport.read(req, res)
})

app.get('/transport/update_empty', (req, res) => {
    Transport.update(req, res)
})

app.get('/transport/update_emptyBoard', (req, res) => {
    req.body.cardID = mongoose.Types.ObjectId("5ea832ad6702e03b087d854a")
    Transport.update(req, res)
})

app.get('/transport/update_wrong', (req, res) => {
    req.body.cardID = mongoose.Types.ObjectId("5ea832ad6702e03b087d854a")
    req.body.boardID = mongoose.Types.ObjectId("5ea7ff2c1bb3813bb4711111")
    Transport.update(req, res)
})

app.get('/transport/update_nothing', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.cardID = mongoose.Types.ObjectId("5ea832ad6702e03b087d854a")
    Transport.update(req, res)
})

app.get('/transport/update', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.cardID = mongoose.Types.ObjectId("5ea83482832cd736c42786a3")
    req.body.transport = "Другое такси"
    req.body.company = "Uber"
    Transport.update(req, res)
})

app.get('/transport/delete', (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.cardID = mongoose.Types.ObjectId("5ea83482832cd736c42786a3")
    Transport.destroy(req, res)
})
/*ATTACHMENT CRUD TEST */
app.get("/attachment/attach", (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.cardID = mongoose.Types.ObjectId("5ea829842e77b03c505e494a")
    req.body.name = "Test.pdf"
    Attachment.attach(req, res)
})
app.get("/attachment/deattach", (req, res) => {
    req.body.boardID = mongoose.Types.ObjectId("5ea7e8133d09ef3d289b717b")
    req.body.cardID = mongoose.Types.ObjectId("5ea829842e77b03c505e494a")
    req.body.attachmentID = mongoose.Types.ObjectId("5ea83a355731582cc8a891c8")
    req.body.name = "Test.pdf"
    Attachment.deattach(req, res)
})


// TEST END
app.listen(3404, () => {
    console.log('server has been started');
});