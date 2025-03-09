jQuery(document).ready(function($) {
  "use strict"; 
  $('#send_message').click(function(e){

            e.preventDefault();
            
            var error = false;
            var jw_name = $('#name').val();
            var jw_email = $('#email').val();
            var jw_subject = $('#subject').val();
            var jw_message = $('#your_message').val();
            
            if(jw_name.length == 0){
                var error = true;
                $('#name_error').fadeIn(500);
            }else{
                $('#name_error').fadeOut(500);
            }

            if(jw_email.length != 0 && validateEmail(jw_email)){
                 $('#email_error').fadeOut(500); 
            }else{
                var error = true;
                $('#email_error').fadeIn(500);
            }
            if(jw_subject.length == 0){
                var error = true;
                $('#subject_error').fadeIn(500);
            }else{
                $('#subject_error').fadeOut(500);
            }
            if(jw_message.length == 0){
                var error = true;
                $('#message_error').fadeIn(500);
            }else{
                $('#message_error').fadeOut(500);
            }
            
            if(error == false){

               $('#send_message').attr({'disabled' : 'true', 'value' : 'Отправка...' });

               $.post("contact.php", $("#contact-form").serialize(),function(result){

                    if(result == 'sent'){

                        $('#name').remove();
                        $('#email').remove();
                        $('#subject').remove();
                        $('#your_message').remove();
                        $('#submit').remove();

                        $('#mail_success').fadeIn(500);
                    }else{

                        $('#mail_fail').fadeIn(500);

                        $('#send_message').removeAttr('disabled').attr('value', 'Напишите что-нибудь!');
                    }
                });
           }
       });    
});


        function validateEmail(sEmail) {
               var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
               if (filter.test(sEmail)) {
                   return true;
               }
               else {
                   return false;
               }
           }