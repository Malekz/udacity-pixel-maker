/* JavaScript function to create the grid when submit button is clicked.
 * It takes in height and width of the grid from the html form and creates
 * the grid on the table canvas element in html page.
 */
function makeGrid() {
  var height = document.getElementById("input_height").value;
  var width = document.getElementById("input_width").value;
  var table = document.getElementById("pixel_canvas");
  // Table grid creation code :
  table.innerHTML = "";
  var tbody = document.createElement("tbody");
  for (var i = 0; i < height; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < width; j++) {
      var td = document.createElement("td");
      td.appendChild(document.createTextNode(""));
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
}

//jQuery to change color of pixel when clicked.
$("body").on("click", "td", function() {
  var color = document.getElementById("colorPicker").value;
  $(this).css("background-color", color);
});
