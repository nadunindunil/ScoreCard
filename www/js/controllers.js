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

app.controller('ScoreSheetCtrl', function($scope, Authorization) {
  $scope.input = Authorization;
});
