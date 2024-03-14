$('document').ready(function() {
    let announ = '<div class="convolist">\
    <ul><div class="personal">\
    <button class="chatconvo">\
    <h4 id="name">Harbors Announcment</h4>\
    <p id="messagen">announcment from harbor</p>\
    </button></div></ul></div>'

    let emp = '<div class="convolist">\
    <ul><div class="personal">\
    <button class="chatconvo">\
    <h4 id="name"></h4>\
    <p id="messagen"></p>\
    </button></div></ul></div>'

    let group = '<div class="convolist">\
    <ul><div class="personal">\
    <button name="group" class="chatconvo">\
    <h4 id="name">Backend group</h4>\
    <p id="messagen">help each other</p>\
    </button></div></ul></div>'

    let channel = '<div class="convolist">\
    <ul><div class="personal">\
    <button name="channel" class="chatconvo">\
    <h4 id="name">frontend channel</h4>\
    <p id="messagen">support channel</p>\
    </button></div></ul></div>'

    let groupcon = '<div><label class="chat">Backend Group Chat</label>\
        <div class="history"><div class="messages"></div>\
        </div><div class="messagesend"><form class="message">\
        <input class="input_message" type="text" placeholder="Send Message Here">\
        <button type="submit">Send</button></form></div></div>'

    let channelcon = '<div><label class="chat">Channel</label>\
    <div class="history"><div class="messages"></div>\
    </div><div class="messagesend"><form class="message">\
    <input class="input_message" type="text" placeholder="Send Message Here">\
    <button type="submit">Send</button></form></div></div>'


    $('.search .searchls').html(group);
    $('.sidebar ul .groups').css('background-color', '#3d3c44');
    $('.sidebar #butimag').on('click', function() {
    $('.sidebar #butimag').css('background-color', 'transparent')
    $(this).css('background-color', '#3d3c44')
    let name = $(this).attr('name')
    if (name == 'anno'){
    $('.search .searchls').html(announ)
    } else if (name == 'personal'){
    $('.search .searchls').html(emp)
    } else if (name == 'group'){
    $('.search .searchls').html(group)
    } else if (name == 'channel'){
    $('.search .searchls').html(channel)
    } else if (name == 'challeng'){
    $('.search .searchls').html(emp)
    }
    $('.convolist ul .personal .chatconvo').on('click', function() {
    ('.convolist ul .personal .chatconvo').css('background-color', 'transparent')
    $(this).css('background-color', '#302f37')
    var pname = $(this).attr('name');
    
    if (pname == 'group') {
        $('.convoact .channel').hide()
        $('.convoact .group').show()
        
    } else if (pname == 'channel')
        $('.convoact .group').hide()
        $('.convoact .channel').show()
    })
    
    });
})