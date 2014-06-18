Checkout web application. Event managers can create an event and assign registers
to cashiers. Cashiers add items to the register. Event managers can create lists
from that input for billings.

Overview
===
The checkout is tailored to events where sellers bring their stuff to a flea market,
where it is sold for them. Each item has a list number on it and an item number.

A list is related to a physical box with 25 or 50 items in it.

The cashier enters the list number, the item number and the price.

The event manager closes all registers and has an overview of the sold articles.

She's able to print an overview of all sold articles of a list for the seller.

Set-Up
===
Clone the project to your machine. For that you need git of course.

As we did in the template we install node with brew and navigate to the project folder.  
```brew install node```

We load the necessary modules there with npm. npm reads the content of package.json.  
```npm install```

For our data, we use MongoDB in this template.

Install MongoDB  
```brew install mongodb```

Run MongoDB in its own Terminal tab with  
```mongod ```

If this does not work, make a folder where the database should reside, and execute the command  
```mongod --dbpath ~/your/mongodbs/```

After that you can start the web application with  
```node web.js```
