// 贷款计算器功能
function initLoanCalculator() {
    const loanAmountSlider = document.getElementById('loanAmount');
    const loanAmountValue = document.getElementById('loanAmountValue');
    const loanTermOptions = document.querySelectorAll('.loan-term-option');
    
    if (loanAmountSlider && loanAmountValue) {
        // 格式化金额显示
        loanAmountValue.textContent = Number(loanAmountSlider.value).toLocaleString();
        
        // 监听滑块变化
        loanAmountSlider.addEventListener('input', function() {
            loanAmountValue.textContent = Number(this.value).toLocaleString();
            calculateLoanRepayment();
        });
    }
    
    // 贷款期限选择
    if (loanTermOptions) {
        loanTermOptions.forEach(option => {
            option.addEventListener('click', function() {
                loanTermOptions.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                calculateLoanRepayment();
            });
        });
    }
}

// 计算贷款还款
function calculateLoanRepayment() {
    const amount = document.getElementById('loanAmount').value;
    const term = document.querySelector('.loan-term-option.selected').dataset.months;
    const monthlyPayment = document.getElementById('monthlyPayment');
    const totalInterest = document.getElementById('totalInterest');
    const totalPayment = document.getElementById('totalPayment');
    
    // 简单计算示例（实际应用中应使用更复杂的公式）
    const principal = parseFloat(amount);
    const months = parseInt(term);
    const annualRate = 0.058; // 5.8% 年利率
    const monthlyRate = annualRate / 12;
    
    // 等额本息计算
    const monthlyPay = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPay = monthlyPay * months;
    const interest = totalPay - principal;
    
    // 更新显示
    if (monthlyPayment) monthlyPayment.textContent = '¥' + monthlyPay.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    if (totalInterest) totalInterest.textContent = '¥' + interest.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    if (totalPayment) totalPayment.textContent = '¥' + totalPay.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// 申请贷款
function applyForLoan(loanType) {
    document.getElementById('loanModalTitle').textContent = `申请 ${loanType}`;
    document.getElementById('loanProduct').value = loanType;
    document.getElementById('loan-application-modal').classList.remove('hidden');
    document.getElementById('loan-application-modal').classList.add('flex');
    
    // 计算初始还款计划
    calculateLoanRepayment();
}

// 关闭贷款申请模态框
function closeLoanApplicationModal() {
    document.getElementById('loan-application-modal').classList.add('hidden');
    document.getElementById('loan-application-modal').classList.remove('flex');
}

// 提交贷款申请
function submitLoanApplication() {
    const loanType = document.getElementById('loanProduct').value;
    const amount = document.getElementById('loanAmount').value;
    const term = document.querySelector('.loan-term-option.selected').dataset.months;
    
    alert(`贷款申请提交成功！\n贷款类型：${loanType}\n贷款金额：¥${Number(amount).toLocaleString()}\n贷款期限：${term}个月`);
    closeLoanApplicationModal();
    
    // 显示在我的贷款列表中
    addLoanToList(loanType, amount, term);
}

// 添加贷款到列表
function addLoanToList(type, amount, term) {
    const loanList = document.getElementById('loanList');
    if (loanList) {
        const row = document.createElement('tr');
        row.className = 'border-b border-gray-800';
        row.innerHTML = `
            <td class="py-3 px-2">${type}</td>
            <td class="py-3 px-2">¥${Number(amount).toLocaleString()}</td>
            <td class="py-3 px-2">5.8%</td>
            <td class="py-3 px-2">${term}个月</td>
            <td class="py-3 px-2"><span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">审核中</span></td>
            <td class="py-3 px-2">
                <button onclick="viewLoanDetails(3)" class="text-blue-400 hover:text-blue-300 text-sm">查看</button>
            </td>
        `;
        loanList.appendChild(row);
    }
}

// 查看贷款详情
function viewLoanDetails(loanId) {
    alert(`查看贷款详情 #${loanId}\n此功能开发中，敬请期待！`);
}