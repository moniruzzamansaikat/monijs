import './core/moni';

moni.loaded(() => {

  moni('p').first().css('color', 'red');


});