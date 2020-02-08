angular.module('imageList').component('imageList', {
  templateUrl: 'app/image-list/image-list.template.html',
  controller: [
    '$http',
    function ImageListController($http) {
      const self = this;

      self.limit = 15;
      self.curPage = 1;
      self.likedImages = [];

      $http
        .get(`https://picsum.photos/v2/list`, { cache: true })
        .then(res => (self.images = res.data))
        .catch(err => console.log(err));

      self.changeImgCount = function changeImgCount(count) {
        self.limit = count;
        $http
          .get(`https://picsum.photos/v2/list?limit=${self.limit}`, {
            cache: true
          })
          .then(res => (self.images = res.data))
          .catch(err => console.log(err));
      };

      self.nextPage = function nextPage() {
        self.curPage += 1;
        $http
          .get(`https://picsum.photos/v2/list?page=${self.curPage}`, {
            cache: true
          })
          .then(res => (self.images = res.data))
          .catch(err => console.log(err));
      };

      self.prevPage = function prevPage() {
        if (self.curPage >= 1) {
          self.curPage -= 1;
          $http
            .get(`https://picsum.photos/v2/list?page=${self.curPage}`, {
              cache: true
            })
            .then(res => (self.images = res.data))
            .catch(err => console.log(err));
        }
      };

      self.likeImage = function likeImage(img) {
        img.isLiked = true;
        if (self.likedImages.indexOf(img) === -1) {
          self.likedImages.push(img);
          localStorage.setItem('imageArr', JSON.stringify(self.likedImages));
        }

        console.log(self.likedImages);
      };
    }
  ]
});
