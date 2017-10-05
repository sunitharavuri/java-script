document.getElementById('inputForm').addEventListener('submit',saveForm);
function saveForm(e){
    var formDesc =document.getElementById('formsDescInput').value;
    var formPriority =document.getElementById('formPriorityInput').value;
    var formAssignedTo =document.getElementById('formAssignedToInput').value;
    var formId =chance.guid();//returns global unique identifier
    var formStatus ="Open";

   var form ={
       id:formId,
       description:formDesc,
       priority:formPriority,
       assignedTo:formAssignedTo,
       status:formStatus
   }
    //checks if there is any Array with name forms in local storage ,if not creates empty array and then pushes created values to it and sets name as forms 
    if(localStorage.getItem('forms')== null){
        var forms=[];
        forms.push(form);
        localStorage.setItem('forms', JSON.stringify(forms));
    }else {
        // gets all data from it and then pushes to new form data 
        var forms = JSON.parse(localStorage.getItem('forms'));
        forms.push(form);
        localStorage.setItem('forms', JSON.stringify(forms));
    }
    document.getElementById('inputForm').reset();


    fetchForms();


     e.preventDefault();
}
function setStatusClosed(id) {
  var forms = JSON.parse(localStorage.getItem('forms'));

  for (var i = 0; i < forms.length; i++) {
    if (forms[i].id == id) {
      forms[i].status = 'Closed';
    }
  }

  localStorage.setItem('forms', JSON.stringify(forms));

  fetchForms();
}

function deleteForm(id) {
  var forms = JSON.parse(localStorage.getItem('forms'));

  for (var i = 0; i < forms.length; i++) {
    if (forms[i].id == id) {
     forms.splice(i, 1);
    }
  }

  localStorage.setItem('forms', JSON.stringify(forms));

  fetchForms();
}




function fetchForms(){
    var forms = JSON.parse(localStorage.getItem('forms'));
    var formsList=document.getElementById('formsList');

    formsList.innerHTML='';
   
    for(var i=0 ; i <forms.length;i++){
        var id=forms[i].id;
        var desc=forms[i].description;
        var priority=forms[i].priority;
        var assignedTo=forms[i].assignedTo;
        var status=forms[i].status;

        formsList.innerHTML += '<div class="well">'+
                              '<h6>Forms ID: ' + id + '</h6>'+
                              '<p><span class="label label-info">' + status + '</span></p>'+
                              '<h3>' + desc + '</h3>'+
                              '<p><span class="glyphicon glyphicon-time"></span> ' + priority + ' '+
                              '<span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>'+
                              '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\''+id+'\')"> Close</a> '+
                              '<a href="#" class="btn btn-danger"  onclick="deleteForm(\''+id+'\')"> Delete</a>'+
                              '</div>';
    }
}