import './core/moni';

moni.loaded(() => {
  moni('button').on('click', function() {
    moni('div').add('<strong>Small</strong>', 4);
    moni('div').add('<p>Paragraph</p>');
  });

});