angular.module('likedImage').component('likedImage', {
  templateUrl: 'app/liked-image/liked-image.template.html',
  controller: [
    function LikedImageController() {
      const self = this;
      self.likedImages = JSON.parse(localStorage.getItem('imageArr'));
      console.log(self.likedImages);

      self.clearStorage = function clearStorage() {
        self.likedImages = [];
        localStorage.removeItem('imageArr');
      };
    }
  ]
});
