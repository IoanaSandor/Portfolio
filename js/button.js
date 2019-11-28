/* --------------- JavaScript Code for Color Changing Button ---------------- */

  //Variable to check if color scheme is set to light or dark
  var light = true;
  //Variables of objects by tag
  var main_title = document.getElementsByTagName("H1");
  var titles = document.getElementsByTagName("H2");
  var body_copy = document.getElementsByTagName("P");
  var footer = document.getElementsByTagName("FOOTER");
  var body = document.getElementsByTagName("BODY");
  //Variables of objects by class
  var nagivation = document.getElementsByClassName("navigation");
  var nav_div = document.getElementsByClassName("nav-div");
  var contact_info = document.getElementsByClassName("contact-info");
  var job_title = document.getElementsByClassName("job-title");
  var details_button = document.getElementsByClassName("details");
  var desc = document.getElementsByClassName("desc");
  var post = document.getElementsByClassName("post-resume");
  var pre = document.getElementsByClassName("pre-resume");

  //Function to change color scheme
  function changeColor() {
    //If the color scheme is set to light
    if (light==true){
      //Change the background color
      document.body.style.backgroundColor = "#001D21";
      //Cycle through each element and change the color
      var i = 0;
      while (i < titles.length){
        titles[i].style.color = "#FD9937";
        i++;
      }

      var j = 0;
      while (j < nagivation.length){
        nagivation[j].style.color = "white";
        j++;
      }

      var k = 0;
      while (k < nav_div.length){
        nav_div[k].style.color = "white";
        k++;
      }

      var l = 0;
      while (l < body_copy.length){
        body_copy[l].style.color = "white";
        body_copy[l].style.backgroundColor = "#001D21";
        l++;
      }

      var m = 0;
      while (m < contact_info.length){
        contact_info[m].style.color = "#FD9937";
        m++;
      }

      var n = 0;
      while (n < job_title.length){
        job_title[n].style.color = "white";
        n++;
      }

      var o = 0;
      while (o < details_button.length){
        details_button[o].style.backgroundColor = "#558889";
        o++;
      }

      var p = 0;
      while (p < desc.length){
        desc[p].style.backgroundColor = "#001D21";
        p++;
      }

      var q = 0;
      while (q < post.length){
        post[q].style.backgroundColor = "transparent";
        q++;
      }

      var r = 0;
      while (r < pre.length){
        pre[r].style.backgroundColor = "transparent";
        r++;
      }

      //Single elements color change
      main_title[0].style.color = "#FD6826";
      footer[0].style.backgroundColor = "#0F373F";
      body[0].style.backgroundImage = "url('img/doodles/dark_doodles.png')";

      //Changes the light bulb icon
      document.getElementById("light").src = "img/icons/on.png";
      document.getElementById("dim").innerHTML = "brighten the lights";
      document.getElementById("dim").style.color = "#FD9937";

      //Set light variable to false to indicate the dark color scheme is active
      light = false;

    //If the color scheme is set to dark
    } else if (light==false) {
      //Change the background color
      document.body.style.backgroundColor = "white";
      //Cycle through each element and change the color
      var i = 0;
      while (i < titles.length){
        titles[i].style.color = "#7B8C00";
        i++;
      }

      var j = 0;
      while (j < nagivation.length){
        nagivation[j].style.color = "#7B8C00";
        j++;
      }

      var l = 0;
      while (l < body_copy.length){
        body_copy[l].style.color = "#757575";
        body_copy[l].style.backgroundColor = "white";
        l++;
      }

      //Had to change order so that when switching color schemes, the body_copy doesn't override the nav_div
      var k = 0;
      while (k < nav_div.length){
        nav_div[k].style.color = "#7B8C00";
        k++;
      }

      var m = 0;
      while (m < contact_info.length){
        contact_info[m].style.color = "#757575";
        m++;
      }

      var n = 0;
      while (n < job_title.length){
        job_title[n].style.color = "#757575";
        n++;
      }

      var o = 0;
      while (o < details_button.length){
        details_button[o].style.backgroundColor = "#E45F00";
        o++;
      }

      var p = 0;
      while (p < desc.length){
        desc[p].style.backgroundColor = "white";
        p++;
      }

      var q = 0;
      while (q < post.length){
        post[q].style.backgroundColor = "transparent";
        q++;
      }

      var r = 0;
      while (r < pre.length){
        pre[r].style.backgroundColor = "transparent";
        r++;
      }

      //Single elements color change
      main_title[0].style.color = "#E45F00";
      footer[0].style.backgroundColor = "#7B8C00";
      body[0].style.backgroundImage = "url('img/doodles/light_doodles.png')";

      //Changes the light bulb icon
      document.getElementById("light").src = "img/icons/off.png";
      document.getElementById("dim").innerHTML = "dim the lights";
      document.getElementById("dim").style.color = "#757575";

      //Set light variable to true to indicate the light color scheme is active
      light = true;
    }
  }

  //Adding Hover Effects
  //All OnHover Effects
  function onHover_nav(x) {
    if(light==true){
      x.style.color="#C9C937";
    } else if (light==false){
      x.style.color="#FD9937";
    }
  }

  function onHover_button(x) {
    if(light==true){
      x.style.color="#E45F00";
      x.style.backgroundColor="white";
      x.style.borderColor="#E45F00";
    } else if (light==false){
      x.style.color="#558889";
      x.style.backgroundColor="#001D21";
      x.style.borderColor="#558889";
    }
  }

  //All OffHover Effects
  function offHover_nav(x) {
    if(light==true){
      x.style.color="#7B8C00";
    } else if (light==false){
      x.style.color="white";
    }
  }

  function offHover_button(x) {
    if(light==true){
      x.style.color="white";
      x.style.backgroundColor="#E45F00";
    } else if (light==false){
      x.style.color="white";
      x.style.backgroundColor="#558889";
    }
  }
