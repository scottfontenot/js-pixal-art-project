// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//makeGrid function creates new grid
function makeGrid() {


    //code to clear the old grid
      $('tr').remove();
      $('td').remove();
    //code to create new grid
      var w;
      w = $('#inputWeight').val();
      var h;
      h = $('#inputHeight').val();
    
      var y = 0;
      while(y < h){
         $('#pixelCanvas').append('<tr></tr>');
         y++;
       }
    
     for(var x = 0; x < w; x++){
        $('tr').append('<td></td>');
     }
    
    //code to control coloring and erasing respond
     $('td').on('click',function(event){
        if($('#erase').is(':checked')){
           $(event.target).css('background', 'white')
        }
    
        else{
          $(event.target).css('background', $('#colorPicker').val());
        }
    
     });
    
    }
    
    
    
    //code to prevent the relaud of the page by submitting the form
    function formSubmit(event){
      event.preventDefault();
    }
    document.querySelector('#sizePicker').addEventListener('submit',formSubmit);
    
    //jQuery listener to call makeGrid function by submitting the size
    $('#sizePicker').on('submit',makeGrid);