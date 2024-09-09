import './core/moni';

moni.loaded(() => {

  moni('form').on('submit', function(e) {
    e.preventDefault();
    
    const username = moni('input').val();
    const coding   = moni('select').val()

    console.log(username);
    console.log(coding);

    moni('select').val('js');
    moni('input').val('');
    moni('textarea').val('message');
  });
  
});