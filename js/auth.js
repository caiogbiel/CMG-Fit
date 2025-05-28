document.addEventListener('DOMContentLoaded', function() {
  // Elementos
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const authMessage = document.getElementById('auth-message');
  const registerPassword = document.getElementById('registerPassword');
  const registerConfirmPassword = document.getElementById('registerConfirmPassword');

  function showMessage(type, text) {
    authMessage.className = `alert alert-${type}`;
    authMessage.textContent = text;
    authMessage.classList.remove('d-none');
    
    setTimeout(() => {
      authMessage.classList.add('d-none');
    }, 5000);
  }

  function validatePassword() {
    if (registerPassword.value !== registerConfirmPassword.value) {
      registerConfirmPassword.setCustomValidity('Senhas não conferem');
      registerConfirmPassword.classList.add('is-invalid');
      return false;
    } else {
      registerConfirmPassword.setCustomValidity('');
      registerConfirmPassword.classList.remove('is-invalid');
      return true;
    }
  }

  registerConfirmPassword.addEventListener('input', validatePassword);

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!loginForm.checkValidity()) {
      e.stopPropagation();
      loginForm.classList.add('was-validated');
      return;
    }
    
    showMessage('success', 'Login realizado com sucesso!');
    setTimeout(() => {
      window.location.href = '../index.html';
    }, 2000);
  });

  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!registerForm.checkValidity() || !validatePassword()) {
      e.stopPropagation();
      registerForm.classList.add('was-validated');
      return;
    }
    
    showMessage('success', 'Cadastro realizado! Faça login para continuar.');
    registerForm.reset();
    registerForm.classList.remove('was-validated');
    
    bootstrap.Tab.getInstance(document.querySelector('#login-tab')).show();
  });

  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
      if (this.checkValidity()) {
        this.classList.remove('is-invalid');
      }
    });
  });
});