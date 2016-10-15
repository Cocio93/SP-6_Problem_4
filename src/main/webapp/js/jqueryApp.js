$(document).ready(function () {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:8084/AngularJquery/api/member/get",
        data: 'data',
        success: function (data) {
            $.each(data, function (key, value) {
                $("#members").append("<tr><td>" + value.id +
                        "</td><td>" + value.name +
                        "</td><td>" + value.age +
                        "</td><td>" + value.eyeColor +
                        "</td><td>" + value.email +
                        "</td><td>" + friendsToString(value.friends) +
                        "</td></tr>");
            });
        }
    });
});

function friendsToString(friends) {
    var res = "";
    for (var i = 0; i < friends.length; i++) {
        res += friends[i].name + ", ";
    }
    return res;
}



