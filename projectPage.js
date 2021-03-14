        var path = window.location.pathname;
        var n = (window.location.pathname.includes('projects/')) && (window.location.pathname.split("/").filter(a => a.length > 0).length == 2);
        var hrefvar = window.location.href;
        TestProjectId(hrefvar.replace("https://scratchredesign.ml/projects", ""));
        if (n) {
            if (hrefvar[hrefvar.length - 1] == '/') {
                window.location.href = hrefvar.slice(0, -1);
                clear();
                window.setInterval(100, clear);
            } else {
                $.getJSON("https://cors.bridged.cc/https://api.scratch.mit.edu/projects" + hrefvar.replace("https://scratchredesign.ml/projects", ""), function(data) {

                });
                var element = `<div class="what" id="what">
            <iframe name="site" id="site" height="900" width="750"></iframe>
        </div>`;
                document.title = 'Scratch Project';
                /*  }
                } else {
                  var element = `<div class="what" id="what">
                        <div class="what-c">
                            <h1>404 Error.</h1>
                            <p>Oops! That's a 404.</p>
                            <div class="home">
                                <a href="/"><button href="/" class="frontbutton" style="background-image: none !important; padding-left: 24px; margin-top: 30px;">Go back home</button></a>
                            </div>
                        </div>
                        <div class="img">
                            
                        </div>
                    </div>
                    `;

                    document.title = '404 Error';
                } */


                document.body.innerHTML = element + document.body.innerHTML;
                document.getElementById("site").src = "https://scratch.mit.edu/projects" + hrefvar.replace("https://scratchredesign.ml/projects", "") + "/embed";

                function clear() {
                    document.querySelector('body').innerHTML = '';
                    // Clears 'undefined' text   
                }

                function TestProjectId(pID) {

                    var http = new XMLHttpRequest();
                    http.open('HEAD', "https://cors.bridged.cc/https://api.scratch.mit.edu/projects/" + pID, false);
                    http.send();
                    if (http.status != 404)
                        console.log('good');
                    else
                        console.log('404');

                }
            }
        }
