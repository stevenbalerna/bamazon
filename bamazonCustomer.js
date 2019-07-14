var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Welcome to Bamazon!  Please look at our selection below!");
});

var displayProducts = function () {
    var query = "Select * FROM products";
    connection.query(query, function (err, res) {
        if (err) throw err;
        var displayTable = new Table({
            head: ["Item ID", "Product Name", "Catergory", "Price", "Quantity"],
            colWidths: [10, 25, 25, 10, 14]
        });
        for (var i = 0; i < res.length; i++) {
            displayTable.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
        }
        console.log(displayTable.toString());
        purchasePrompt();
    });
}

function purchasePrompt() {
    inquirer.prompt([{
            name: "ID",
            type: "input",
            message: "Please enter Item ID you like to purhcase.",
            filter: Number
        },
        {
            name: "Quantity",
            type: "input",
            message: "How many items do you wish to purchase?",
            filter: Number
        },

    ]).then(function (answers) {
        var quantityNeeded = answers.Quantity;
        var IDrequested = answers.ID;
        purchaseOrder(IDrequested, quantityNeeded);
    });
};

function purchaseOrder(id, amtBought) {
        connection.query('Select * FROM products WHERE item_id = ' + id, function (err, res) {
            if (err) {
                console.log(err)
            };
            if (amtBought <= res[0].stock_quantity) {
                var totalCost = res[0].price * amtBought;
                connection.query("UPDATE Products SET stock_quantity = stock_quantity - " + amtBought + "WHERE item_id = " + id);
                console.log("Good news! Your purchase has been completed!");
                console.log("Your total cost for " + amtBought + " " + res[0].product_name + " is " + totalCost + " Thank you!");
               
        } else {
            console.log("Insufficient quantity, sorry we do not have enough " + res[0].product_name + "to complete your order.");
        };
        displayProducts();
    });
};
displayProducts();