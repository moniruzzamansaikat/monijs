import './core/moni';

moni.loaded(() => {
  moni('button').on('click', function() {
    const name = moni('div').data('name');
    
    console.log(name);
  });

});