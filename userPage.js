        loadActivity(window.location.href.replace("https://scratchredesign.ml/users/", ""));
        getUserData(window.location.href.replace("https://scratchredesign.ml/users/", ""));
document.body.innerHTML = `

    <div class="topgrid">
        <div class="aboutworking">
            <div class="about">
                <h1>About Me</h1>
                <p id="about"></p>
            </div>
            <div class="working">
                <h1>What I'm Working On</h1>
                <p id="working"></p>
            </div>
        </div>
        <div class="featured">

        </div>
        <div class="activity">
            <div id="ul2data"></div>
        </div>
    </div>
`
        // use forEach to replace the first letter of each <li> with an <a> element that links to redesigned user page



        function loadActivity(username) {
            $.ajax("https://cors.bridged.cc/https://scratch.mit.edu/messages/ajax/user-activity/?user=" + username + "&max=5", {
                success: function(response) {
                    $("#ul2data").html(response);
                }
            });
        };

        function getWord(string, index) {
            let words = string.split(" ");
            return words[index - 1];
        }

        function getUserPic(username) {
            $.getJSON("https://cors.bridged.cc/https://api.scratch.mit.edu/users/" + username, function(udata) {
                var data = udata.profile.images["90x90"];
                return data;
            });
        }

        function getUserData(username) {
            $.getJSON("https://cors.bridged.cc/https://api.scratch.mit.edu/users/" + username, function(gudata) {
                    const regex = /@([\w\d_-]*)(?:[^\.'<\bbr\b/*>\s])*/g;
                   
                    
                document.querySelector("#about").innerHTML = urlify(gudata.profile.bio.replace(/\n/g, "<br>").replaceAll(regex, '<a href="https://scratchredesign.ml/users/$1">$&</a>'));
                document.querySelector("#working").innerHTML = urlify(gudata.profile.status.replace(/\n/g, "<br>").replaceAll(regex, '<a href="https://scratchredesign.ml/users/$1">$&</a>'));
            });
        }

function urlify(text) {
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, function(url) {
        return '<a href="' + url + '">' + url + '</a>';
    });
}
