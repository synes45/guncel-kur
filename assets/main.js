let data = fetch("https://finans.truncgil.com/today.json")
  .then(response => response.json())
  .then(veri => {
    $(".guncel").html("Güncelleme Tarihi : " + veri["Update_Date"]);
    $(".usd").html(veri["USD"].Alış + "₺");
    $(".usds").html(veri["USD"].Satış + "₺");
    $(".usdd").html(veri["USD"].Değişim);
    $(".eur").html(veri["EUR"].Alış + "₺");
    $(".eurs").html(veri["EUR"].Satış + "₺");
    $(".eurd").html(veri["EUR"].Değişim);
    $(".gram-altin").html(veri["gram-altin"].Alış + "₺");
    $(".gram-altins").html(veri["gram-altin"].Satış + "₺");
    $(".gram-altind").html(veri["gram-altin"].Değişim);
    $(".gumus").html(veri["gumus"].Alış + "₺");
    $(".gumuss").html(veri["gumus"].Satış + "₺");
    $(".gumusd").html(veri["gumus"].Değişim);
    $("#doviz").on("change", function() {
      var secilenDoviz = $("#doviz").val();
      var miktar = $(".miktar").val();
      if (miktar == "") {
        miktar = 0;
      }
      var dolar = veri[secilenDoviz].Alış.replace(",", ".");
      var dolarHesap = parseFloat(miktar) * parseFloat(dolar).toFixed(2);
      if (secilenDoviz == "USD") {
        $(".dolar").html(parseFloat(miktar) + " Dolar " + parseFloat(dolarHesap) + "₺").toFixed(2);
      } else if (secilenDoviz == "EUR") {
        $(".dolar").html(parseFloat(miktar) + " Euro " + parseFloat(dolarHesap) + "₺").toFixed(2);
      } else if (secilenDoviz == "gram-altin") {
        $(".dolar").html(parseFloat(miktar) + " Gram altın " + parseFloat(dolarHesap) + "₺").toFixed(2);
      } else {
        $(".dolar").html("0 ₺").toFixed(2);
      }

    })
    $(".miktar").keyup(function() {
      var secilenDoviz = $("#doviz").val();
      var miktar = $(".miktar").val();
      var dolar = veri[secilenDoviz].Alış.replace(",", ".");
      var dolarHesap = parseFloat(miktar) * parseFloat(dolar).toFixed(2);
      if (secilenDoviz == "USD") {
        $(".dolar").html(parseFloat(miktar) + " Dolar " + parseFloat(dolarHesap) + "₺").toFixed(2);
      } else if (secilenDoviz == "EUR") {
        $(".dolar").html(parseFloat(miktar) + " Euro " + parseFloat(dolarHesap) + "₺").toFixed(2);
      } else if (secilenDoviz == "gram-altin") {
        $(".dolar").html(parseFloat(miktar) + " Gram altın " + parseFloat(dolarHesap) + "₺").toFixed(2);
      } else {
        $(".dolar").html("0 ₺").toFixed(2);
      }

    })
  });
