let data = fetch("https://finans.truncgil.com/today.json")
.then(response=>response.json())
.then(veri=>{
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
});