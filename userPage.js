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
