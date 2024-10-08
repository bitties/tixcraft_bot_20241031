const storage = chrome.storage.local;
var settings = null;

function cityline_shows_buy()
{
    let ret=false;
    if($("#buyTicketBtn").length>0 && settings) {
        //console.log("clicking");
        if (settings.webdriver_type == "nodriver") {
            const selector="#buyTicketBtn";
            webdriver_click(selector);
        }
    }

    storage.get('status', function(items) {
        if (items.status && items.status == 'ON') {
            setTimeout(() => {
                cityline_shows_buy()
            }, "300");
        }
    });    
}


storage.get('settings', function(items) {
    if (items.settings) {
        settings = items.settings;
    }
});

storage.get('status', function(items) {
    if (items.status && items.status == 'ON') {
        cityline_shows_buy();
    } else {
        console.log('no status found');
    }
});

$("#s_footer").remove();
$("footer").remove();
