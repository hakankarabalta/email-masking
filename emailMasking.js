const email = document.getElementById('email');
const form = document.getElementById('maskForm');



function maskEmail(inputData){
  const [name, domain] = inputData.split('@');
  return name.substring(0, 1) + "*".repeat(Math.max(1, name.length - 1)) + '@' + domain;
  
}






maskForm.addEventListener('submit',
  function(event) {
    
    event.preventDefault();
    
    
    const emailValue = email.value;
    
    const maskedResult = maskEmail(emailValue);
    
    maskForm.innerHTML = `
    <h2>işlem Başarılı</h2>
     <p>Maskelenmiş Veri: <strong>${maskedResult}</strong></p>
            <button onclick="location.reload()">Yeni Sorgu</button>
            `;
  });