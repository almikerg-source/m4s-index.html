(function () {
"use strict";

// TODO: STEP 0
// Declare dc variable and assign $dc to it
var $dc = {};
window.$dc = $dc;

// TODO: STEP 1
// Inject DC_Info, MenuItems and Categories
$dc.categoriesData = null;

// TODO: STEP 2  
// Define loadMenuItems function on $dc
$dc.loadMenuItems = function (categoryShortName) {
  var url = "ajax/menu_items.json";
  
  $.ajax({
    type: "GET",
    url: url,
    success: function (data) {
      // Filter items by category
      var filteredItems = [];
      for (var i = 0; i < data.menu_items.length; i++) {
        if (data.menu_items[i].category.short_name === categoryShortName) {
          filteredItems.push(data.menu_items[i]);
        }
      }
      
      // Load the menu items snippet
      $.ajax({
        type: "GET",
        url: "snippets/menu-items-snippet.html",
        success: function (snippet) {
          $("#main-content").html(snippet);
        }
      });
    }
  });
};

// TODO: STEP 3
// Define loadHome function on $dc
$dc.loadHome = function () {
  $.ajax({
    type: "GET",
    url: "ajax/categories.json",
    success: function (data) {
      $dc.categoriesData = data;
      
      // Get random category
      var categories = data.categories;
      var randomIndex = Math.floor(Math.random() * categories.length);
      var randomCategory = categories[randomIndex];
      
      // Load home snippet
      $.ajax({
        type: "GET",
        url: "snippets/home-snippet.html",
        success: function (snippet) {
          // TODO: STEP 4
          // Replace {{randomCategoryShortName}} with actual random category
          var homeHtml = snippet.replace(
            "{{randomCategoryShortName}}",
            "'" + randomCategory.short_name + "'"
          );
          $("#main-content").html(homeHtml);
        }
      });
    }
  });
};

// Load home on start
$dc.loadHome();

})();
