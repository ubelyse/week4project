// Business (or back-end) logic:
var order = function(number1, number2, number3,number4,number5,number6) {
    return (number1 + number2+number3+number4+number5)*number6;
  };
  // User interface logic:
  $(document).ready(function() {
    $("form#order").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#pizza").val());
      var number2 = parseInt($("#pizzasize").val());
      var number3 = parseInt($("#pizzacrust").val());
      var number4 = parseInt($("#pizzatoppings").val());
      var number5 = parseInt($("#pizzadelivery").val());
      var number6 = parseInt($("#pizzaquantity").val());
      var result = order(number1, number2,number3,number4,number5,number6);
      alert("You ordered for a "+ $( "#pizza option:selected" ).text()+""+
      $( "#pizzasize option:selected" ).text()+"pizza with "+$( "#pizzacrust option:selected" ).text()+"and "+
      $( "#pizzatoppings option:selected" ).text()+"The total cost is:"
      +result+ "Rwf");
    });
  });

  $(document).ready(function() {
  $('#pizzadelivery').change(function () {
    var selectedId = $('option:selected', this).attr('id');
  
    if (selectedId == "delivery") {
       var address= prompt("PLease Enter your delivery address");
       var deliveryfee= $('#delivery').val();
       alert("Your order will be delivered at: "+ address);
      alert("The delivery fee is:"+ deliveryfee);
    }
  });
});