function toggleChatbox() {
    const chatbox = document.getElementById('chatbox');
    chatbox.classList.toggle('minimized');
}

function sendMessage() {
    const input = document.getElementById('replyInput');
    const message = input.value.trim();
    if (message !== "") {
        const messageElement = document.createElement('div');
        messageElement.className = 'message sent';
        messageElement.innerHTML = `<span class="message-text">${message}</span><span class="message-time">${getCurrentTime()}</span>`;

        const messagesContainer = document.querySelector('.chatbox-content .messages');
        messagesContainer.appendChild(messageElement);

        input.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

function addReceivedMessage(messageText) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message received';
    messageElement.innerHTML = `<span class="message-text">${messageText}</span><span class="message-time">${getCurrentTime()}</span>`;

    const messagesContainer = document.querySelector('.chatbox-content .messages');
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const headerTimeElement = document.querySelector('.message-time');
    headerTimeElement.textContent = getCurrentTime();
});