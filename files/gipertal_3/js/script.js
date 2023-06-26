$(document).ready(function() {

    $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency
        $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });

    
    function t(t, n) {
        var e = t - .5 + Math.random() * (n - t + 1);
        return e = Math.round(e)
    }

    function n(n, e) {
        var a = t(n, e),
            s = a - t(5, 9);
        $(".op_on").text(a), $(".op_raz").text(s)
    }
    var e = (new Date).getTime() + 24e5;
    $(".countdown__wrap").countdown(e, function(t) {
        $(this).html(t.strftime('<div class="counter__hour"><span class="counter__num_item">%H</span><span class="header__counter text-bottom">часов</span></div><div class="counter__min"><span class="counter__num_item">%M</span><span class="header__counter text-bottom">минут</span></div><div class="counter__sec"><span class="counter__num_item">%S</span><span class="header__counter text-bottom">секунд</span></div>'))
    }), n(35, 45), setInterval(n, 15e3, 35, 45)
});