// # Zirality #
// Measure virality by tracking when users share links to your website.
// Available FREE (MIT license) at www.zirality.com 

var ziralityID = localStorage['zirality:ID'];
var urlHash = window.location.hash;
window.dataLayer = window.dataLayer || [];

if (!ziralityID){
    var ziralityID = new Date().getTime().toString(36).substring(0,5)+Math.random().toString(36).substring(2,7)+'-';
    localStorage['zirality:ID'] = ziralityID;
}

if (urlHash.search(/#\w{10}-$/) == 0) {
    var referralID = urlHash.substring(1);

    if (referralID == ziralityID) {
        // bookmarked link
        window.dataLayer.push({
            'ziralityLabel': 'bookmarked',
            'ziralityID': ziralityID,
            'event': 'zirality'
        });

    } else {
        // viral referral
        window.dataLayer.push({
            'ziralityLabel': 'referral',
            'referralID': referralID,
            'ziralityID': ziralityID,
            'event': 'zirality'
        });
    }
} else {
    // normal pageview
    window.dataLayer.push({
        'ziralityLabel': 'pageview',
        'ziralityID': ziralityID,
        'event': 'zirality'
    });
}

window.location.hash = ziralityID;