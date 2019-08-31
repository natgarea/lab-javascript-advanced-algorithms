queue = new QueueDataStructure();

document.querySelector(".add-queue").onclick = function() {
    let currentValue = document.querySelector(".queue-item").value;
    let overflow = queue.enqueue(currentValue) == "Queue Overflow";
    drawQueue(overflow, false);
  };

  document.querySelector(".take-queue").onclick = function() {
    let underflow = queue.dequeue() == "Queue Underflow";
    drawQueue(false, underflow);
  };
  
  function drawQueue(overflow, underflow) {
    let theHTML = ``;
    for (let i = queue.MAX_SIZE; i > -1; i--) {
      if (i == queue.MAX_SIZE && overflow) {
        theHTML += `<li class="position-${i} flow">Queue Overflow</li>`;
      } else if (i < queue.queueControl.length) {
        theHTML += `<li class="position-${i} filled">${queue.queueControl[i]}</li>`;
      } else if (i == 0 && underflow) {
        theHTML += `<li class="position-${i} flow">Queue Underflow</li>`;
      } else {
        theHTML += `<li class="position-${i} empty"></li>`;
      }
    }
  
    document.querySelector(".queue-column").innerHTML = theHTML;
  }
  