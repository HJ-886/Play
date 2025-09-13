// 用户菜单功能
let isLoggedIn = false;
let currentUser = {
    username: '张三',
    level: 'VIP会员'
};

function initUserMenu() {
    // 用户菜单按钮事件监听
    document.getElementById('userMenuButton').addEventListener('click', function(e) {
        e.stopPropagation();
        toggleUserMenu();
    });
    
    // 关闭下拉菜单当点击外部时
    document.addEventListener('click', function(event) {
        const userMenu = event.target.closest('.relative');
        const dropdown = document.getElementById('userDropdown');
        
        if (!userMenu && dropdown && !dropdown.classList.contains('hidden')) {
            closeUserMenu();
        }
    });
}

function toggleUserMenu() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('hidden');
}

function showUserProfile() {
    showSection('profile');
    closeUserMenu();
}

function showLogin() {
    if (confirm('模拟登录：点击确定登录为张三')) {
        isLoggedIn = true;
        updateUserStatus();
        alert('登录成功！欢迎回来，' + currentUser.username);
    }
    closeUserMenu();
}

function showRegister() {
    alert('注册功能开发中，敬请期待！');
    closeUserMenu();
}

function showAccountSettings() {
    alert('账户设置功能开发中，敬请期待！');
    closeUserMenu();
}

function logout() {
    if (confirm('确定要退出登录吗？')) {
        isLoggedIn = false;
        updateUserStatus();
        alert('已成功退出登录');
        showSection('home');
    }
    closeUserMenu();
}

function closeUserMenu() {
    document.getElementById('userDropdown').classList.add('hidden');
}

function updateUserStatus() {
    const statusText = document.getElementById('userStatusText');
    const loginOptions = document.getElementById('loginOptions');
    const userOptions = document.getElementById('userOptions');
    const displayUsername = document.getElementById('displayUsername');

    if (isLoggedIn) {
        statusText.textContent = currentUser.username;
        loginOptions.classList.add('hidden');
        userOptions.classList.remove('hidden');
        displayUsername.textContent = currentUser.username;
    } else {
        statusText.textContent = '登录';
        loginOptions.classList.remove('hidden');
        userOptions.classList.add('hidden');
    }
}