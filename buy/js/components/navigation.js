// 导航功能
function initNavigation() {
    // 底部导航按钮点击事件
    document.querySelectorAll('.bottom-nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            updateNavigationState(this.getAttribute('data-section'));
        });
    });
}

function updateNavigationState(sectionId) {
    // 更新底部导航
    document.querySelectorAll('.bottom-nav-btn').forEach(btn => {
        btn.classList.remove('text-indigo-400');
        btn.classList.add('text-white');
    });
    
    // 高亮当前底部导航按钮
    const activeBtn = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    if (activeBtn && activeBtn.classList.contains('bottom-nav-btn')) {
        activeBtn.classList.remove('text-white');
        activeBtn.classList.add('text-indigo-400');
    }
}