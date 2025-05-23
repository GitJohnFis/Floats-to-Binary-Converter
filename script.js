const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

const helpRegex = /please help|assist me|mentor me/i;
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|grand|million|billion|zillion|bazillion|crypto|bitcoin|ethereum|coin)?\s+dollars/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
const dearRegex = /(?:\s|^)d[e3][a@4]r fr[i1|][e3]nd(?:\s|$)/i;
/* More regex filters for niche subjects*/
const urgencyRegex = /(?:\s|^)[a@4]c[t7] n[o0]w|L[i1|]m[i1|][t7][e3]d [t7][i1|]m[e3] [o0]ff[e3]r|Urg[e3]n[t7]|F[i1|]n[a@4]l n[o0]t[i1|]c[e3](?:$|\s)/i;
const hackedRegex = /C[o0]ngr[a@4][t7]ul[a@4][t7][i1|][o0]ns, y[o0]u'v[e3] w[o0]n!|Exclus[i1|]v[e3] d[e3][a@4]l|Cl[a@4][i1|]m y[o0]ur pr[i1|]z[e3]|Sp[e3]c[i1|][a@4]l [o0]ff[e3]r just f[o0]r y[o0]u/i;
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearregex, urgencyRegex, hackedRegex];

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});
