// 等待DOM加载完成
 document.addEventListener('DOMContentLoaded', function() {
     // 获取DOM元素
     const uploadArea = document.getElementById('uploadArea');
     const fileInput = document.getElementById('fileInput');
     const fileNameDisplay = document.getElementById('fileNameDisplay');
     const lastStepBtn = document.querySelector('.last-step-btn');
     const finishBtn = document.querySelector('.finish-btn');
     
     // 点击上传区域时触发文件选择框
     uploadArea.addEventListener('click', function() {
         fileInput.click();
     });
     
     // 当文件选择改变时显示文件名
     fileInput.addEventListener('change', function(e) {
         if (e.target.files.length > 0) {
             const fileName = e.target.files[0].name;
             displayFileName(fileName);
         }
     });
     
     // 处理拖拽上传功能
     uploadArea.addEventListener('dragover', function(e) {
         e.preventDefault();
         uploadArea.style.backgroundColor = '#E8F4FF';
     });
     
     uploadArea.addEventListener('dragleave', function() {
         uploadArea.style.backgroundColor = '#F2FAFF';
     });
     
     uploadArea.addEventListener('drop', function(e) {
         e.preventDefault();
         uploadArea.style.backgroundColor = '#F2FAFF';
         
         if (e.dataTransfer.files.length > 0) {
             const fileName = e.dataTransfer.files[0].name;
             displayFileName(fileName);
             // 这里可以添加文件上传的逻辑
         }
     });
     
     // 显示文件名函数
     function displayFileName(fileName) {
         fileNameDisplay.textContent = '已选择文件: ' + fileName;
         fileNameDisplay.style.display = 'block';
         
         // 添加动画效果
         fileNameDisplay.style.opacity = '0';
         fileNameDisplay.style.transform = 'translateY(10px)';
         setTimeout(() => {
             fileNameDisplay.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
             fileNameDisplay.style.opacity = '1';
             fileNameDisplay.style.transform = 'translateY(0)';
         }, 10);
     }
     
     // 按钮交互
     lastStepBtn.addEventListener('click', function() {
         console.log('Last step clicked');
         // 这里可以添加返回上一步的逻辑
         alert('返回上一步');
     });
     
     finishBtn.addEventListener('click', function() {
         console.log('Finish clicked');
         // 这里可以添加完成上传的逻辑
         alert('完成上传');
     });
     
     // 添加active状态效果
     lastStepBtn.addEventListener('mousedown', function() {
         this.style.transform = 'translateY(0)';
         this.style.boxShadow = '0 2px 4px rgba(27, 90, 255, 0.2)';
     });
     
     lastStepBtn.addEventListener('mouseup', function() {
         this.style.transform = 'translateY(-2px)';
         this.style.boxShadow = '0 4px 8px rgba(27, 90, 255, 0.3)';
     });
     
     finishBtn.addEventListener('mousedown', function() {
         this.style.transform = 'translateY(0)';
         this.style.boxShadow = '0 2px 4px rgba(27, 90, 255, 0.2)';
     });
     
     finishBtn.addEventListener('mouseup', function() {
         this.style.transform = 'translateY(-2px)';
         this.style.boxShadow = '0 4px 8px rgba(27, 90, 255, 0.3)';
     });
 });