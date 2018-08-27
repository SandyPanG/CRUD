var app = new function() {
    this.el = document.getElementById('skills');
    this.skills = ['HTML5','CSS3','JavaSript','REACT','VUEJS'];

    this.Count = function(data){
        var el = document.getElementById('counter');
        var skills = 'skills';

        if(data){
            if(data > 1) {
                name = 'skills';
            }
            el.innerHTML = data + '' + name;
        } else {
            el.innerHTML = 'No' + name;
            // console.log(skills);
            
        }
    };

    this.FetchAll = function () {
        var data = '';

        if(this.skills.length > 0) {
            for (i = 0; i < this.skills.length; i++) {
                data += '<tr>';
                data += '<td>' + this.skills[i] + '<td>';
                data += '<td><button onclick="app.Edit('+ i +')">Edit</button></td>';
                data += '<td><button onclick="app.Delete('+ i +')">Delete</button></td>';
                data += '</tr>';
                
            }
        }

        this.Count(this.skills.length);
        return this.el.innerHTML = data;
    };

    this.Add = function () {
        el = document.getElementById('add-skill');
        // Get the value
        var skills = el.value;
        if (skills) {
          // Add the new value
          this.skills.push(skill.trim());
          // Reset input value
          el.value = '';
          // Dislay the new list
          this.FetchAll();
        }
      };
      this.Edit = function (item) {
        var el = document.getElementById('edit-skill');
        // Display value in the field
        el.value = this.skills[item];
        // Display fields
        document.getElementById('spoiler').style.display = 'block';
        self = this;
        document.getElementById('saveEdit').onsubmit = function() {
          // Get value
          var skill = el.value;
          if (skill) {
            // Edit value
            self.skills.splice(item, 1, skill.trim());
            // Display the new list
            self.FetchAll();
            // Hide fields
            CloseInput();
          }
        }
      };
      this.Delete = function (item) {
        // Delete the current row
        this.skills.splice(item, 1);
        // Display the new list
        this.FetchAll();
      };
      
    }
    app.FetchAll();
    function CloseInput() {
      document.getElementById('spoiler').style.display = 'none';
    }
   