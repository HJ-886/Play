// 主应用程序初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化粒子效果
    initParticles();
    
    // 初始化用户菜单
    initUserMenu();
    
    // 初始化贷款计算器
    initLoanCalculator();
    
    // 初始化导航
    initNavigation();
    
    // 初始化页面特定功能
    initHomePage();
    initCreditPage();
    
    // 默认显示首页
    showSection('home');
});

// 全局函数
function showSection(sectionId) {
    // 隐藏所有部分
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.remove('active');
    });
    
    // 显示选中的部分
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // 更新导航状态
    updateNavigationState(sectionId);
}

// 语言切换功能
function changeLanguage(lang) {
    alert('语言已切换为' + (lang === 'zh' ? '中文' : '其他语言'));
}

// 模态框功能
function openWithdrawModal() {
    alert('取款功能开发中，敬请期待！');
}