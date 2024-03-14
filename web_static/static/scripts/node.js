$('document').ready(function() {
    let roomw = 'channel'
    var rd4 = ''
    if (room == 'group') {
        rd4 = '.group'
    } else if (room == 'channel') {
        rd3 = '.channel'
    }
    
    //$('.convoact .messagesend .message').on('click', function() {
      //  var j = $(this).attr('name');

        //if(j == 'group') {
   //         rd2 = '.group'
   //     } else if (j == 'channel') {
    //        rd2 = '.channel'
    //    } 
   //} )
    
    
    socket = io.connect("http://127.0.0.1:5000")
    //$('.convoact .messagesend .message').on('click', function() {  
    $('.convolist ul .personal .chatconvo').mousedown(function() {
        alert('s')
        var j = $(this).attr('name');
        var rd = ''
        if (j == 'group') {
            rd = '.group'
        } else if (j == 'channel') {
            rd = '.channel'
        }
        alert(j)
        
        

        socket.on('connect', function() {
            socket.emit('join_room', {
                username: username,
                room: j
            })
            
            $('.convoact '+ rd +' .messagesend .message').submit(function(event){
                event.preventDefault();
                
                let vl = $('.convoact '+ rd +' .messagesend .input_message').val().trim();
                
                if (vl.length) {
                    socket.emit('send_ms', {
                        username: username,
                        room: j,
                        message: vl
                    })
                    $('.convoact '+ rd +' .messagesend .input_message').val('');
                    $('.convoact '+ rd +' .messagesend .input_message').focus();
                }

            })
        })
        
        let nav = '.convoact '+ rd +' .history .messages';
        socket.on('join_anno', function(data) {
            $(nav).append(data.username + ' have joind this room<br>')
        })

        socket.on('receive_ms', function(data) {
            $(nav).append(data.message + '<br>')
        })
    });
})
