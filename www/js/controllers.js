angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $location, $ionicHistory, AgendaItems) {
	$ionicHistory.clearHistory();
	$ionicHistory.clearCache();
	$scope.agendaItems = AgendaItems.getUserSpecific();
})

.controller('LectureCtrl', function($scope, $state, $ionicHistory, AgendaItems) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});
	$ionicHistory.clearHistory();
	$ionicHistory.clearCache();
	$scope.agendaItems = AgendaItems.all();
	$scope.remove = function(item) {
		AgendaItems.remove(item);
	};
	$scope.add = function (item) {
		AgendaItems.add(item);
	};
	var params = $state.params;
	if (params && params.itemId !== "-1") {
		$state.transitionTo("tab.lecture-detail", params);
	}
})

.controller('LectureDetailCtrl', function($scope, $stateParams, AgendaItems) {
  $scope.agendaItem = AgendaItems.get($stateParams.itemId);
})

.controller('SpeakersCtrl', function($scope, $state, $ionicHistory, Speakers) {
	$ionicHistory.clearHistory();
	$ionicHistory.clearCache();
	$scope.speakers = Speakers.all();
	var params = $state.params;
	if (params && params.speakerId !== "-1") {
		$state.transitionTo("tab.speaker-detail", params);
	}
})

.controller('SpeakerDetailCtrl', function($scope, $stateParams, Speakers) {
	$scope.speaker = Speakers.get($stateParams.speakerId);
});

