const pages = {
  home: document.getElementById('homePage'),
  login: document.getElementById('loginPage'),
  register: document.getElementById('registerPage'),
  studentDashboard: document.getElementById('studentDashboardPage'),
  studentResults: document.getElementById('studentResultsPage'),
  studentProfile: document.getElementById('studentProfilePage'),
  adminDashboard: document.getElementById('adminDashboardPage'),
  createQuiz: document.getElementById('createQuizPage'),
  addQuestion: document.getElementById('addQuestionPage'),
  manageQuestions: document.getElementById('manageQuestionsPage'),
  manageStudents: document.getElementById('manageStudentsPage'),
  adminResults: document.getElementById('adminResultsPage'),
  attemptQuiz: document.getElementById('quizAttemptPage'),
  result: document.getElementById('resultPage'),
  review: document.getElementById('reviewPage'),
};

const state = {
  currentUser: null,
  quizzes: [],
  activeQuiz: null,
  activeQuestionIndex: 0,
  answers: [],
  lastAttempt: null,
  quizTimer: null,
  quizTimeLeft: 0,
};

const elements = {
  navHomeBtn: document.getElementById('navHomeBtn'),
  navLoginBtn: document.getElementById('navLoginBtn'),
  navRegisterBtn: document.getElementById('navRegisterBtn'),
  getStartedBtn: document.getElementById('getStartedBtn'),
  learnMoreBtn: document.getElementById('learnMoreBtn'),
  loginBackBtn: document.getElementById('loginBackBtn'),
  registerBackBtn: document.getElementById('registerBackBtn'),
  switchToRegisterBtn: document.getElementById('switchToRegisterBtn'),
  switchToLoginBtn: document.getElementById('switchToLoginBtn'),
  loginForm: document.getElementById('loginForm'),
  registerForm: document.getElementById('registerForm'),
  studentDashboardBtn: document.getElementById('studentDashboardBtn'),
  studentAttemptBtn: document.getElementById('studentAttemptBtn'),
  studentResultsBtn: document.getElementById('studentResultsBtn'),
  studentLeaderboardBtn: document.getElementById('studentLeaderboardBtn'),
  studentProfileBtn: document.getElementById('studentProfileBtn'),
  studentLogoutBtn: document.getElementById('studentLogoutBtn'),
  backToStudentDashboardBtn: document.getElementById('backToStudentDashboardBtn'),
  backToDashboardFromResultBtn: document.getElementById('backToDashboardFromResultBtn'),
  backToDashboardFromResultBtn2: document.getElementById('backToDashboardFromResultBtn2'),
  backToDashboardFromProfileBtn: document.getElementById('backToDashboardFromProfileBtn'),
  adminDashboardBtn: document.getElementById('adminDashboardBtn'),
  createQuizNavBtn: document.getElementById('createQuizNavBtn'),
  manageQuestionsNavBtn: document.getElementById('manageQuestionsNavBtn'),
  viewResultsNavBtn: document.getElementById('viewResultsNavBtn'),
  manageStudentsNavBtn: document.getElementById('manageStudentsNavBtn'),
  adminLogoutBtn: document.getElementById('adminLogoutBtn'),
  backToAdminBtn: document.getElementById('backToAdminBtn'),
  backToAdminFromManageBtn: document.getElementById('backToAdminFromManageBtn'),
  backToAdminFromResultsBtn: document.getElementById('backToAdminFromResultsBtn'),
  backToAdminFromStudentsBtn: document.getElementById('backToAdminFromStudentsBtn'),
  quizForm: document.getElementById('quizForm'),
  questionForm: document.getElementById('questionForm'),
  nextQuestionBtn: document.getElementById('nextQuestionBtn'),
  reviewAnswersBtn: document.getElementById('reviewAnswersBtn'),
  reviewAnswersBtn2: document.getElementById('reviewAnswersBtn2'),
  backToResultFromReviewBtn: document.getElementById('backToResultFromReviewBtn'),
  backToStudentFromAttemptBtn: document.getElementById('backToStudentFromAttemptBtn'),
  resultsHistoryList: document.getElementById('resultsHistoryList'),
  recentScoresList: document.getElementById('recentScoresList'),
  manageQuizList: document.getElementById('manageQuizList'),
  manageStudentsList: document.getElementById('manageStudentsList'),
  adminResultsList: document.getElementById('adminResultsList'),
  reviewList: document.getElementById('reviewList'),
  studentNameLabel: document.getElementById('studentNameLabel'),
  totalQuizCount: document.getElementById('totalQuizCount'),
  attemptedCount: document.getElementById('attemptedCount'),
  averageScore: document.getElementById('averageScore'),
  recentActivitiesList: document.getElementById('recentActivitiesList'),
  totalStudents: document.getElementById('totalStudents'),
  totalQuizzes: document.getElementById('totalQuizzes'),
  adminAverageScore: document.getElementById('adminAverageScore'),
  profileName: document.getElementById('profileName'),
  profileEmail: document.getElementById('profileEmail'),
  profileSince: document.getElementById('profileSince'),
  currentQuizTitle: document.getElementById('currentQuizTitle'),
  quizTimer: document.getElementById('quizTimer'),
  questionNumber: document.getElementById('questionNumber'),
  questionPrompt: document.getElementById('questionPrompt'),
  finalScore: document.getElementById('finalScore'),
  finalPercentage: document.getElementById('finalPercentage'),
  finalStatus: document.getElementById('finalStatus'),
  finalScoreText: document.getElementById('finalScoreText'),
  finalPercentageText: document.getElementById('finalPercentageText'),
  finalStatusText: document.getElementById('finalStatusText'),
};

function switchPage(pageKey) {
  Object.values(pages).forEach(page => page.classList.remove('active'));
  pages[pageKey].classList.add('active');
}

function showHome() {
  switchPage('home');
}

function showLogin() {
  switchPage('login');
}

function showRegister() {
  switchPage('register');
}

function showStudentDashboard() {
  if (!state.currentUser) return showLogin();
  if (state.currentUser.role !== 'student') return showHome();
  renderStudentDashboard();
  switchPage('studentDashboard');
}

function showStudentResults() {
  if (!state.currentUser) return showLogin();
  if (state.currentUser.role !== 'student') return showHome();
  showStudentsResultsPage();
}

function showStudentsResultsPage() {
  renderStudentResults();
  switchPage('studentResults');
}

function showStudentProfile() {
  if (!state.currentUser) return showLogin();
  if (state.currentUser.role !== 'student') return showHome();
  renderStudentProfile();
  switchPage('studentProfile');
}

function showAdminDashboard() {
  if (!state.currentUser) return showLogin();
  if (state.currentUser.role !== 'admin') return showHome();
  renderAdminDashboard();
  switchPage('adminDashboard');
}

function showCreateQuiz() {
  if (!state.currentUser) return showLogin();
  if (state.currentUser.role !== 'admin') return showHome();
  switchPage('createQuiz');
}

function showAddQuestion() {
  if (!state.currentUser) return showLogin();
  if (state.currentUser.role !== 'admin') return showHome();
  if (!state.activeQuiz) {
    alert('Please create a quiz first.');
    return showCreateQuiz();
  }
  switchPage('addQuestion');
}

function showManageQuestions() {
  if (!state.currentUser) return showLogin();
  if (state.currentUser.role !== 'admin') return showHome();
  renderManageQuizList();
  switchPage('manageQuestions');
}

function showManageStudents() {
  if (!state.currentUser) return showLogin();
  if (state.currentUser.role !== 'admin') return showHome();
  renderManageStudentsList();
  switchPage('manageStudents');
}

function showAdminResults() {
  if (!state.currentUser) return showLogin();
  if (state.currentUser.role !== 'admin') return showHome();
  renderAdminResultsList();
  switchPage('adminResults');
}

function showQuizAttempt() {
  if (!state.currentUser) return showLogin();
  if (state.currentUser.role !== 'student') return showHome();
  if (state.quizzes.length === 0) {
    alert('No quizzes available.');
    return showStudentDashboard();
  }
  const quiz = state.quizzes[0];
  startQuiz(quiz);
}

function showResultPage() {
  switchPage('result');
}

function showReviewPage() {
  if (!state.lastAttempt) return alert('No quiz attempt available for review yet.');
  renderReviewAnswers();
  switchPage('review');
}

function logout() {
  auth.signOut().then(() => {
    state.currentUser = null;
    state.activeQuiz = null;
    state.activeQuestionIndex = 0;
    state.answers = [];
    state.lastAttempt = null;
    clearInterval(state.quizTimer);
    showHome();
  }).catch(error => {
    console.error('Logout error:', error);
    showHome();
  });
}

function renderStudentDashboard() {
  if (!state.currentUser) return;
  const user = state.currentUser;
  const attempted = user.results ? user.results.length : 0;
  const total = state.quizzes.length;
  const average = attempted ? Math.round(user.results.reduce((sum, r) => sum + r.score, 0) / attempted) : 0;
  
  elements.studentNameLabel.textContent = user.name || user.email;
  elements.totalQuizCount.textContent = total;
  elements.attemptedCount.textContent = attempted;
  elements.averageScore.textContent = `${average}%`;
  elements.recentScoresList.innerHTML = '';
  
  if (!attempted) {
    elements.recentScoresList.innerHTML = '<li>No quiz attempts yet.</li>';
  } else {
    user.results.slice(-3).reverse().forEach(result => {
      const li = document.createElement('li');
      li.textContent = `${result.quizTitle} — ${result.score}%`;
      elements.recentScoresList.appendChild(li);
    });
  }
}

function renderStudentResults() {
  if (!state.currentUser) return;
  elements.resultsHistoryList.innerHTML = '';
  const results = state.currentUser.results || [];
  if (!results.length) {
    elements.resultsHistoryList.innerHTML = '<li>No quiz history yet.</li>';
    return;
  }
  results.slice().reverse().forEach(result => {
    const li = document.createElement('li');
    li.textContent = `${result.quizTitle} — ${result.score}%`;
    elements.resultsHistoryList.appendChild(li);
  });
}

function renderStudentProfile() {
  const user = state.currentUser;
  elements.profileName.textContent = user.name || 'Student';
  elements.profileEmail.textContent = user.email;
  elements.profileSince.textContent = user.createdAt ? new Date(user.createdAt).getFullYear() : '2024';
}

function renderAdminDashboard() {
  loadAllStudents().then(students => {
    elements.totalStudents.textContent = students.length;
    elements.totalQuizzes.textContent = state.quizzes.length;
    
    let allResults = [];
    students.forEach(student => {
      if (student.results) {
        allResults = allResults.concat(student.results);
      }
    });
    
    const average = allResults.length ? Math.round(allResults.reduce((sum, r) => sum + r.score, 0) / allResults.length) : 0;
    elements.adminAverageScore.textContent = `${average}%`;
  });

  elements.recentActivitiesList.innerHTML = '';
  if (!state.quizzes.length) {
    elements.recentActivitiesList.innerHTML = '<li>No quizzes available yet.</li>';
  } else {
    state.quizzes.slice(-3).reverse().forEach(q => {
      const li = document.createElement('li');
      li.textContent = `Quiz "${q.title}" created.`;
      elements.recentActivitiesList.appendChild(li);
    });
  }
}

function renderManageQuizList() {
  elements.manageQuizList.innerHTML = '';
  if (!state.quizzes.length) {
    elements.manageQuizList.innerHTML = '<li>No quizzes available.</li>';
    return;
  }
  state.quizzes.forEach(quiz => {
    const li = document.createElement('li');
    li.innerHTML = `${quiz.title} — ${quiz.questions.length} question(s)`;
    elements.manageQuizList.appendChild(li);
  });
}

function renderManageStudentsList() {
  elements.manageStudentsList.innerHTML = '<li>Loading students...</li>';
  loadAllStudents().then(students => {
    elements.manageStudentsList.innerHTML = '';
    if (!students.length) {
      elements.manageStudentsList.innerHTML = '<li>No students registered yet.</li>';
      return;
    }
    students.forEach(student => {
      const li = document.createElement('li');
      li.textContent = `${student.name || 'Student'} — ${student.email}`;
      elements.manageStudentsList.appendChild(li);
    });
  });
}

function renderAdminResultsList() {
  elements.adminResultsList.innerHTML = '<li>Loading results...</li>';
  loadAllStudents().then(students => {
    elements.adminResultsList.innerHTML = '';
    const results = [];
    students.forEach(student => {
      if (student.results) {
        student.results.forEach(r => {
          results.push({ name: student.name || 'Student', ...r });
        });
      }
    });
    
    if (!results.length) {
      elements.adminResultsList.innerHTML = '<li>No student results available.</li>';
      return;
    }
    results.forEach(result => {
      const li = document.createElement('li');
      li.textContent = `${result.name} — ${result.quizTitle} — ${result.score}%`;
      elements.adminResultsList.appendChild(li);
    });
  });
}

function renderReviewAnswers() {
  elements.reviewList.innerHTML = '';
  const attempt = state.lastAttempt;
  if (!attempt) return;
  attempt.questions.forEach((question, index) => {
    const item = document.createElement('div');
    item.className = 'review-item';
    const answer = attempt.answers[index] || 'No answer';
    const isCorrect = answer === question.answer;
    item.innerHTML = `
      <h4>Q${index + 1}: ${question.text}</h4>
      <p>Your answer: <strong>${answer}</strong></p>
      <p>Correct answer: <strong>${question.answer}</strong></p>
      <p>Status: <strong>${isCorrect ? 'Correct' : 'Incorrect'}</strong></p>
    `;
    elements.reviewList.appendChild(item);
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function startQuiz(quiz) {
  if (!quiz) {
    alert('No quiz available to attempt.');
    return;
  }
  if (!quiz.questions.length) {
    alert('This quiz does not contain any questions yet.');
    return;
  }
  state.activeQuiz = quiz;
  state.activeQuestionIndex = 0;
  state.answers = [];
  state.quizTimeLeft = quiz.timeLimit * 60;
  renderQuizQuestion();
  switchPage('attemptQuiz');
  clearInterval(state.quizTimer);
  state.quizTimer = setInterval(() => {
    state.quizTimeLeft -= 1;
    if (state.quizTimeLeft < 0) {
      clearInterval(state.quizTimer);
      submitQuiz();
      return;
    }
    const minutes = Math.floor(state.quizTimeLeft / 60);
    const seconds = state.quizTimeLeft % 60;
    elements.quizTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
}

function renderQuizQuestion() {
  const question = state.activeQuiz.questions[state.activeQuestionIndex];
  elements.currentQuizTitle.textContent = state.activeQuiz.title;
  elements.questionNumber.textContent = `Q${state.activeQuestionIndex + 1}. ${question.text}`;
  document.querySelectorAll('input[name="quizOption"]').forEach(input => {
    input.checked = false;
  });
  const options = ['A', 'B', 'C', 'D'];
  options.forEach(option => {
    const input = document.querySelector(`input[value="${option}"]`);
    const label = input.closest('label');
    if (label) {
      const span = label.querySelector('span') || document.createTextNode('');
      label.replaceChild(document.createTextNode(question.options[option]), span.length ? span : label.lastChild);
    }
  });
}

function submitQuiz() {
  if (!state.activeQuiz) return;
  const quiz = state.activeQuiz;
  const correctCount = state.answers.filter((choice, index) => choice === quiz.questions[index].answer).length;
  const score = Math.round((correctCount / quiz.questions.length) * 100);
  
  const result = {
    quizTitle: quiz.title,
    score,
    correct: correctCount,
    total: quiz.questions.length,
    timestamp: new Date().toISOString()
  };
  
  state.lastAttempt = { quizTitle: quiz.title, questions: quiz.questions, answers: [...state.answers], score };
  
  // Save result to Firebase
  if (state.currentUser && state.currentUser.uid) {
    const userRef = db.collection('users').doc(state.currentUser.uid);
    userRef.get().then(doc => {
      const userData = doc.data();
      const results = userData.results || [];
      results.push(result);
      return userRef.update({ results });
    }).then(() => {
      state.currentUser.results = state.currentUser.results || [];
      state.currentUser.results.push(result);
      
      elements.finalScoreText.textContent = `${correctCount} / ${quiz.questions.length}`;
      elements.finalPercentageText.textContent = `${score}%`;
      elements.finalStatusText.textContent = score >= 50 ? 'PASS' : 'FAIL';
      clearInterval(state.quizTimer);
      showResultPage();
    });
  }
}

function loadAllStudents() {
  return db.collection('users').where('role', '==', 'student').get().then(snapshot => {
    const students = [];
    snapshot.forEach(doc => {
      students.push({ id: doc.id, ...doc.data() });
    });
    return students;
  }).catch(error => {
    console.error('Error loading students:', error);
    return [];
  });
}

function handleAuthStateChange() {
  auth.onAuthStateChanged(user => {
    if (user) {
      db.collection('users').doc(user.uid).get().then(doc => {
        if (doc.exists) {
          state.currentUser = { uid: user.uid, ...doc.data() };
          if (state.currentUser.role === 'admin') {
            showAdminDashboard();
          } else {
            showStudentDashboard();
          }
        }
      });
    } else {
      state.currentUser = null;
      showHome();
    }
  });
}

function init() {
  // Load quizzes from Firestore
  db.collection('quizzes').get().then(snapshot => {
    state.quizzes = [];
    snapshot.forEach(doc => {
      state.quizzes.push({ id: doc.id, ...doc.data() });
    });
  }).catch(error => {
    console.error('Error loading quizzes:', error);
  });

  handleAuthStateChange();

  elements.navHomeBtn.addEventListener('click', showHome);
  elements.navLoginBtn.addEventListener('click', showLogin);
  elements.navRegisterBtn.addEventListener('click', showRegister);
  elements.getStartedBtn.addEventListener('click', showRegister);
  elements.learnMoreBtn.addEventListener('click', showRegister);
  elements.loginBackBtn.addEventListener('click', showHome);
  elements.registerBackBtn.addEventListener('click', showLogin);
  elements.switchToRegisterBtn.addEventListener('click', showRegister);
  elements.switchToLoginBtn.addEventListener('click', showLogin);
  elements.studentDashboardBtn.addEventListener('click', showStudentDashboard);
  elements.studentAttemptBtn.addEventListener('click', showQuizAttempt);
  elements.studentResultsBtn.addEventListener('click', showStudentsResultsPage);
  elements.studentLeaderboardBtn.addEventListener('click', showStudentsResultsPage);
  elements.studentProfileBtn.addEventListener('click', showStudentProfile);
  elements.studentLogoutBtn.addEventListener('click', logout);
  elements.backToStudentDashboardBtn.addEventListener('click', showStudentDashboard);
  elements.backToDashboardFromResultBtn.addEventListener('click', showStudentDashboard);
  elements.backToDashboardFromResultBtn2.addEventListener('click', showStudentDashboard);
  elements.backToDashboardFromProfileBtn.addEventListener('click', showStudentDashboard);
  elements.adminDashboardBtn.addEventListener('click', showAdminDashboard);
  elements.createQuizNavBtn.addEventListener('click', showCreateQuiz);
  elements.manageQuestionsNavBtn.addEventListener('click', showManageQuestions);
  elements.viewResultsNavBtn.addEventListener('click', showAdminResults);
  elements.manageStudentsNavBtn.addEventListener('click', showManageStudents);
  elements.adminLogoutBtn.addEventListener('click', logout);
  elements.backToAdminBtn.addEventListener('click', showAdminDashboard);
  elements.backToAdminFromManageBtn.addEventListener('click', showAdminDashboard);
  elements.backToAdminFromResultsBtn.addEventListener('click', showAdminDashboard);
  elements.backToAdminFromStudentsBtn.addEventListener('click', showAdminDashboard);
  elements.backToStudentFromAttemptBtn.addEventListener('click', showStudentDashboard);
  elements.reviewAnswersBtn.addEventListener('click', showReviewPage);
  elements.reviewAnswersBtn2.addEventListener('click', showReviewPage);
  elements.backToResultFromReviewBtn.addEventListener('click', showResultPage);

  elements.quizForm.addEventListener('submit', e => {
    e.preventDefault();
    const title = document.getElementById('quizTitle').value.trim();
    const subject = document.getElementById('quizSubject').value.trim();
    const timeLimit = Number(document.getElementById('quizTimeLimit').value);
    const marks = Number(document.getElementById('quizMarks').value);
    
    if (!title || !subject || !timeLimit || !marks) {
      alert('Please complete all quiz details.');
      return;
    }
    
    const newQuiz = { title, subject, timeLimit, marks, questions: [], createdBy: state.currentUser.uid, createdAt: new Date().toISOString() };
    db.collection('quizzes').add(newQuiz).then(docRef => {
      newQuiz.id = docRef.id;
      state.quizzes.push(newQuiz);
      state.activeQuiz = newQuiz;
      e.target.reset();
      document.getElementById('quizTitle').value = '';
      document.getElementById('quizSubject').value = '';
      document.getElementById('quizTimeLimit').value = '';
      document.getElementById('quizMarks').value = '';
      alert('Quiz created. Add questions now.');
      showAddQuestion();
    }).catch(error => {
      alert('Error creating quiz: ' + error.message);
    });
  });

  elements.questionForm.addEventListener('submit', e => {
    e.preventDefault();
    const questionText = document.getElementById('questionText').value.trim();
    const optionA = document.getElementById('optionA').value.trim();
    const optionB = document.getElementById('optionB').value.trim();
    const optionC = document.getElementById('optionC').value.trim();
    const optionD = document.getElementById('optionD').value.trim();
    const answer = document.getElementById('correctAnswer').value;
    
    if (!questionText || !optionA || !optionB || !optionC || !optionD || !answer) {
      alert('Please complete the question and choose the correct answer.');
      return;
    }
    
    state.activeQuiz.questions.push({
      text: questionText,
      options: { A: optionA, B: optionB, C: optionC, D: optionD },
      answer
    });
    
    db.collection('quizzes').doc(state.activeQuiz.id).update({ questions: state.activeQuiz.questions }).then(() => {
      e.target.reset();
      document.getElementById('questionText').value = '';
      document.getElementById('optionA').value = '';
      document.getElementById('optionB').value = '';
      document.getElementById('optionC').value = '';
      document.getElementById('optionD').value = '';
      document.getElementById('correctAnswer').value = '';
      alert('Question saved. You can add more or return to admin dashboard.');
    }).catch(error => {
      alert('Error saving question: ' + error.message);
    });
  });

  elements.nextQuestionBtn.addEventListener('click', () => {
    const selected = document.querySelector('input[name="quizOption"]:checked');
    if (!selected) {
      alert('Select an answer to continue.');
      return;
    }
    state.answers[state.activeQuestionIndex] = selected.value;
    state.activeQuestionIndex += 1;
    if (state.activeQuestionIndex >= state.activeQuiz.questions.length) {
      submitQuiz();
      return;
    }
    renderQuizQuestion();
  });

  document.getElementById('forgotPasswordBtn').addEventListener('click', () => {
    alert('Forgot password is not available in this demo.');
  });

  document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    
    if (!email || !password) {
      alert('Email and password are required.');
      return;
    }
    
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        db.collection('users').doc(userCredential.user.uid).get().then(doc => {
          if (doc.exists) {
            state.currentUser = { uid: userCredential.user.uid, ...doc.data() };
            document.getElementById('loginForm').reset();
            if (state.currentUser.role === 'admin') {
              showAdminDashboard();
            } else {
              showStudentDashboard();
            }
          }
        });
      })
      .catch(error => {
        alert('Login failed: ' + error.message);
      });
  });

  document.getElementById('registerForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    const role = document.querySelector('input[name="role"]:checked').value;
    
    if (name.length < 3) {
      alert('Name must be at least 3 characters.');
      return;
    }
    
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    if (password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }
    
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const newUser = {
          name,
          email,
          role,
          results: [],
          createdAt: new Date().toISOString()
        };
        return db.collection('users').doc(userCredential.user.uid).set(newUser).then(() => {
          state.currentUser = { uid: userCredential.user.uid, ...newUser };
          document.getElementById('registerForm').reset();
          if (role === 'admin') {
            showAdminDashboard();
          } else {
            showStudentDashboard();
          }
        });
      })
      .catch(error => {
        alert('Registration failed: ' + error.message);
      });
  });
}

init();
