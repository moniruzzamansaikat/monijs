import './core/moni';

moni.loaded(() => {
  moni('button').on('click', function() {
    moni("#myDiv").classes().toggle('active');
  });

});