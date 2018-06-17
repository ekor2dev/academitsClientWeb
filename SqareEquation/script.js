$(document).ready(function() {
    $("input").change(function () {
        calculate()
    });

    function calculate(){
        var a = $("input#a").val();
        var b =  $("input#b").val();
        var c =  $("input#b").val();

        var D = b*b - 4*a*c;
        var x1 = (-b + Math.sqrt(D))/2/a;
        var x2 = (-b - Math.sqrt(D))/2/a;
        $("#x1").text(x1.toFixed(2));
        $("#x2").text(x2.toFixed(2));
    }

});


