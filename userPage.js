        loadNewContent();
        getUserData("Aquarial");
document = `<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- <link rel="shortcut icon" type="image/png" href="https://i.ibb.co/KrjFYVc/Designs-7-3.png"> -->
    <title>Scratch Redesign</title>
    <link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="/test.css">
</head>

<body>

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

    <script>
        var about;
        loadNewContent();
        getUserData("Aquarial");
        // use forEach to replace the first letter of each <li> with an <a> element that links to redesigned user page


        function loadNewContent() {
            $.ajax("https://cors.bridged.cc/https://scratch.mit.edu/messages/ajax/user-activity/?user=Za-Chary&max=5", {
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
                document.querySelector("#about").innerHTML = gudata.profile.bio.replace(/\n/g, "<br>");
                document.querySelector("#working").innerHTML = gudata.profile.status.replace(/\n/g, "<br>");
            });
        }
    </script>
</body>

</html>`
        // use forEach to replace the first letter of each <li> with an <a> element that links to redesigned user page


        function loadNewContent() {
            $.ajax("https://cors.bridged.cc/https://scratch.mit.edu/messages/ajax/user-activity/?user=Za-Chary&max=5", {
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
                document.querySelector("#about").innerHTML = gudata.profile.bio.replace(/\n/g, "<br>");
                document.querySelector("#working").innerHTML = gudata.profile.status.replace(/\n/g, "<br>");
            });
        }
