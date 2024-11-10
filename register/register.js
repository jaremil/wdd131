function counting() {
    let participantsCount = localStorage.getItem('participantsCount');

    if (participantsCount) {
        participantsCount = parseInt(participantsCount) + 1;
    } else {
        participantsCount = 1;
    }
    localStorage.setItem('participantsCount', participantsCount);
    
    var submissionCount = participantsCount;
    document.getElementById("submission").innerHTML = `Participants: ${submissionCount}`;
}

document.getElementById("add").addEventListener("click", counting());

const el = document.querySelector(".participant1");
let temp = el.outerHTML;
temp = temp.replace("1", counting(participantsCount));
