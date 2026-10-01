// Prompt 下達指令腳本需求實作：
// 「請幫我規劃並製作這個幸運物網頁的動態互動效果，包含滑鼠懸停與點擊動畫。」

document.addEventListener('DOMContentLoaded', () => {
    const luckyCard = document.getElementById('luckyCatCard');
    const catAvatar = luckyCard.querySelector('.cat-avatar');

    // 1. 點擊卡片觸發的動畫與效果
    luckyCard.addEventListener('click', (e) => {
        // 觸發貓咪跳躍與晃動動畫
        catAvatar.style.transform = 'scale(1.3) rotate(-10deg)';
        
        setTimeout(() => {
            catAvatar.style.transform = 'scale(1)';
        }, 200);

        // 產生幸運金幣飄落視覺效果
        createCoin(e.clientX, e.clientY);
    });

    // 動態產生金幣漂浮點擊效果
    function createCoin(x, y) {
        const coin = document.createElement('div');
        coin.innerText = '💰';
        coin.style.position = 'fixed';
        coin.style.left = `${x}px`;
        coin.style.top = `${y}px`;
        coin.style.fontSize = '24px';
        coin.style.pointerEvents = 'none';
        coin.style.transition = 'all 0.8s ease-out';
        coin.style.opacity = '1';
        coin.style.transform = 'translate(-50%, -50%) scale(1)';

        document.body.appendChild(coin);

        // 啟動動畫
        requestAnimationFrame(() => {
            coin.style.top = `${y - 60}px`;
            coin.style.opacity = '0';
            coin.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });

        // 移除元素
        setTimeout(() => {
            coin.remove();
        }, 800);
    }
});

