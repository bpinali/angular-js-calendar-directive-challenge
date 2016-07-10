angular.module('calendarDemoApp', [])

.directive('calendar', function() {
    return {
        restrict: 'E',
        templateUrl: 'calendar.html',
        controller: function controller($scope, $element, $attrs) {

            var date = new Date();
            var currentMonth = date.getMonth();
            var currentYear = date.getFullYear();

            $scope.selectedMonth = currentMonth;
            $scope.selectedYear = currentYear;

            $scope.updateCalendar = function() {
                currentMonth = $scope.selectedMonth;
                $scope.createCalendar($scope.selectedYear, $scope.selectedMonth);
            };

            $scope.createCalendar = function(year, month) {
                $scope.range = CalendarRange.getMonthlyRange(new Date(year, month));
                $scope.range.days.forEach(addGray);
            };

            $scope.createCalendar(currentYear, currentMonth);

            function addGray(element, index, array) {
                if (element.month < currentMonth || element.month > currentMonth) {
                    element.monthClass = "future-past-gray";
                }
            }
        }
    };
});
