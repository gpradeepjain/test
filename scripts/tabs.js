/*!
 * --------------------------------------- START OF LICENSE NOTICE ------------------------------------------------------
 * Copyright (c) 2018 Software Robotics Corporation Limited ("Soroco"). All rights reserved.
 *
 * NO WARRANTY. THE PRODUCT IS PROVIDED BY SOROCO "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 * SHALL SOROCO BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE PRODUCT, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
 * DAMAGE.
 * ---------------------------------------- END OF LICENSE NOTICE -------------------------------------------------------
 *
 *   Candidate: FULL NAME - <EMAIL ID>
 *   Purpose: Soroco Front-end hands on assignment
 */


 /*
    Function to render existing tab, can be called anywhere in the application with a user object of type { "name": "", "login": }
 */
function renderTab(user){
  if(states.tabsList.length > 3){ // add conditions to support dynamic width of tabs
    // combined width of tabs are more than allowed
    renderSeeMore();
  } else {
    let temp =
    `<div class="src-tab">
      <div class="tab-line1">` + user.name + `</div>
      <div class="tab-line2">` + user.login + `</div>
      <i class="material-icons">close</i>
    </div>`;

    $("#dynamic-tabs").append(temp);
  }
}

/*
   Function to create a new tab and takes values from the input fields on UI
*/
function createTab(){
  let user = {
    'name': $('#user-name').val(),
    'login': $('#user-login').val()
  }
  states.tabsList.push(user); // append newly created tab to "tabsList"
  renderTab(user);

  // reset "Add transaction" fields
  $('#user-name').val('');
  $('#user-login').val('');
}

/*
   Function to close a tab
*/
function closeTab(){

}

/*
   Function to set a particular tab-heading as active when clicked on it
*/
function setActiveTab(){

}

/*
   Function to fetch/render tab details of particular tab while switching between tabs
*/
function getTabDetails(){

}


/*
   Function to render See more tabs when the length of tabs is more than 3. Please try to make this based on the screen width available
   and compute the number of tabs to be visible on the screen accordingly.
*/
function renderSeeMore(){
  if($('#more-list').length){
      $('#more-count').text((states.tabsList.length - 3) + ' More');
  } else {
    var temp =
    `<div class = "src-tab">
      <div id="more-count"> ` + (states.tabsList.length - 3) + ` More </div>
      <div id="more-list"></div>
    </div>`;

    $('#dynamic-tabs').append(temp);
  }
  populateDropdown();
}

/*
   Function to populate the see more menu dropdown list
*/
function populateDropdown(){
  $('#more-list').html('');
  for (var i = 3; i < states.tabsList.length; i++) {
    let temp =
    `<div class="more-list-item">
      <div class="list-item1">` + states.tabsList[i].name + `</div>
      <div class="list-item2">` + states.tabsList[i].login + `</div>
    </div>`;
    $("#more-list").append(temp);
  }
}

/*
   Function to show/hide the dropdown list when Seem more tab is clicked
*/
function toggleDropdown(){

}

/*
   Function to switch to a tab selected from the see more list and set it as the active tab visible on the screen,
  while one of the tabs earlier visible on the screen gets added to the dropdown list
*/
function switchDropdown(){

}
