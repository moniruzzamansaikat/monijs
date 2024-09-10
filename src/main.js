import './core/moni';

moni.loaded(() => {

  moni('form').on('submit', function(e) {
    e.preventDefault();
    const values = moni('form').values();
    console.log(values);
  });

});