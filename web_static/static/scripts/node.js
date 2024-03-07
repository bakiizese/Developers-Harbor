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

            console.log('inin');
            socket.on('join_anno', function(data) {
                $('.message').append(data.username + ' have joind this room<br>')
            })

            socket.on('receive_ms', function(data) {
                $('.message').append(data.message + '<br>')
            })
})
