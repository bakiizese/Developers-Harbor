$('document').ready(function() {
    socket = io.connect("http://127.0.0.1:5000")
            socket.on('connect', function() {
                socket.emit('join_room', {
                    username: username,
                    room: room
                })
                                    
                $('.message_form').submit(function(event){
                    event.preventDefault();
                    let vl = $('.input_message').val().trim();
                    if (vl.length) {
                        socket.emit('send_ms', {
                            username: username,
                            room: room,
                            message: vl
                        })
                        $('.input_message').val('');
                        $('.input_message').focus();
                    }

                })
            })
            socket.on('join_anno', function(data) {
                $('.convoact .messages').append(data.username + ' have joind this room<br>')
            })

            socket.on('receive_ms', function(data) {
                $('.convoact .message').append(data.message + '<br>')
            })
    let announ = '<div class="convolist">\
                <ul><div class="personal">\
                <button class="chatconvo">\
                <h4 id="name">Harbors Announcment</h4>\
                <p id="messagen">announcment from harbor</p>\
                </button></div></ul></div>'
    
    let personal = '<div class="convolist">\
                    <ul>\
                    <div class="personal">\
                    <button class="chatconvo" name="bereket">\
                    <h4 id="name">Bereket</h4>\
                    <p id="messagen">hello how are you</p>\
                    </button>\
                    </div>\
                    <div class="personal">\
                    <button class="chatconvo" name="samiel">\
                    <h4 id="name">Samiel</h4>\
                    <p id="messagen">Whatsup! boy</p>\
                    </button>\
                    </div>\
                    <div class="personal">\
                    <button class="chatconvo" name="daniel">\
                    <h4 id="name">Daniel</h4>\
                    <p id="messagen">call me later</p>\
                    </button>\
                    </div>\
                    </ul></div>'
        
    let group = '<div class="convolist">\
                <ul><div class="personal">\
                <button class="chatconvo">\
                <h4 id="name">Backend group</h4>\
                <p id="messagen">help each other</p>\
                </button></div></ul></div>'
            
    let channel = '<div class="convolist">\
                <ul><div class="personal">\
                <button class="chatconvo">\
                <h4 id="name">frontend channel</h4>\
                <p id="messagen">support channel</p>\
                </button></div></ul></div>'

    let chelleng = '<div class="convolist">\
                    <ul><div class="personal">\
                    <button class="chatconvo">\
                    <h4 id="name">Crackme2</h4>\
                    <p id="messagen">Solve this Pazzle</p>\
                    </button></div></ul></div>'

    $('.search .searchls').html(announ);
    $('.sidebar ul .anno').css('background-color', '#3d3c44');
    $('.sidebar #butimag').on('click', function() {
        $('.sidebar #butimag').css('background-color', 'transparent')
        $(this).css('background-color', '#3d3c44')
        let name = $(this).attr('name')
        if (name == 'anno'){
            $('.search .searchls').html(announ)
        } else if (name == 'personal'){
            $('.search .searchls').html(personal)
        } else if (name == 'group'){
            $('.search .searchls').html(group)
        } else if (name == 'channel'){
            $('.search .searchls').html(channel)
        } else if (name == 'challeng'){
            $('.search .searchls').html(chelleng)
        }
        $('.convolist ul .personal .chatconvo').on('click', function() {
            $('.convolist ul .personal .chatconvo').css('background-color', 'transparent')
            $(this).css('background-color', '#302f37')
            let pname = $(this).attr('name')
            
            $('.convoact .chat').html(pname)
        })
    });
})
