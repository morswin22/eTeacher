let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.classList.add('dashboard');

if (isLogged()) {
    // logged, display go to dashboard and user settings and logout


} else {
    // not logged, display login or register
    title('Login');
    
    wrapper.classList.add('login-box');

    let loginBox = document.createElement('form');
    loginBox.action = '/login';
    loginBox.method = 'POST';

    let lspan = document.createElement('span');
    lspan.innerHTML = 'Login';
    loginBox.appendChild(lspan);

    let lemail = document.createElement('input');
    lemail.placeholder = 'Your email';
    lemail.type = 'email';
    lemail.name = 'email';
    loginBox.appendChild(lemail);

    let lpass = document.createElement('input');
    lpass.placeholder = 'Your password';
    lpass.type = 'password';
    lpass.name = 'pass';
    loginBox.appendChild(lpass);

    let lsubmit = document.createElement('input');
    lsubmit.type='submit';
    lsubmit.value = 'Login';
    loginBox.appendChild(lsubmit);


    let registerBox = document.createElement('form');
    registerBox.action = '/register';
    registerBox.method = 'POST';

    let rspan = document.createElement('span');
    rspan.innerHTML = 'Register';
    registerBox.appendChild(rspan);

    let rname = document.createElement('input');
    rname.placeholder = 'Your name';
    rname.name = 'name';
    registerBox.appendChild(rname);

    let remail = document.createElement('input');
    remail.placeholder = 'Your email';
    remail.type = 'email';
    remail.name = 'email';
    registerBox.appendChild(remail);

    let rpass = document.createElement('input');
    rpass.placeholder = 'Your password';
    rpass.type = 'password';
    rpass.name = 'pass';
    registerBox.appendChild(rpass);

    let rsubmit = document.createElement('input');
    rsubmit.type='submit';
    rsubmit.value = 'Register';
    registerBox.appendChild(rsubmit);

    
    wrapper.appendChild(loginBox);
    wrapper.appendChild(registerBox);

}

document.body.appendChild(wrapper);