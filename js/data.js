window.addEventListener('DOMContentLoaded', () => {
    const data = localStorage.getItem('data');
    const span = document.getElementById("data");

    if (data) {
    span.innerHTML = data
    }
  });