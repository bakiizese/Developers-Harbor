alert('inside')
$('document').ready(function() {
let room = 'group'
var rd = ''
if (room == 'group') {
    rd = '.group'
} else if (room == 'channel') {
    rd = '.channel'
}
    
    
socket = io.connect("http://127.0.0.1:5006")
    socket.on('connect', function() {
        socket.emit('join_room', {
            username: username,
            room: room
        })
        
        $('.convoact '+ rd +' .messagesend .message').submit(function(event){
            event.preventDefault();
            
            let vl = $('.convoact '+ rd +' .messagesend .input_message').val().trim();
            
            if (vl.length) {
                socket.emit('send_ms', {
                    username: username,
                    room: room,
                    message: vl
                })
                $('.convoact '+ rd +' .messagesend .input_message').val('');
                $('.convoact '+ rd +' .messagesend .input_message').focus();
            }

        })
    })
    let nav = '.convoact '+ rd +' .history .messages';
    socket.on('join_anno', function(data) {
        
    })
    socket.on('receive_ms', function(data) {
        let nm = $('.convoact '+ rd +' .messagesend .message button').attr('sname')
        if (nm != data.username) {
            $(nav).append('&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;'+data.username + ':- ' + data.message + '<br>')
        } else {
            $(nav).append(data.username + '  :- ' + data.message + '<br>')
        }   
    }) 
})
