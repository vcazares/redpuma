document.addEventListener( 'DOMContentLoaded', function () {
    let splide = new Splide( '.splide', {
  type   : 'slide',
  rewind: true,
  perPage: 3,
  breakpoints: {
    1200: {
        perPage: 2,
    },
    780: {
      perPage: 1,
  },
  },
  perMove: 1,
  speed: 400,
} );

splide.mount();


//The date of birth cannot be greater than today
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd
}
if (mm < 10) {
  mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("inputDate").setAttribute("max", today);

} );





/*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/normalize*/
/*https://en.wikipedia.org/wiki/Combining_Diacritical_Marks*/
// function removeAccents(){
//   let str1 = str.normalize("NFD").replace(/[\u0300-\u0302]/g, "");
//   let str2 = str1.normalize("NFD").replace(/[\u0303-\u036f]/g, "");
//   console.log(str2);
// }

function removeAccents(str, id){
  let str0 = str.replace('ñ','\001');
  let str1 = str0.normalize("NFD").replace(/[\u0300-\u0302]/g, "");
  let str2 = str1.replace('\001','ñ');
  console.log(str2);
  document.getElementById(id).value = str2;
  return str2;
}

function checkForm() {
  let name = document.getElementById("inputName").value.trim();
  let gender = document.getElementById("selectGender").value.trim();
  let firstSurname = document.getElementById("inputFirstSurname").value.toUpperCase().trim();
  let curp = document.getElementById("inputCurp").value.replace(/\s/g, '').toUpperCase().trim(); //Delete spaces and convert to uppercase
  let secondSurname = document.getElementById("inputSecondSurname").value.toUpperCase().trim();
  let user = document.getElementById("selectUser").value.trim();
  let birthday = document.getElementById("inputDate").value.trim();
  let email = document.getElementById("inputEmailSignup").value.trim();

  if (name != "" && gender != "" && firstSurname != "" && curp != "" && user != "" && birthday != "" && email != "") {
    document.getElementById("signupSpanError").style.display = "none";

    removeAccents(document.getElementById("inputName").value, "inputName");
    removeAccents(document.getElementById("inputFirstSurname").value, "inputFirstSurname");
    removeAccents(document.getElementById("inputSecondSurname").value, "inputSecondSurname");
    
    let validEmail = checkEmail(email);
    let validDate = checkDate(birthday);
    let validCurp = checkCurp(curp);
    let validGender = checkGender(gender);
    let validUser = checkUser(user);
  }
  else{
    document.getElementById("signupSpanError").style.display = "block";
    doScrolling("#signupSpanError", 500);
  }
}


function checkEmail(email){
  let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  let validEmail = false;
  if (regex.test(email)) {
    console.log( document.getElementById("signupSpanEmailError"));
    document.getElementById("signupSpanEmailError").style.display = "none";
    document.getElementById("labelInputEmailSignup").style.color = "#3B55E6";
    document.getElementById("inputEmailSignup").style.backgroundColor = "#F0F2F7";
    document.getElementById("inputEmailSignup").style.borderColor = "#F0F2F7";
    document.getElementById("inputEmailSignup").style.color = "#3B55E6";
    document.getElementById("inputEmailSignup").classList.remove('form-control-error');
    document.getElementById("inputEmailSignup").classList.add('form-control-correct');
    validEmail = true;
  } else {
    console.log( document.getElementById("signupSpanEmailError"));
    document.getElementById("signupSpanEmailError").style.display = "block";
    document.getElementById("labelInputEmailSignup").style.color = "#FF0033";
    document.getElementById("inputEmailSignup").style.backgroundColor = "#FDE8E5";
    document.getElementById("inputEmailSignup").style.borderColor = "#FDE8E5";
    document.getElementById("inputEmailSignup").style.color = "#FF0033";
    document.getElementById("inputEmailSignup").classList.remove('form-control-correct');
    document.getElementById("inputEmailSignup").classList.add('form-control-error');
    validEmail = false;
  }
  return validEmail;
}


function checkDate(birthday){
  let validDate = isValidDate(birthday);
  console.log(validDate);
  if(validDate){
    document.getElementById("signupSpanDateError").style.display = "none";
    document.getElementById("labelInputDateSignup").style.color = "#3B55E6";
    document.getElementById("inputDate").style.backgroundColor = "#F0F2F7";
    document.getElementById("inputDate").style.borderColor = "#F0F2F7";
    document.getElementById("inputDate").style.color = "#3B55E6";
    document.getElementById("inputDate").classList.remove('form-control-error');
    document.getElementById("inputDate").classList.add('form-control-correct');
  }
  else{
    document.getElementById("signupSpanDateError").style.display = "block";
    document.getElementById("labelInputDateSignup").style.color = "#FF0033";
    document.getElementById("inputDate").style.backgroundColor = "#FDE8E5";
    document.getElementById("inputDate").style.borderColor = "#FDE8E5";
    document.getElementById("inputDate").style.color = "#FF0033";
    document.getElementById("inputDate").classList.remove('form-control-correct');
    document.getElementById("inputDate").classList.add('form-control-error');
  }
}

function checkCurp(curp){
  let validCurp = isValidCurp(curp);
  console.log(validCurp);
  if(validCurp){
    document.getElementById("signupSpanCurpError").style.display = "none";
    document.getElementById("labelInputCurpSignup").style.color = "#3B55E6";
    document.getElementById("inputCurp").style.backgroundColor = "#F0F2F7";
    document.getElementById("inputCurp").style.borderColor = "#F0F2F7";
    document.getElementById("inputCurp").style.color = "#3B55E6";
    document.getElementById("inputCurp").classList.remove('form-control-error');
    document.getElementById("inputCurp").classList.add('form-control-correct');
  }
  else{
    document.getElementById("signupSpanCurpError").style.display = "block";
    document.getElementById("labelInputCurpSignup").style.color = "#FF0033";
    document.getElementById("inputCurp").style.backgroundColor = "#FDE8E5";
    document.getElementById("inputCurp").style.borderColor = "#FDE8E5";
    document.getElementById("inputCurp").style.color = "#FF0033";
    document.getElementById("inputCurp").classList.remove('form-control-correct');
    document.getElementById("inputCurp").classList.add('form-control-error');
  }
}


// Validates that the input string is a valid date formatted as "dd/mm/yyyy"
function isValidDate(dateString)
{

  console.log(dateString);

    //The date of birth cannot be greater than today
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);

    if(dateString <= today){
      // First check for the pattern
      if(!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(dateString))
        return false;

      // Parse the date parts to integers
      let parts = dateString.split("-");
      console.log(parts);
      let day = parseInt(parts[2], 10);
      let month = parseInt(parts[1], 10);
      let year = parseInt(parts[0], 10);

      // Check the ranges of month and year
      if(year < 1900 || year > 3000 || month == 0 || month > 12)
          return false;

      let monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

      // Adjust for leap years
      if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
          monthLength[1] = 29;

      // Check the range of the day
      return day > 0 && day <= monthLength[month - 1];
    }
    else{
      return false;
    }

    
};



//Función para validar una CURP
function isValidCurp(curp) {
  let re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
      validated = curp.match(re);

  if (!validated)  //Coincide con el formato general?
    return false;
  
  //Validar que coincida el dígito verificador
  function digitoVerificador(curp17) {
      //Fuente https://consultas.curp.gob.mx/CurpSP/
      let diccionario  = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
          lngSuma      = 0.0,
          lngDigito    = 0.0;
      for(let i=0; i<17; i++)
          lngSuma = lngSuma + diccionario.indexOf(curp17.charAt(i)) * (18 - i);
      lngDigito = 10 - lngSuma % 10;
      if (lngDigito == 10) return 0;
      return lngDigito;
  }

  if (validated[2] != digitoVerificador(validated[1])) 
    return false;
      
  return true; //Validado
}

function checkGender(gender){
  //https://stackoverflow.com/questions/447250/matching-exact-string-with-javascript
  let regex = /^Hombre$|^Mujer$/;
  let validGender = false;
  console.log(gender);
  if (regex.test(gender)) {
    console.log( document.getElementById("signupSpanGenderError"));
    document.getElementById("signupSpanGenderError").style.display = "none";
    document.getElementById("labelInputGenderSignup").style.color = "#3B55E6";
    document.getElementById("selectGender").style.backgroundColor = "#F0F2F7";
    document.getElementById("selectGender").style.borderColor = "#F0F2F7";
    document.getElementById("selectGender").style.color = "#3B55E6";
    document.getElementById("selectGender").classList.remove('form-control-error');
    document.getElementById("selectGender").classList.add('form-control-correct');

    let nodes = document.getElementById('selectGender').childNodes;
    for(let i=0; i<nodes.length; i++) {
        if (nodes[i].nodeName.toLowerCase() == 'option') {
            nodes[i].style.color = "#3B55E6";
        }
    }

    validGender = true;
  } else {
    console.log( document.getElementById("signupSpanGenderError"));
    document.getElementById("signupSpanGenderError").style.display = "block";
    document.getElementById("labelInputGenderSignup").style.color = "#FF0033";
    document.getElementById("selectGender").style.backgroundColor = "#FDE8E5";
    document.getElementById("selectGender").style.borderColor = "#FDE8E5";
    document.getElementById("selectGender").style.color = "#FF0033";
    document.getElementById("selectGender").classList.remove('form-control-correct');
    document.getElementById("selectGender").classList.add('form-control-error');

    let nodes = document.getElementById('selectGender').childNodes;
    for(let i=0; i<nodes.length; i++) {
        if (nodes[i].nodeName.toLowerCase() == 'option') {
            nodes[i].style.color = "#FF0033";
        }
    }

    validGender = false;
  }
  return validGender;
}

function checkUser(user){
  let regex = /^Externo$|^Bachillerato$|^Licenciatura$|^Posgrado$|^Egresado$|^Intercambio$|^Escuela incorporada a la UNAM$|^Académico$|^Administrativo$|^Confianza|^Familiar de trabajador Académico$|^Familiar de trabajador Administrativo$|^Familiar de trabajador Confianza$/;
  let validUser = false;
  console.log(user);
  console.log(regex.test(user));
  if (regex.test(user)) {
    console.log( document.getElementById("signupSpanUserError"));
    document.getElementById("signupSpanUserError").style.display = "none";
    document.getElementById("signupSpanUserError").style.display = "none";
    document.getElementById("labelInputUserSignup").style.color = "#3B55E6";
    document.getElementById("selectUser").style.backgroundColor = "#F0F2F7";
    document.getElementById("selectUser").style.borderColor = "#F0F2F7";
    document.getElementById("selectUser").style.color = "#3B55E6";
    document.getElementById("selectUser").classList.remove('form-control-error');
    document.getElementById("selectUser").classList.add('form-control-correct');

    let nodes = document.getElementById('selectUser').childNodes;
    for(let i=0; i<nodes.length; i++) {
        if (nodes[i].nodeName.toLowerCase() == 'option') {
            nodes[i].style.color = "#3B55E6";
        }
    }
    validUser = true;
  } else {
    console.log( document.getElementById("signupSpanUserError"));
    document.getElementById("signupSpanUserError").style.display = "block";
    document.getElementById("labelInputUserSignup").style.color = "#FF0033";
    document.getElementById("selectUser").style.backgroundColor = "#FDE8E5";
    document.getElementById("selectUser").style.borderColor = "#FDE8E5";
    document.getElementById("selectUser").style.color = "#FF0033";
    document.getElementById("selectUser").classList.remove('form-control-correct');
    document.getElementById("selectUser").classList.add('form-control-error');

    let nodes = document.getElementById('selectUser').childNodes;
    for(let i=0; i<nodes.length; i++) {
        if (nodes[i].nodeName.toLowerCase() == 'option') {
            nodes[i].style.color = "#FF0033";
        }
    }

    validUser = false;
  }
  return validUser;
}