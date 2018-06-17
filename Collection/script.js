$(document).ready(function () {
    $("#buttonTask1").click(function () {
        sortAndFilter()
    });

    $("#buttonTask2").click(function () {
        getSquares();
    })

    function sortAndFilter() {
        var size = 15;
        var initial = Array(size).fill(5).map(() => Number.parseInt((Math.random() * 100)));

        console.log("21212222");
        $("#initialTask1").text(initial);
        $("#sorted").text(initial.slice().sort().reverse());
        $("#first5").text(initial.slice(0, 5));
        $("#last5").text(initial.slice().reverse().slice(0, 5));
        $("#evensSum").text(initial.filter(n => n % 2 == 0).reduce((a,b) => a+b, 0));
    }

    function getSquares() {
        var size = 100;
        var array = Array(size).fill(5).map((n, i) => i + 1)

        $("#initialTask2").text(array);
        $("#outputTask2").text(array.map(n => n*n));


    }

});


