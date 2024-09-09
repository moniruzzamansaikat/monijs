import './core/moni';

moni.loaded(() => {
  moni('#myDiv')
    .classes()
    .add('cdb')
    .add('fuck')
    .css('color', 'red')
    .css('font-weight', 'bold')
    .classes()
    .add('nice')
    .remove('btn-danger')
    .css('background-color', 'purple')
    .css('padding', '1rem')
    .remove()
})