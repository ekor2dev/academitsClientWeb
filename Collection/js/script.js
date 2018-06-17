$(document).ready(function () {
    $("#buttonTask1").click(function () {
        sortAndFilter()
    });

    $("#buttonTask2").click(function () {
        getSquares();
    });

    function sortAndFilter() {
        var size = 15;
        var initial = Array(size).fill(5).map(function () {
            return parseInt((Math.random() * 100));
        });

        $("#initialTask1").text(initial);
        $("#3sorted").text(initial.slice(0).sort().reverse());
        $("#first5").text(initial.slice(0, 5));
        $("#last5").text(initial.slice(0).reverse().slice(0, 5));
        $("#evensSum").text(initial.filter(function (n) {
            return n % 2 === 0;
        }).reduce(function (a, b) {
                return a + b;
            }, 0
        ))
        ;
    }

    function getSquares() {
        var size = 100;
        var array = Array(size).fill(5).map(function (n, i) {
                return i + 1;
            }
        );

        $("#initialTask2").text(array);
        $("#outputTask2").text(array.map(function (n) {
                return n * n;
            })
        )
        ;


    }

});


