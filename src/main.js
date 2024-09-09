import './core/moni';

moni.loaded(() => {
  moni('button').on('click', function() {
    const id = moni("#myDiv").css('color', 'red').attr('id');
    moni('#myDiv').attr('data-abc', 'xyz');
  });

});