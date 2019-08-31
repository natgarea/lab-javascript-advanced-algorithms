stack = new StackDataStructure();

document.querySelector(".add-stack").onclick = function() {
  let currentValue = document.querySelector(".stack-item").value;
  let overflow = stack.push(currentValue) == "Stack Overflow";
  drawStack(overflow, false);
};

document.querySelector(".take-stack").onclick = function() {
  let underflow = stack.pop() == "Stack Underflow";
  drawStack(false, underflow);
};

function drawStack(overflow, underflow) {
  let theHTML = ``;
  for (let i = stack.MAX_SIZE; i > -1; i--) {
    if (i == stack.MAX_SIZE && overflow) {
      theHTML += `<li class="position-${i} flow">Stack Overflow</li>`;
    } else if (i < stack.stackControl.length) {
      theHTML += `<li class="position-${i} filled">${stack.stackControl[i]}</li>`;
    } else if (i == 0 && underflow) {
      theHTML += `<li class="position-${i} flow">Stack Underflow</li>`;
    } else {
      theHTML += `<li class="position-${i} empty"></li>`;
    }
  }

  document.querySelector(".stack-column").innerHTML = theHTML;
}
