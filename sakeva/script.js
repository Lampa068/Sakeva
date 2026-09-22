document.addEventListener('DOMContentLoaded', () => {
  const copyButton = document.getElementById('copyIp');

  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const ip = 'Made by Lampa752';

      try {
        await navigator.clipboard.writeText(ip);
        const originalText = copyButton.textContent;
        copyButton.textContent = 'IP скопирован';
        copyButton.disabled = true;

        setTimeout(() => {
          copyButton.textContent = originalText;
          copyButton.disabled = false;
        }, 1400);
      } catch (error) {
        copyButton.textContent = 'Не удалось скопировать';
        setTimeout(() => {
          copyButton.textContent = 'Скопировать IP';
        }, 1400);
      }
    });
  }

  const playButton = document.querySelector('.btn-primary');
  if (playButton) {
    playButton.addEventListener('click', () => {
      window.location.href = 'https://discord.gg/sakeva';
    });
  }
});
