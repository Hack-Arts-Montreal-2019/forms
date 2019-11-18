// This is the code to preload the images
function setPic() {
  var img = document.getElementById("image");
  img.src = this.value;
  return false;
}
document.getElementById("picList").onchange = setPic;

//Date&Time Picker
$(() => {
  // Give .js-datetimepicker to the input field or wrapper element.
  // When you click on the element that has this class, the datetimepicker pops up.
  $(".form-control.js-datetimepicker").datetimepicker({
    widgetPositioning: {
      horizontal: "right",
      vertical: "bottom"
    }
  });
});
