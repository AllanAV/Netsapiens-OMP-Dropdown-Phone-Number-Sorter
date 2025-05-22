// User - Caller ID
$("#UserCallidNmbr").html($("#UserCallidNmbr option").sort(function (a, b) {
    return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
}));

// User - Emergency Caller ID
$("#UserCallidEmgr").html($("#UserCallidEmgr option").sort(function (a, b) {
    return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
}));

// Call Queue - Phone Number
$("#CallqueuePhonenumber").html($("#CallqueuePhonenumber option").sort(function (a, b) {
    return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
}));

// Conference Bridge - Direct Phone Number
$("#ConferencePhonenumber").html($("#ConferencePhonenumber option").sort(function (a, b) {
    return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
}));

//Domain - DomainCallidNmbr
$("#DomainCallidNmbr").html($("#DomainCallidNmbr option").sort(function (a, b) {
    return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
}));