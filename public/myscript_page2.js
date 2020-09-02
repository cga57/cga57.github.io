"use strict";
// This file deals with the javascript for order now
// It handles input from the user which was created in the
// page2.html
// It totals up total cost
// And it will display that
// Still needs css styling for everything to look pretty
// As well as more functional JS

var items_added_count = 0; // global variable to add the # of items added by the user
// creates an object that essentially holds the menu list.
var menu_list = {
  menu: [], // menu - this is the aray storing everything
  addItem: function (menuText) {
    this.menu.push({
      menuText: menuText,
      bought: true,
    });
  },
  changeItem: function (position, menuText) {
    this.menu[position].menuText = menuText;
  },
  deleteItem: function (position) {
    this.menu.splice(position, 1); // where and how many u wanna delete
  },
  // note: toggle means change value
  toggleBought: function (position) {
    var menu = this.menu[position]; // apparently this is passed by reference
    menu.bought = !menu.bought;
    this.displaymenu();
  },
  toggleAll: function () {
    var totalmenu = this.menu.length;
    var boughtmenu = 0;

    // far simpler and done using inbuilt functions
    this.menu.forEach(function (menu) {
      if (menu.bought === true) {
        boughtmenu++;
      }
    });

    this.menu.forEach(function (menu) {
      if (boughtmenu === totalmenu) {
        menu.bought = false;
      } else {
        menu.bought = true;
      }
    });
  },
};
// handling button clicks
var handlers = {
  addItem: function () {
    var addItemTextInput = document.getElementById("addItemTextInput");
    menu_list.addItem(addItemTextInput.value);
    addItemTextInput.value = "";
    view.displayMenu();
  },
  deleteMenuItem: function (position) {
    menu_list.deleteItem(position);
    view.displayMenu();
  },
  calculateCost: function () {
    var menuLI = document.getElementById("finalCost");
    var costInText = (items_added_count * 10).toString();
    menuLI.innerHTML = "$" + costInText;
  },
};
// handles the user interface
// this is the object that actually makes stuff pop up on the screen

var view = {
  // Note: The entire display appears to work so that everything is updated again
  displayMenu: function () {
    // since the view is resetted, we must also reset the counter variable.
    items_added_count = 0;
    var menuUI = document.querySelector("ul");
    menuUI.innerHTML = "";

    menu_list.menu.forEach(function (menu, position) {
      var menuLi = document.createElement("li");
      var menu = menu_list.menu[position];
      var menuTextWithCompletion = "";
      if (menu.bought == true) {
        menuTextWithCompletion = "($10) " + menu.menuText;
        items_added_count++; // add to count for each item added
      } else {
        menuTextWithCompletion = "( ) " + menu.menuText;
      }
      menuLi.id = position;
      menuLi.textContent = menuTextWithCompletion;
      menuLi.appendChild(this.createDeleteButton());
      menuUI.appendChild(menuLi);
    }, this);
    console.log(items_added_count); // print out count after all items have been added
    // when the this argument is passed into forEach (callback, this)
    // then the this will be equal to the view object
  },

  createDeleteButton: function () {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function () {
    window.onload = function () {
      var menuUl = document.querySelector("ul");
      if (menuUl) {
        menuUl.addEventListener("click", function (event) {
          // Get element clicked
          var elementClicked = event.target;

          // Check if element clicked is a delete Button
          if (elementClicked.className == "deleteButton") {
            handlers.deleteMenuItem(parseInt(elementClicked.parentNode.id));
          }
        });
      }
    };
  },
};
view.setUpEventListeners();
