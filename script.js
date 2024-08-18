!function (w, d, s, ...args) {
    var div = d.createElement('div');
    div.id = 'aichatbot';
    d.body.appendChild(div);
    w.chatbotConfig = args;
    var f = d.getElementsByTagName(s)[0], j = d.createElement(s);
    j.defer = true;
    j.type = 'module';
    j.src = 'https://aichatbot.sendbird.com/index.js';
    f.parentNode.insertBefore(j, f);
  }(window, document, 'script', 'C9F26F0C-4BB2-4B9B-B407-F3594885F939', 'onboarding_bot', {
    apiHost: 'https://api-cf-ca-1.sendbird.com/',
});