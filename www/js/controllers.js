/**
 * Created by NADUN on 9/28/2015.
 */



app.controller('DataEntryCtrl',
function($scope , $rootScope ){



  $scope.getData = function(){
    var pl1 = $scope.Fplayer;
    var pl2 = $scope.Splayer;
    $rootScope.p1 = pl1;
    $rootScope.p2 = pl2;
    $rootScope.sets = $scope.sets;
    $rootScope.Fstriker = $scope.playerSelect;

  }

});




app.factory('Authorization', function() {

  authorization = {};
  authorization.Fplayer = "";
  authorization.Splayer = "";
  return authorization;
});

app.controller('DataEntryCtrl', function($scope,  Authorization) {
  $scope.input = Authorization;
});

//app.controller('ScoreSheetCtrl', function($scope, Authorization) {
//  $scope.input = Authorization;
//  var v1 = $scope.val1= 0;
//  var v2 = $scope.val2= 0;
//
//  $scope.increment1=function(){
//    //value = value + 1;
//    //v1=v1+1;
//    $scope.val1++;
//
//  };
//  $scope.increment2=function(){
//    $scope.val2++;
//
//  };
//
//  $scope.decrement1=function(){
//    if($scope.val1 > 0){
//      $scope.val1--;
//    }
//
//
//  };
//
//  $scope.decrement2=function(){
//    if($scope.val2 > 0){
//      $scope.val2--;
//    }
//  };
//
//  $scope.init = function () {
//    if (val1 >= 11 || val2 >= 11) {
//      if (val1 - val2 > 1) {
//        // player one won!
//      }
//      else {
//        // player two won!
//      }
//    }
//  };
//
//
//
//});


app.controller('ScoreSheetCtrl', function($scope, $ionicModal,Authorization) {
  console.log('ScoreSheetCtrl');



  $scope.input = Authorization;
  var v1 = $scope.val1= 0;
  var v2 = $scope.val2= 0;

  $scope.increment1=function(){
    //value = value + 1;
    //v1=v1+1;
    $scope.val1++;
    init();

  };
  $scope.increment2=function(){
    $scope.val2++;
    init();

  };

  $scope.decrement1=function(){
    if($scope.val1 > 0){
      $scope.val1--;
    }


  };

  $scope.decrement2=function(){
    if($scope.val2 > 0){
      $scope.val2--;
    }
  };

  init();


  ///////////////////////////////////////////////////
  $ionicModal.fromTemplateUrl('partials/myForm.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function(){
    $scope.modal.show();
  };

  $scope.closeModal = function(){
    $scope.modal.hide();
  };

  function init () {
    if ($scope.val1 >= 11 || $scope.val2 >= 11) {
      if ($scope.val1 - $scope.val2 > 1) {
        // player one won!

        $scope.modal.show();

      }
      else if ($scope.val2 - $scope.val1 > 1) {
        // player two won!

        $scope.modal.show();
      }
    }
  }




});
