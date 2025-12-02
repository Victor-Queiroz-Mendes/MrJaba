// Sistema de autenticação
const auth = {
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  validateCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    return cpf.length === 11;
  },

  login(email, password) {
    if (!this.validateEmail(email)) {
      return { success: false, message: 'Email inválido' };
    }

    if (password.length < 4) {
      return { success: false, message: 'Senha deve ter no mínimo 4 caracteres' };
    }

    // Simular autenticação (em produção seria feito no backend)
    const user = {
      email: email,
      name: email.split('@')[0],
      loginTime: new Date().getTime()
    };

    localStorage.setItem('mrjabaUser', JSON.stringify(user));
    return { success: true, user: user };
  },

  register(email, password, confirmPassword) {
    if (!this.validateEmail(email)) {
      return { success: false, message: 'Email inválido' };
    }

    if (password.length < 4) {
      return { success: false, message: 'Senha deve ter no mínimo 4 caracteres' };
    }

    if (password !== confirmPassword) {
      return { success: false, message: 'Senhas não conferem' };
    }

    const user = {
      email: email,
      name: email.split('@')[0],
      createdAt: new Date().toLocaleString('pt-BR')
    };

    localStorage.setItem('mrjabaUser', JSON.stringify(user));
    return { success: true, user: user };
  },

  logout() {
    localStorage.removeItem('mrjabaUser');
    return { success: true };
  },

  isLogged() {
    return localStorage.getItem('mrjabaUser') !== null;
  },

  getUser() {
    const user = localStorage.getItem('mrjabaUser');
    return user ? JSON.parse(user) : null;
  }
};
