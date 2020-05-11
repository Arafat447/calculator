
//calculator project 
function insertNumbers(number){
    var existingNumber = $("#result").val();
    $("#result").val(existingNumber + number);
}
function clearNumbers(){
    $("#result").val('');
}
function calculate(){
    var result = eval($("#result").val());
    $("#result").val(result);
}
function deleteNumbers() {
    var presentValue = $("#result").val();
    $("#result").val(presentValue.slice(0,-1));
}